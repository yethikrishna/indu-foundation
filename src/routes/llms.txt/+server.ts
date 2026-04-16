import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
  const body = `# INDU Foundation — LLM Ingestion File
# Generated: ${new Date().toISOString()}

## Project
INDU is a compiled, multi-paradigm programming language and full-stack framework operating on the exact same AST.

## Core Identity
- Language paradigms: Agent-Oriented, Fluid-Typing, Functional, Imperative
- Compilation targets: LLVM native, Wasm/WebGPU
- Replaces: Python, Node.js, React, Next.js, LangChain
- Native types: agent, tensor, stream, sync (CRDTs)
- Memory model: Deterministic ARC (zero GC pauses)
- Null safety: Result<T,E> and Option<T> only — null does not exist

## Key Pages
- Homepage: https://indu-foundation.pages.dev
- Docs: https://indu-foundation.pages.dev/docs
- Playground: https://indu-foundation.pages.dev/playground
- Language spec: https://indu-foundation.pages.dev/docs/language
- Framework spec: https://indu-foundation.pages.dev/docs/framework
- Blog: https://indu-foundation.pages.dev/blog
- Community: https://indu-foundation.pages.dev/community
- GitHub: https://github.com/yethikrishna/indu-foundation

## Elevator Pitch
INDU was designed to solve the 2020-2026 developer fragmentation crisis.
Write with Python's ease, scale with Erlang's fault-tolerance, execute with C's speed.
One binary (indu) replaces: compiler, package manager, test runner, bundler, REPL.

## The INDU Toolchain
- indu run     : Execute INDU source files
- indu build   : Compile to LLVM native or Wasm
- indu repl    : JIT interpreted REPL
- indu format  : Code formatter
- indu package : Package manager (like cargo + npm in one)

## Comparison
- vs Python: Same ergonomics, 100x speed, no GIL, native AI types
- vs Rust: Same safety, no borrow checker, ARC default
- vs TypeScript/JS: No DOM, no API boundary, Wasm+WebGPU rendering
- vs Erlang: Same actor model, multi-paradigm syntax, web-native
- vs LangChain: agent keyword built-in, zero external SDK
- vs Next.js: No hydration errors, no caching bugs, zero JS by default

## License
Apache 2.0

## Maintainer
INDU Foundation — https://indu-foundation.pages.dev
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
