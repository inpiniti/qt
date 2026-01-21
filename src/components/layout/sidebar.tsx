export function Sidebar() {
    return (
        <div className="h-full bg-sidebar border-r p-2 text-sm text-sidebar-foreground">
            <div className="font-semibold px-2 py-1 mb-2 text-xs text-muted-foreground uppercase">Explorer</div>
            <div className="space-y-1">
                <div className="px-2 py-1 hover:bg-sidebar-accent rounded cursor-pointer font-medium flex items-center gap-1">
                    <span>v MYPROJECT</span>
                </div>
                <div className="px-2 py-1 hover:bg-sidebar-accent rounded cursor-pointer text-muted-foreground ml-2">
                    src
                </div>
                <div className="px-2 py-1 hover:bg-sidebar-accent rounded cursor-pointer text-muted-foreground ml-2">
                    components
                </div>
                <div className="px-2 py-1 hover:bg-sidebar-accent rounded cursor-pointer text-blue-500 ml-4">
                    layout.tsx
                </div>
            </div>
        </div>
    )
}
