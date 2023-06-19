# rollup-plugin-nearley

This is rollup/vite plugin for [nearley](https://github.com/kach/nearley).

Currently only `nearley@^2.0.0` is supported with esmoudle build. I added nearley as `peer dependency`. Git tag start from `2.0.0`, I intentionally reserve `^1.0.0` for `nearley@^1.0.0` support in the future.

# usage

Install `rollup-plugin-nearley` first.

```
import { defineConfig } from 'vite'
import nearley from 'rollup-plugin-nearley';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // default extension is ".ne" if you don't pass any options
    nearley({extension: ".ne"}),
  ]
});
```

# Contribution

Appreciate for any PR
