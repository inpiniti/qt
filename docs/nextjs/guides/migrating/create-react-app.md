
# Migrating from Create React App (CRA)

Steps to migrate a CRA project to Next.js.

## Steps
1. **Install Next.js**: `npm install next@latest`.
2. **Update Scripts**: Change `start`, `build`, `test` scripts to use `next`.
3. **Move Files**: Move `src/index.js` logic to `app/layout.js` or `app/page.js`.
4. **Update Routing**: Replace `react-router-dom` with Next.js file-system routing.
5. **Image Imports**: Update image imports or place assets in `public/`.
6. **CSS**: Global CSS usually works, but check import locations.
