# Does this replace Redux, MobX, etc?

Yes. 

React Query replaces the boilerplate code used to manage **Server State** in Redux. 
It does not strictly replace Redux for **Client State** (e.g. detailed UI state, interactive flows), but for many applications, once you remove the server state from Redux, the remaining client state is small enough to be replaced by `useState`, `useContext`, or lighter libraries like `Zustand`.
