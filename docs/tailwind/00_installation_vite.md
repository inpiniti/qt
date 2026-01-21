
# Tailwind CSS with Vite

## Installation

1. **Create your project** (if not exists)
   ```bash
   npm create vite@latest my-project
   cd my-project
   ```

2. **Install Tailwind CSS**
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

3. **Configure the Vite plugin**
   Add the `@tailwindcss/vite` plugin to your Vite configuration (`vite.config.ts` or `vite.config.js`).
   ```js
   import { defineConfig } from 'vite'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [
       tailwindcss(),
     ],
   })
   ```

4. **Import Tailwind CSS**
   Add an `@import` to your CSS file (e.g., `src/index.css` or `src/style.css`).
   ```css
   @import "tailwindcss";
   ```

5. **Start your build process**
   ```bash
   npm run dev
   ```

## Resources
- [Using Vite Guide](https://tailwindcss.com/docs/installation/using-vite)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
