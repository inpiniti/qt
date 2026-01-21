import { create } from 'zustand'

export type ViewMode = 'docs' | 'skills' | 'workflows' | 'qt'

interface DocState {
    viewMode: ViewMode
    selectedLibrary: string | null // Used primarily for 'docs'
    selectedDocPath: string | null
    docTree: any[]

    setViewMode: (mode: ViewMode) => void
    setSelectedLibrary: (library: string | null) => void
    setSelectedDocPath: (path: string | null) => void
    setDocTree: (tree: any[]) => void
}

export const useDocStore = create<DocState>((set) => ({
    viewMode: 'qt', // Default to QT for the user
    selectedLibrary: null,
    selectedDocPath: null,
    docTree: [],

    setViewMode: (mode) => set({
        viewMode: mode,
        selectedLibrary: null, // Reset library when switching root mode
        docTree: [] // Clear tree while loading
    }),
    setSelectedLibrary: (library) => set({
        selectedLibrary: library,
        viewMode: 'docs' // Force docs mode when a library is selected
    }),
    setSelectedDocPath: (path) => set({ selectedDocPath: path }),
    setDocTree: (tree) => set({ docTree: tree })
}))
