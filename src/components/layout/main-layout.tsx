"use client"

import * as React from "react"
import { useLayoutStore } from "@/store/useLayoutStore"

import { TitleBar } from "./title-bar"
import { ActivityBar } from "./activity-bar"
import { Sidebar } from "./sidebar"
import { StatusBar } from "./status-bar"
import { WelcomeScreen } from "./welcome-screen"
import { BottomPanel } from "./bottom-panel"
import { RightPanel } from "./right-panel"
import { DocViewer } from "./doc-viewer"
import { useDocStore } from "@/store/useDocStore"
import { cn } from "@/lib/utils"

export function MainLayout() {
    const {
        isSidebarOpen,
        isRightPanelOpen,
        isBottomPanelOpen,
    } = useLayoutStore()

    const { viewMode, selectedDocPath } = useDocStore()

    // Prevent hydration mismatch
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden bg-background text-foreground">
            {/* 1. Top: Title Bar */}
            <TitleBar />

            {/* 2. Middle: Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Fixed Activity Bar */}
                <ActivityBar />

                {/* Left Sidebar (Fixed Width when open) */}
                <div
                    className={cn(
                        "border-r bg-sidebar transition-all duration-300 ease-in-out overflow-hidden",
                        isSidebarOpen ? "w-72" : "w-0 border-r-0"
                    )}
                >
                    <div className="w-72 h-full">
                        <Sidebar />
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                    <div className="flex-1 flex overflow-hidden">
                        {/* Center Doc Viewer or Welcome Screen */}
                        <div className="flex-1 min-w-0 overflow-hidden relative flex flex-col">
                            {selectedDocPath ? (
                                <DocViewer path={selectedDocPath} />
                            ) : (
                                <WelcomeScreen />
                            )}
                        </div>

                        {/* Right Panel (Fixed Width when open) */}
                        <div
                            className={cn(
                                "border-l bg-sidebar transition-all duration-300 ease-in-out overflow-hidden",
                                isRightPanelOpen ? "w-80" : "w-0 border-l-0"
                            )}
                        >
                            <div className="w-80 h-full">
                                <RightPanel />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Panel (Fixed Height when open) */}
                    <div
                        className={cn(
                            "border-t transition-all duration-300 ease-in-out overflow-hidden",
                            isBottomPanelOpen ? "h-64" : "h-0 border-t-0"
                        )}
                    >
                        <div className="h-64 w-full">
                            <BottomPanel />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Bottom: Status Bar */}
            <StatusBar />
        </div>
    )
}
