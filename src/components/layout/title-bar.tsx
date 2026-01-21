"use client"

import * as React from "react"
import {
    Moon,
    Sun,
    PanelLeft,
    PanelBottom,
    PanelRight,
    HelpCircle
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLayoutStore } from "@/store/useLayoutStore"
import { cn } from "@/lib/utils"

export function TitleBar() {
    const { setTheme } = useTheme()
    const {
        isSidebarOpen, toggleSidebar,
        isBottomPanelOpen, toggleBottomPanel,
        isRightPanelOpen, toggleRightPanel
    } = useLayoutStore()

    return (
        <div className="h-10 flex items-center justify-between bg-sidebar border-b px-2 select-none drag-region">
            {/* Left Section: Logo & Help */}
            <div className="flex items-center gap-1">
                <div className="flex items-center gap-2 mr-4 text-primary font-bold">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                    >
                        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                    <span className="text-sm tracking-tight hidden md:block">QT IDE</span>
                </div>

                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs font-normal text-muted-foreground hover:text-foreground">
                    <HelpCircle className="h-3.5 w-3.5 mr-1" />
                    Help
                </Button>
            </div>

            {/* Center Section: Context Info */}
            <div className="absolute left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground pointer-events-none hidden lg:block">
                MyProject — src/app/page.tsx
            </div>

            {/* Right Section: Panel Toggles & Theme */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 h-8 bg-muted/20 rounded-md px-1 border border-border/50">
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("h-7 w-7 transition-colors", isSidebarOpen ? "text-primary bg-background shadow-sm" : "text-muted-foreground")}
                        onClick={toggleSidebar}
                        title="Toggle Sidebar"
                    >
                        <PanelLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("h-7 w-7 transition-colors", isBottomPanelOpen ? "text-primary bg-background shadow-sm" : "text-muted-foreground")}
                        onClick={toggleBottomPanel}
                        title="Toggle Bottom Panel"
                    >
                        <PanelBottom className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("h-7 w-7 transition-colors", isRightPanelOpen ? "text-primary bg-background shadow-sm" : "text-muted-foreground")}
                        onClick={toggleRightPanel}
                        title="Toggle Right Panel"
                    >
                        <PanelRight className="h-4 w-4" />
                    </Button>
                </div>

                <div className="h-4 w-[1px] bg-border mx-1" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent rounded-full transition-colors">
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-500" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-32">
                        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
                            <Sun className="h-4 w-4 mr-2" /> Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
                            <Moon className="h-4 w-4 mr-2" /> Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
                            <span className="h-4 w-4 mr-2 flex items-center justify-center text-[10px] font-bold border rounded-sm">S</span>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
