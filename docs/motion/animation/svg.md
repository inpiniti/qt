
# SVG Animation

Motion provides robust support for animating SVG elements. You can animate any SVG element by using the `motion` prefix (e.g., `motion.path`, `motion.circle`, `motion.rect`).

## Usage

```jsx
<motion.circle
  cx={500}
  cy={500}
  r={20}
  animate={{ cx: [null, 100, 200] }}
  transition={{ duration: 3, times: [0, 0.2, 1] }}
/>
```

## Line Drawing

Motion allows you to easily create "line drawing" animations using the `pathLength`, `pathSpacing`, and `pathOffset` properties.

- **`pathLength`**: Animates the length of the path from 0 to 1.
- **`pathSpacing`**: Sets spacing between dashes.
- **`pathOffset`**: Offsets the path content.

```jsx
<motion.path
  d="M 0 0 L 100 100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
/>
```

This works on `circle`, `ellipse`, `line`, `path`, `polygon`, `polyline`, and `rect`.

## Path Morphing

You can animate the `d` attribute of a `path` to morph between two shapes. Ensure both paths have the same number of points and commands for the best results, or use a library like `flubber` to interpolate.

```jsx
<motion.path
  d={path1}
  animate={{ d: path2 }}
/>
```

## Gestures & Interactions

SVG components support all standard Motion gestures like `whileHover`, `whileTap`, and `whileDrag`.

```jsx
<motion.circle
  r={20}
  whileHover={{ scale: 1.2, fill: "#f00" }}
/>
```
