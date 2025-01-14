/// <reference types="nearley" />

declare module "nearley/lib/generate.js" {
  function generate(parser: nearley.Parser, exportName: any): any;
  namespace generate {
    function _default(parser: nearley.Parser, exportName: string): string;
    function js(parser: nearley.Parser, exportName: string): string;
    function javascript(parser: nearley.Parser, exportName: string): string;

    function ts(parser: nearley.Parser, exportName?: string): string;
    function typescript(parser: nearley.Parser, exportName?: string): string;

    function module(parser: nearley.Parser, exportName?: string): string;
    function esmodule(parser: nearley.Parser, exportName?: string): string;

    function cs(parser: nearley.Parser, exportName: string): string;
    function coffee(parser: nearley.Parser, exportName: string): string;
    function coffeescript(parser: nearley.Parser, exportName: string): string;
  }

  export default generate;
  export as namespace generate;
}

declare module "nearley/lib/nearley-language-bootstrapped.js" {
  import type { CompiledRules } from "nearley";
  const compileRules: CompiledRules;
  export default compileRules;
  export as namespace compileRules;
}

declare module "nearley/lib/compile.js" {
  export interface Structure {}

  function compile(structure: any, opts: any): nearley.Grammar;

  export default compile;
  export as namespace compile;
}

declare module "nearley/lib/lint.js" {
  export interface LintOptions {
    out?: NodeJS.WriteStream;
  }

  export default function lint(grm: nearley.Grammar, opts: LintOptions): void;
  export as namespace lint;
}
