"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  Group,
  Panel,
  Separator,
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  direction = "horizontal",
  ...props
}: React.ComponentProps<typeof Group> & {
  direction?: "horizontal" | "vertical"
}) {
  return (
    <Group
      data-slot="resizable-panel-group"
      orientation={direction}
      data-panel-group-direction={direction}
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  onResize,
  ...props
}: React.ComponentProps<typeof Panel> & {
  onResize?: (size: number) => void
}) {
  return (
    <Panel
      data-slot="resizable-panel"
      onResize={onResize ? (size) => onResize(size.asPercentage) : undefined}
      {...props}
    />
  )
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean
}) {
  return (
    <Separator
      data-slot="resizable-handle"
      className={cn(
        "group bg-border/30 focus-visible:ring-ring relative flex w-1.5 items-center justify-center transition-all hover:bg-primary/20 after:absolute after:inset-y-0 after:left-1/2 after:w-6 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-1.5 data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-6 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90 cursor-col-resize data-[panel-group-direction=vertical]:cursor-row-resize z-50",
        className
      )}
      {...props}
    >
      <div className="z-10 h-10 w-[2px] bg-border transition-colors group-hover:bg-primary/80 group-active:bg-primary data-[panel-group-direction=vertical]:w-10 data-[panel-group-direction=vertical]:h-[2px]" />
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </Separator>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
