# Crop & Compress Images

This project features a minimal setup of **Vite** (`yarn create vite`), using React, TailwindCSS, Flowbite UI, [react-easy-crop](https://www.npmjs.com/package/react-easy-crop) and [js-image-compressor](https://www.npmjs.com/package/js-image-compressor).

## Deployment on GitHub Pages

The project is designed to be deployed on `GitHub Pages`. To accommodate the way GitHub Pages serves content, the root of the project includes a `/docs` folder (_where the **latest build** files are stored_), which will be served by GitHub.

After each `build`, the resulting `/dist` folder is copied to `/docs` at the root of the project, making it ready to be served on **GitHub Pages**. This process is handled by the following build script in `/vite-code/package.json`:

```json
"build": "rm -rf ./docs && vite build && cp -r dist docs && node ./afterBuild.cjs",
```

There is also a script in the `afterBuild.cjs` file that adds prefixes within the final `index.html` file, which are necessary to correctly import the final files on GitHub Pages.
