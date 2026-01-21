"use client"

import * as React from "react"
import { useDocStore } from "@/store/useDocStore"
import { getDocTree } from "@/app/actions/get-doc"
import { FileText, Folder, ChevronRight, ChevronDown, Package, Loader2, Search as SearchIcon, FileCode, PenTool, ShieldCheck, GitBranch } from "lucide-react"
import { cn } from "@/lib/utils"

interface TreeItem {
    name: string
    type: "file" | "folder"
    path?: string
    children?: TreeItem[]
}

export function Sidebar() {
    const {
        viewMode,
        selectedLibrary,
        setSelectedDocPath,
        selectedDocPath,
        docTree,
        setDocTree
    } = useDocStore()

    const [loading, setLoading] = React.useState(false)
    const [expandedFolders, setExpandedFolders] = React.useState<Record<string, boolean>>({})
    const [searchQuery, setSearchQuery] = React.useState("")

    // Fetch Doc Tree based on viewMode and library
    React.useEffect(() => {
        setLoading(true)
        getDocTree(viewMode, selectedLibrary || undefined).then(tree => {
            setDocTree(tree)
            setLoading(false)
        })
    }, [viewMode, selectedLibrary, setDocTree])

    const toggleFolder = (name: string) => {
        setExpandedFolders(prev => ({ ...prev, [name]: !prev[name] }))
    }

    const filterTree = (items: TreeItem[]): TreeItem[] => {
        if (!searchQuery) return items
        return items.filter(item => {
            const matches = item.name.toLowerCase().includes(searchQuery.toLowerCase())
            if (item.type === "folder" && item.children) {
                const filteredChildren = filterTree(item.children)
                return matches || filteredChildren.length > 0
            }
            return matches
        })
    }

    const renderTree = (items: TreeItem[], level = 0, parentKey = "") => {
        return items.map((item, idx) => {
            const itemKey = `${parentKey}-${item.name}-${idx}`
            const isExpanded = expandedFolders[itemKey] || (searchQuery && item.type === "folder") || level === 0

            return (
                <div key={itemKey}>
                    <div
                        className={cn(
                            "px-2 py-1 hover:bg-accent/50 rounded cursor-pointer flex items-center gap-1.5 text-[13px] transition-colors group",
                            selectedDocPath === item.path && "bg-primary/10 text-primary font-medium",
                            level > 0 && "ml-2"
                        )}
                        onClick={() => {
                            if (item.type === "folder") {
                                toggleFolder(itemKey)
                            } else if (item.path) {
                                setSelectedDocPath(item.path)
                            }
                        }}
                    >
                        {item.type === "folder" ? (
                            isExpanded ? <ChevronDown className="h-3.5 w-3.5 text-muted-foreground/70" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/70" />
                        ) : <div className="w-3.5" />}
                        {item.type === "folder" ? (
                            <Folder className={cn("h-4 w-4", isExpanded ? "text-primary/70" : "text-primary/40")} />
                        ) : (
                            <FileText className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                        )}
                        <span className="truncate">{item.name}</span>
                    </div>
                    {item.type === "folder" && item.children && isExpanded && (
                        <div className="border-l ml-3.5 mt-0.5 border-border/40">
                            {renderTree(item.children, level + 1, itemKey)}
                        </div>
                    )}
                </div>
            )
        })
    }

    const getModeConfig = () => {
        switch (viewMode) {
            case 'qt': return { label: 'QT Docs', icon: PenTool, color: 'text-amber-500' }
            case 'skills': return { label: 'Skills', icon: ShieldCheck, color: 'text-indigo-500' }
            case 'workflows': return { label: 'Workflows', icon: GitBranch, color: 'text-rose-500' }
            case 'docs': return { label: selectedLibrary || 'Docs', icon: Package, color: 'text-primary' }
            default: return { label: 'Menu', icon: FileCode, color: 'text-primary' }
        }
    }

    const config = getModeConfig()

    return (
        <div className="h-full bg-sidebar border-r flex flex-col select-none overflow-hidden">
            {/* Sidebar Header */}
            <div className="px-4 py-4 border-b flex flex-col gap-3 bg-muted/5">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-[11px] text-muted-foreground uppercase tracking-[0.15em] flex items-center gap-2">
                        <config.icon className={cn("h-4 w-4", config.color)} />
                        {config.label}
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative group">
                    <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder={`Search ${config.label}...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-muted/30 border border-border/50 rounded-md py-1.5 pl-8 pr-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    />
                </div>
            </div>

            {/* Scrollable Tree View */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <Loader2 className="h-6 w-6 text-primary animate-spin opacity-70" />
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest animate-pulse">Scanning...</span>
                    </div>
                ) : (
                    <div className="space-y-0.5">
                        {docTree.length > 0 ? renderTree(filterTree(docTree)) : (
                            <div className="px-4 py-20 text-center flex flex-col items-center gap-2">
                                <Package className="h-8 w-8 text-muted-foreground opacity-20" />
                                <p className="text-xs text-muted-foreground italic tracking-tight">No content found in this category.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Info */}
            <div className="p-3 border-t bg-muted/5 text-[10px] text-muted-foreground">
                <div className="flex items-center gap-2 opacity-60">
                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", config.color.replace('text-', 'bg-'))} />
                    <span>{config.label} View Active</span>
                </div>
            </div>
        </div>
    )
}
