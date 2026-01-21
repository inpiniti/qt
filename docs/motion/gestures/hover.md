
# Hover Animation

## The `whileHover` Prop
The `whileHover` prop defines the animation state to apply when the component is hovered.

```jsx
<motion.button
  whileHover={{ 
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)"
  }}
/>
```

## Customizing Transitions
You can specify a different transition for the hover effect directly within `whileHover`.

```jsx
<motion.button
  whileHover={{ 
    scale: 1.2, 
    transition: { duration: 0.2 } 
  }}
/>
```
