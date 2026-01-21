import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLayoutStore } from "@/store/useLayoutStore"

export function RightPanel() {
    const { toggleRightPanel } = useLayoutStore()

    return (
        <div className="h-full bg-sidebar border-l p-4">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-sm">Right Panel</h3>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleRightPanel}>
                    <X className="h-4 w-4" />
                </Button>
            </div>
            <div className="text-xs text-muted-foreground">
                Secondary tools or details can be placed here.
            </div>
        </div>
    )
}
