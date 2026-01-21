"use client"

import { useLayoutStore } from "@/store/useLayoutStore"
import { Button } from "@/components/ui/button"
import { Sidebar as SidebarIcon, PanelBottom, PanelRight } from "lucide-react"

export function MainEditor() {
    const {
        isRightPanelOpen, toggleRightPanel,
        isBottomPanelOpen, toggleBottomPanel,
        isSidebarOpen, toggleSidebar
    } = useLayoutStore()

    return (
        <div className="h-full bg-background p-4 overflow-auto flex flex-col items-center justify-center gap-4">
            <div className="text-center space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Visual Studio Code <span className="text-primary text-xl">Lite</span></h1>
                <p className="text-muted-foreground">Mockup Layout built with Shadcn UI & Resizable Panels</p>
            </div>

            <div className="flex gap-4 mt-8">
                <div className="flex flex-col items-center gap-2">
                    <Button variant={isSidebarOpen ? "default" : "outline"} onClick={toggleSidebar}>
                        <SidebarIcon className="w-4 h-4 mr-2" />
                        Toggle Sidebar
                    </Button>
                    <span className="text-xs text-muted-foreground">Left Panel</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant={isBottomPanelOpen ? "default" : "outline"} onClick={toggleBottomPanel}>
                        <PanelBottom className="w-4 h-4 mr-2" />
                        Toggle Terminal
                    </Button>
                    <span className="text-xs text-muted-foreground">Bottom Panel</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant={isRightPanelOpen ? "default" : "outline"} onClick={toggleRightPanel}>
                        <PanelRight className="w-4 h-4 mr-2" />
                        Toggle Right Panel
                    </Button>
                    <span className="text-xs text-muted-foreground">Right Panel</span>
                </div>
            </div>
        </div>
    )
}
