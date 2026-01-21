
# Tailwind CSS Integration

Motion and Tailwind CSS work excellently together. Tailwind handles the **styling** (layout, static appearance), and Motion handles the **animation** (state changes, values).

## Basic Usage
Use Tailwind classes for the `className` and Motion props for behavior.

```jsx
<motion.button
  className="bg-blue-500 text-white px-4 py-2 rounded shadow"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
```

## Responsive Animations
You can combine Tailwind's responsive CSS variables with Motion.

```jsx
<motion.div
  // Define responsive variable: 20px on mobile, 50px on md+
  className="[--y-pos:20px] md:[--y-pos:50px]" 
  animate={{ y: "var(--y-pos)" }}
/>
```

When the viewport changes breakpoint, the `--y-pos` variable updates, and Motion animates to the new value.

## CSS Springs
Motion Studio can generate complex CSS linear easing functions (springs) that you can add to your Tailwind theme.

```css
/* in your css or tailwind config */
--ease-spring-soft: linear(0, 0.0332, ... 1);
```

```jsx
<div className="transition-transform duration-700 ease-spring-soft" />
```
