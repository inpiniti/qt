
# Sass

Next.js has built-in support for Sass using both the `.scss` and `.sass` extensions.

## Installation
Install the `sass` package:

```bash
npm install sass
```

## Usage
You can use module-level Sass or global Sass.

### CSS Modules
Create a file like `Button.module.scss`.

```scss
// Button.module.scss
.error {
  color: white;
  background-color: red;
}
```

Import and use it:

```jsx
import styles from './Button.module.scss'

export function Button() {
  return <button className={styles.error}>Destroy</button>
}
```

### Global Sass
Import `globals.scss` in your root layout.

## Configuration
Configure the Sass compiler in `next.config.js` if needed (e.g., for `includePaths`).

```javascript
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```
