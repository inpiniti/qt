import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLayoutStore } from "@/store/useLayoutStore"

export function BottomPanel() {
    const { toggleBottomPanel } = useLayoutStore()

    return (
        <div className="h-full bg-background/50 backdrop-blur-sm p-3 text-sm border-t">
            <div className="flex items-center justify-between mb-3">
                <div className="flex gap-6 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="text-primary border-b-2 border-primary pb-1 cursor-pointer">Console</span>
                    <span className="cursor-pointer hover:text-foreground transition-colors">Issues</span>
                    <span className="cursor-pointer hover:text-foreground transition-colors">Output</span>
                    <span className="cursor-pointer hover:text-foreground transition-colors">Debug</span>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleBottomPanel}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-1 text-xs text-muted-foreground font-mono bg-black/5 dark:bg-white/5 p-3 rounded-lg border border-border/50">
                <div className="flex gap-2">
                    <span className="text-blue-500">[info]</span>
                    <span>System initialized successfully.</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-green-500">[success]</span>
                    <span>All services are active and running.</span>
                </div>
                <div className="flex gap-2">
                    <span className="text-yellow-500">[warn]</span>
                    <span>Latency detected in Asia-East region.</span>
                </div>
            </div>
        </div>
    )
}
