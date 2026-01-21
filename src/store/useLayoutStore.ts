import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LayoutState {
    // Panel Visibility
    isSidebarOpen: boolean
    isRightPanelOpen: boolean
    isBottomPanelOpen: boolean

    // Panel Sizes (Percentage)
    sidebarSize: number
    rightPanelSize: number
    bottomPanelSize: number

    // Actions
    toggleSidebar: () => void
    toggleRightPanel: () => void
    toggleBottomPanel: () => void
    setSidebarSize: (size: number) => void
    setRightPanelSize: (size: number) => void
    setBottomPanelSize: (size: number) => void
}

export const useLayoutStore = create<LayoutState>()(
    persist(
        (set) => ({
            isSidebarOpen: true,
            isRightPanelOpen: false,
            isBottomPanelOpen: true,

            sidebarSize: 25,     // Default 25%
            rightPanelSize: 20,  // Default 20%
            bottomPanelSize: 30, // Default 30%

            toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
            toggleRightPanel: () => set((state) => ({ isRightPanelOpen: !state.isRightPanelOpen })),
            toggleBottomPanel: () => set((state) => ({ isBottomPanelOpen: !state.isBottomPanelOpen })),

            setSidebarSize: (size) => set({ sidebarSize: size }),
            setRightPanelSize: (size) => set({ rightPanelSize: size }),
            setBottomPanelSize: (size) => set({ bottomPanelSize: size }),
        }),
        {
            name: 'layout-storage',
        }
    )
)
