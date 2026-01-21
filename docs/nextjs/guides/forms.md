
# Forms

Building forms in Next.js using Server Actions.

## Basic Form
```jsx
import { saveData } from './actions'

export default function Page() {
  return (
    <form action={saveData}>
      <input type="text" name="data" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Pending State (useFormStatus)
```jsx
'use client'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return <button disabled={pending}>{pending ? 'Saving...' : 'Save'}</button>
}
```

## Server-side Validation (useFormState)
Use `useFormState` (or `useActionState` in React 19) to handle validation errors returned from the server action.
