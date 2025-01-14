import { nearley, generate, compile, lint, rawGrammar } from "./nearley_import";

// import type { Plugin } from "rollup";

const NEARLEY_RE = new RegExp(".ne$");

async function transform_ne_file(code: string, file: string): Promise<string> {
  const nearleyGrammar = nearley.Grammar.fromCompiled(rawGrammar);
  const parser = new nearley.Parser(nearleyGrammar);

  parser.feed(code);
  const compilation = compile(parser.results[0], { file });

  lint(compilation, {});
  return generate.module(compilation as any);
}

export default function nearleyPlugin() {
  return {
    name: "vite:nearley",

    async transform(this, code: string, id: string) {
      if (NEARLEY_RE.test(id)) {
        return await transform_ne_file(code, id);
      }
    },
  };
}
