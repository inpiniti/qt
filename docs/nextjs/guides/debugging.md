
# Debugging

Techniques for debugging Next.js applications.

## Server-side Debugging
- Use `console.log` in Server Components/Actions (output appears in terminal).
- Use Node.js debugger: `NODE_OPTIONS='--inspect' next dev`.

## Client-side Debugging
- Use browser DevTools.
- React Developer Tools extension.

## VS Code Debugging
Create a `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```
