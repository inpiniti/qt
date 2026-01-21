"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { PenTool, ShieldCheck, GitBranch, Library, BookOpen } from "lucide-react"
import { useDocStore } from "@/store/useDocStore"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

export function WelcomeScreen() {
    const { setViewMode } = useDocStore()

    const cards = [
        { id: 'qt', label: 'QT Documents', icon: PenTool, color: 'text-amber-500', desc: 'Read and manage your Quiet Time notes.' },
        { id: 'skills', label: 'Agent Skills', icon: ShieldCheck, color: 'text-indigo-500', desc: 'Explore the specialized capabilities of your AI agents.' },
        { id: 'workflows', label: 'Workflows', icon: GitBranch, color: 'text-rose-500', desc: 'Follow structured procedures for efficient development.' },
        { id: 'docs', label: 'Library Docs', icon: Library, color: 'text-primary', desc: 'Access official documentation for external libraries.' },
    ]

    return (
        <ScrollArea className="h-full w-full bg-background relative overflow-hidden">
            <div className="min-h-full flex flex-col items-center justify-center p-8 relative">
                {/* Background Decorative Elements */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl w-full space-y-12 text-center py-12"
                >
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
                            <BookOpen className="h-3 w-3" />
                            Knowledge Base
                        </div>
                        <h1 className="text-5xl font-extrabold tracking-tighter">
                            Welcome to <span className="text-primary italic">QT IDE</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Your central hub for spiritual growth, agent expertise, and technical documentation.
                            Select a category from the sidebar to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {cards.map((card, i) => (
                            <motion.button
                                key={card.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setViewMode(card.id as any)}
                                className="group p-6 text-left bg-muted/20 border border-border/50 rounded-2xl hover:bg-muted/40 hover:border-primary/30 transition-all duration-300 shadow-sm"
                            >
                                <div className={cn("p-3 rounded-xl bg-background w-fit mb-4 shadow-sm group-hover:scale-110 transition-transform", card.color)}>
                                    <card.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{card.label}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                            </motion.button>
                        ))}
                    </div>

                    <div className="pt-8 text-xs text-muted-foreground/50 tracking-widest uppercase">
                        Refined with DeepMind Antigravity
                    </div>
                </motion.div>
            </div>
        </ScrollArea>
    )
}
