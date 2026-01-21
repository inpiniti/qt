"use client"

import { GitBranch, Bell, Check, Wifi } from "lucide-react"

export function StatusBar() {
    return (
        <div className="h-6 bg-primary text-primary-foreground flex items-center justify-between px-2 text-xs select-none">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <GitBranch className="w-3 h-3" />
                    <span>main*</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <span className="w-3 h-3 rounded-full border border-current flex items-center justify-center text-[8px]">0</span>
                    <span>0↓</span>
                    <span>1↑</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <span>Ln 1, Col 1</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <span>UTF-8</span>
                </div>
                <div className="flex items-center gap-1 hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <span>TypeScript React</span>
                </div>
                <div className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <Wifi className="w-3.5 h-3.5" />
                </div>
                <div className="hover:bg-white/20 px-1 py-0.5 rounded cursor-pointer">
                    <Bell className="w-3.5 h-3.5" />
                </div>
            </div>
        </div>
    )
}
