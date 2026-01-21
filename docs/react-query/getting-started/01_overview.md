# Overview

TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes **fetching, caching, synchronizing and updating server state** in your web applications a breeze.

## Motivation

Most traditional state management libraries are great for working with client state, but they are **not great at working with asynchronous or server state**. This is because server state is totally different. For starters, server state:

- Is persisted remotely in a location you may not control or own
- Requires asynchronous APIs for fetching and updating
- Implies shared ownership and can be changed by other people without your knowledge
- Can potentially become "out of date" in your applications if you're not careful

## What does it do?

React Query allows you to defeat and overcome the tricky challenges and edge cases of server state and control your app data before it starts controlling you.

## Key Features

- **Backend Agnostic**: Works with any Promise-based method (REST, GraphQL, etc.)
- **Auto Caching & Refetching**: Keeps data fresh without manual intervention.
- **Parallel Queries**: Fetch multiple data sources efficiently.
- **Window Focus Refetching**: Updates data when the user returns to the app.
- **Request Cancellation**: Cancel requests automatically when they are no longer needed.
- **Dedicated Devtools**: Inspect and debug queries with ease.
