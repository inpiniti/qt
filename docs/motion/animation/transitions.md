
# Transitions

A `transition` defines how values animate from one state to another. You can define transitions for all values, or specific configurations for individual values.

## Usage

```jsx
<motion.div 
  animate={{ x: 100 }} 
  transition={{ duration: 2, type: "spring" }} 
/>
```

## Settings

### Tween
Mode for duration-based animations.

- **`duration`**: Time in seconds (default 0.3).
- **`ease`**: Easing function (`"linear"`, `"easeInOut"`, `[.17, .67, .83, .67]`).
- **`times`**: Array of numbers (0-1) defining where keyframes land.

### Spring
Physics-based animation.

- **`type`**: `"spring"`
- **`stiffness`**: Tension of the spring (default 100).
- **`damping`**: Strength of opposing force (default 10).
- **`mass`**: Mass of the object (default 1).
- **`bounce`**: Bounciness (0-1). Overrides duration/stiffness/damping if set.
- **`visualDuration`**: Wraps physics to match a rough duration.

### Inertia
Decays a value based on initial velocity. Used for drag.

- **`type`**: `"inertia"`
- **`velocity`**: Initial velocity.
- **`min` / `max`**: Boundaries to snap to.
- **`power`**: How far it travels (default 0.8).
- **`timeConstant`**: Deceleration rate (default 700).

## Orchestration

- **`delay`**: Delay before starting (seconds).
- **`delayChildren`**: Delay before starting children animations.
- **`staggerChildren`**: Delay between each child animation.
- **`staggerDirection`**: `1` (forward) or `-1` (backward).
- **`when`**: `"beforeChildren"` or `"afterChildren"`.

## Value-Specific Transitions

You can set different transitions for `x`, `opacity`, etc.

```jsx
<motion.div
  animate={{ x: 100, opacity: 1 }}
  transition={{
    default: { duration: 0.5 },
    x: { type: "spring", stiffness: 100 }
  }}
/>
```
