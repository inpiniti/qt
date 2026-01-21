# Dependent Queries

Dependent queries are queries that depend on previous ones to finish before they can execute.

## Implementation

Use the `enabled` option to tell a query when it is ready to run.

```jsx
// Get the user
const { data: user } = useQuery({
  queryKey: ['user', email],
  queryFn: getUserByEmail,
})

const userId = user?.id

// Then get the user's projects
const { isPending, data: projects } = useQuery({
  queryKey: ['projects', userId],
  queryFn: getProjectsByUser,
  // The query will not execute until the userId exists
  enabled: !!userId,
})
```

The `projects` query starts in `fetchStatus: 'idle'` until `userId` becomes available.
