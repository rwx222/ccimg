# Vite + React

This project implements a minimal setup of Vite (`yarn create vite`), with React and TailwindCSS.

This project is intended to be deployed on `GitHub Pages`. For this reason, and due to how GitHub Pages works, the root of the project only contains a `.gitignore` file and the `/vite-code` folder, which is where all the development code is located.

Once a `build` is executed, the resulting files are copied to the root of the project to be served on **GitHub Pages** using the following build script:

```json
// /vite-code/package.json
"build": "vite build && cp -r dist/* ../"
```
