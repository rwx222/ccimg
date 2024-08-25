# Crop & Compress Images

This project implements a minimal setup of Vite (`yarn create vite`), with React and TailwindCSS.

This project is intended to be deployed on `GitHub Pages`. For this reason, and due to how GitHub Pages works, the root of the project only contains:

- A `.gitignore` file.
- A `/docs` folder (_where the **last build** files are located_).
- And the `/vite-code` folder, which is where all the development code is located.

Once a `build` is executed, the resulting files are copied to the `/docs` folder at the root of the project to be served on **GitHub Pages**. This is done using the following build script in `/vite-code/package.json`:

```json
"build": "rm -rf ../docs && vite build && cp -r dist ../docs"
```
