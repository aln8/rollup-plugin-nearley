import { Plugin } from 'vite'
import nearley from 'nearley'
import generate from 'nearley/lib/generate'
import compile from 'nearley/lib/compile'
import lint from 'nearley/lib/lint'
import rawGrammar from 'nearley/lib/nearley-language-bootstrapped'

export interface Options {
  // default to .ne
  extension?: string
}

export async function transform_ne_file(code: string, file: string): Promise<string> {
  const nearleyGrammar = nearley.Grammar.fromCompiled(rawGrammar);
  const parser = new nearley.Parser(nearleyGrammar);

  parser.feed(code);
  const compilation = compile(parser.results[0], { file: file });

  lint(compilation, {});
  return generate.module(compilation as any);
}

export default function nearleyPlugin(opt: Options = { extension: "ne" }): Plugin {
  const nearleyRe = new RegExp(`.${opt.extension}$`)

  return {
    name: 'vite:nearley',

    enforce: 'pre',

    transform(code, id, _opt) {
      if (nearleyRe.test(id)) {
        return transform_ne_file(code, id);
      }
    },
  }
}
