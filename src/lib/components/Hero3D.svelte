<script lang="ts">
  import { onMount } from 'svelte';

  let canvasEl: HTMLCanvasElement | undefined = $state();
  export let class: string = '';

  onMount(() => {
    let animationId: number;
    let renderer: import('three').WebGLRenderer | null = null;

    const init = async () => {
      if (!canvasEl) return;

      const THREE = await import('three');
      const canvas = canvasEl;
      const w = canvas.clientWidth  || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;

      // Renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Scene + Camera
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
      camera.position.set(0, 0, 4);

      // Aurora icosahedron
      const geo = new THREE.IcosahedronGeometry(1.6, 4);
      const mat = new THREE.MeshPhongMaterial({
        color:     0x0a0f1e,
        wireframe: true,
        wireframeLinewidth: 1,
      });
      const wireframe = new THREE.Mesh(geo, mat);
      scene.add(wireframe);

      // Glow sphere
      const glowGeo = new THREE.SphereGeometry(2.2, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        transparent: true,
        opacity: 0.03,
        side: THREE.BackSide,
      });
      scene.add(new THREE.Mesh(glowGeo, glowMat));

      // Ambient + directional lights
      scene.add(new THREE.AmbientLight(0xf59e0b, 0.4));
      const dirLight = new THREE.DirectionalLight(0x14b8a6, 1.2);
      dirLight.position.set(5, 5, 5);
      scene.add(dirLight);
      const dirLight2 = new THREE.DirectionalLight(0x8b5cf6, 0.8);
      dirLight2.position.set(-5, -3, 2);
      scene.add(dirLight2);

      // Particle field
      const particleCount = 800;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({ color: 0xf59e0b, size: 0.02, transparent: true, opacity: 0.6 });
      scene.add(new THREE.Points(pGeo, pMat));

      // Resize handler
      const onResize = () => {
        if (!renderer || !canvas) return;
        const w2 = canvas.clientWidth  || window.innerWidth;
        const h2 = canvas.clientHeight || window.innerHeight;
        camera.aspect = w2 / h2;
        camera.updateProjectionMatrix();
        renderer.setSize(w2, h2);
      };
      window.addEventListener('resize', onResize);

      // Mouse parallax
      let mx = 0, my = 0;
      const onMouse = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth  - 0.5) * 2;
        my = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener('mousemove', onMouse);

      // Animate
      const tick = (t: number) => {
        animationId = requestAnimationFrame(tick);
        wireframe.rotation.x = t * 0.0003 + my * 0.1;
        wireframe.rotation.y = t * 0.0005 + mx * 0.1;
        camera.position.x += (mx * 0.3 - camera.position.x) * 0.05;
        camera.position.y += (-my * 0.3 - camera.position.y) * 0.05;
        renderer!.render(scene, camera);
      };
      animationId = requestAnimationFrame(tick);

      return () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('mousemove', onMouse);
      };
    };

    init();

    return () => {
      cancelAnimationFrame(animationId);
      renderer?.dispose();
    };
  });
</script>

<canvas bind:this={canvasEl} class="hero-canvas {class}" aria-hidden="true"></canvas>

<style>
  .hero-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    pointer-events: none;
  }
</style>
