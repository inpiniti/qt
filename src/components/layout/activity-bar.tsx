"use client"

import {
    Files,
    Search,
    GitGraph,
    Play,
    SquareCode,
    Settings,
    UserCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLayoutStore } from "@/store/useLayoutStore"
import { cn } from "@/lib/utils"

export function ActivityBar() {
    return (
        <div className="w-16 border-r bg-muted/10 flex flex-col items-center py-4 justify-between">
            <div className="flex flex-col gap-4 w-full px-2">
                <Button variant="ghost" size="icon" className="w-12 h-12 text-primary">
                    <Files className="h-7 w-7" />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <GitGraph className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <Play className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <SquareCode className="h-5 w-5" />
                </Button>
            </div>

            <div className="flex flex-col gap-2 w-full px-1">
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <UserCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground hover:text-foreground">
                    <Settings className="h-5 w-5" />
                </Button>
            </div>
        </div>
    )
}
