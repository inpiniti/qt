"use client"

import {
    Zap,
    Box,
    Layers,
    Database,
    Atom,
    Wind,
    ShieldCheck,
    GitBranch,
    PenTool,
    BookOpenText,
    Settings,
    UserCircle,
    ChevronRight,
    Library
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLayoutStore } from "@/store/useLayoutStore"
import { useDocStore, ViewMode } from "@/store/useDocStore"
import { cn } from "@/lib/utils"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function ActivityBar() {
    const { isSidebarOpen, toggleSidebar } = useLayoutStore()
    const { selectedLibrary, setSelectedLibrary, setViewMode, viewMode } = useDocStore()

    const mainCategories = [
        { id: 'qt', name: 'QT Documents', icon: PenTool, color: 'text-amber-500' },
        { id: 'skills', name: 'Skills', icon: ShieldCheck, color: 'text-indigo-500' },
        { id: 'workflows', name: 'Workflows', icon: GitBranch, color: 'text-rose-500' },
    ]

    const docLibraries = [
        { id: 'nextjs', name: 'Next.js', icon: Zap, color: 'text-blue-500' },
        { id: 'motion', name: 'Motion', icon: Layers, color: 'text-purple-500' },
        { id: 'react-query', name: 'React Query', icon: Atom, color: 'text-red-500' },
        { id: 'shadcn', name: 'Shadcn UI', icon: Box, color: 'text-zinc-400' },
        { id: 'supabase', name: 'Supabase', icon: Database, color: 'text-emerald-500' },
        { id: 'tailwind', name: 'Tailwind', icon: Wind, color: 'text-cyan-500' },
        { id: 'zustand', name: 'Zustand', icon: BookOpenText, color: 'text-orange-500' },
    ]

    const handleCategoryClick = (id: ViewMode) => {
        if (viewMode === id && !selectedLibrary) {
            if (isSidebarOpen) toggleSidebar()
        } else {
            setViewMode(id)
            if (!isSidebarOpen) toggleSidebar()
        }
    }

    const handleLibClick = (id: string) => {
        if (viewMode === 'docs' && selectedLibrary === id) {
            if (isSidebarOpen) toggleSidebar()
        } else {
            setSelectedLibrary(id)
            if (!isSidebarOpen) toggleSidebar()
        }
    }

    return (
        <TooltipProvider delayDuration={0}>
            <div className="w-16 border-r bg-muted/10 flex flex-col items-center py-4 justify-between h-full select-none overflow-y-auto no-scrollbar">
                <div className="flex flex-col gap-2 w-full px-2">
                    {/* Main Core Categories */}
                    {mainCategories.map((cat) => (
                        <Tooltip key={cat.id}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        "w-12 h-12 transition-all duration-200",
                                        viewMode === cat.id ? `${cat.color} bg-muted` : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => handleCategoryClick(cat.id as ViewMode)}
                                >
                                    <cat.icon className="h-6 w-6" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">{cat.name}</TooltipContent>
                        </Tooltip>
                    ))}

                    <div className="my-2 h-[1px] bg-border mx-2" />

                    {/* Library Header Icon (Optional visual cue) */}
                    <div className="flex justify-center mb-1 opacity-50">
                        <Library className="h-3 w-3" />
                    </div>

                    {docLibraries.map((lib) => (
                        <Tooltip key={lib.id}>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={cn(
                                        "w-12 h-12 transition-all duration-200",
                                        viewMode === 'docs' && selectedLibrary === lib.id
                                            ? `${lib.color} bg-muted shadow-inner`
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                    onClick={() => handleLibClick(lib.id)}
                                >
                                    <lib.icon className="h-5 w-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">{lib.name}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>

                <div className="flex flex-col gap-2 w-full px-1 mt-auto">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-12 h-12 text-muted-foreground hover:text-foreground">
                                <UserCircle className="h-6 w-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Profile</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-12 h-12 text-muted-foreground hover:text-foreground">
                                <Settings className="h-6 w-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </TooltipProvider>
    )
}
