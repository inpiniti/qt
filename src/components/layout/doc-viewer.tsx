"use client"

import * as React from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getDocContent } from "@/app/actions/get-doc"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"
import { Book, Loader2, Calendar, Clock, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface DocViewerProps {
    path: string
}

export function DocViewer({ path }: DocViewerProps) {
    const [content, setContent] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        let isMounted = true
        setLoading(true)

        getDocContent(path).then((res) => {
            if (isMounted) {
                setContent(res)
                setLoading(false)
            }
        })

        return () => {
            isMounted = false
        }
    }, [path])

    const breadcrumbs = path.split('/').filter(Boolean)

    return (
        <div className="flex-1 flex flex-col bg-background overflow-hidden relative min-h-0">
            {/* Header / Navigation */}
            <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b bg-muted/5 backdrop-blur-md z-10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground overflow-hidden">
                    <Book className="h-3.5 w-3.5 flex-shrink-0" />
                    {breadcrumbs.map((crumb, i) => (
                        <React.Fragment key={i}>
                            <span className={cn("truncate", i === breadcrumbs.length - 1 && "text-foreground font-medium")}>
                                {crumb.replace('.md', '')}
                            </span>
                            {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 flex-shrink-0 opacity-50" />}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:flex">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>Jan 21, 2026</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>5 min read</span>
                    </div>
                </div>
            </div>

            <ScrollArea className="flex-1 min-h-0">
                <div className="max-w-3xl mx-auto px-8 py-12">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-32 gap-4"
                            >
                                <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                <div className="space-y-2 text-center">
                                    <p className="text-sm font-medium tracking-tight">Syncing Documentation</p>
                                    <p className="text-xs text-muted-foreground">Parsing markdown content...</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="prose dark:prose-invert max-w-none"
                            >
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {content || ""}
                                </ReactMarkdown>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </ScrollArea>
        </div>
    )
}
