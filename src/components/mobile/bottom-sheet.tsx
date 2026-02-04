"use client"

import * as React from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface BottomSheetProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    headerAction?: React.ReactNode
    height?: string // e.g., "h-[80vh]"
}

export function BottomSheet({ isOpen, onClose, title, children, headerAction, height = "h-[85vh]" }: BottomSheetProps) {
    // Drag end handler to close if dragged down sufficiently or with high velocity
    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        // info.offset.y > 50 OR info.velocity.y > 400 (Faster reactivity)
        if (info.offset.y > 50 || info.velocity.y > 400) {
            onClose()
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
                    />

                    {/* Sheet */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        drag="y"
                        dragConstraints={{ top: 0 }}
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                        className={cn(
                            "fixed bottom-0 left-0 right-0 z-50 w-full bg-[#FAFAF8] rounded-t-[32px] shadow-[0_-8px_30px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col border-t border-black/5 mx-auto",
                            height,
                            "text-pastel-text" // Use our theme color
                        )}
                        style={{
                            // Ensure it doesn't go wider than the mobile container if on desktop
                            // Removed centering as per request for full width
                        }}
                    >
                        {/* Handle Bar */}
                        <div className="pt-3 pb-2 flex justify-center cursor-grab active:cursor-grabbing" onClick={onClose}>
                            <div className="w-12 h-1.5 bg-gray-300/60 rounded-full" />
                        </div>

                        {/* Header */}
                        <div className="px-6 pb-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-bold text-[#4A6767]">{title}</h2>
                                {headerAction}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 -mr-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-black/5"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 overflow-y-auto px-6 pb-8 custom-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <div className="max-w-none">
                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
