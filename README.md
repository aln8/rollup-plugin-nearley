# rollup-plugin-nearley

This is rollup/vite plugin for [nearley](https://github.com/kach/nearley).

It will parse `.ne` grammers once import it.

Currently only `nearley@^2.0.0` is supported with esmoudle build. I added nearley as `peer dependency`. Git tag start from `2.0.0`, I intentionally reserve `^1.0.0` for `nearley@^1.0.0` support in the future.

# usage

Install `rollup-plugin-nearley` first.

```
import { defineConfig } from 'vite'
import nearley from 'rollup-plugin-nearley';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nearley(),
  ]
});
```

# Contribution

Appreciate for any PR
