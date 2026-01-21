
# Tailwind CSS

Next.js works great with Tailwind CSS.

## Setup
When using `create-next-app`, you can select Tailwind CSS to auto-configure it.

To add to an existing project:

1. **Install**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure `tailwind.config.js`**:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./app/**/*.{js,ts,jsx,tsx,mdx}",
       "./pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./components/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Add directives to `globals.css`**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
