"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { getQTCalendar } from "@/app/actions/get-qt-calendar"

interface QTCalendarItem {
    Year: string
    Month: string
    Day: string
    Bible_name: string
    Bible_chapter: string
    Qt_date: string
    Day_on: string
}

export function SidebarCalendar() {
    const [currentDate, setCurrentDate] = React.useState(new Date())

    // Helper to get local YYYY-MM-DD
    const toLocalDateString = (date: Date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    const [selectedDateStr, setSelectedDateStr] = React.useState(toLocalDateString(new Date()))
    const [data, setData] = React.useState<QTCalendarItem[]>([])
    const [loading, setLoading] = React.useState(false)

    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1 // 1-12

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await getQTCalendar(year, month)
                setData(result)
            } catch (error) {
                console.error("Failed to fetch calendar", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [year, month])

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }

    const handleDateClick = (dateStr: string) => {
        setSelectedDateStr(dateStr)
    }

    const selectedInfo = data.find(d => d.Qt_date === selectedDateStr)

    // Helper to render calendar days
    const renderCalendarDays = () => {
        const daysInMonth = new Date(year, month, 0).getDate()
        const firstDayOfMonth = new Date(year, month - 1, 1).getDay() // 0 = Sun

        const days = []
        // Empty slots for previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />)
        }

        // Days
        for (let d = 1; d <= daysInMonth; d++) {
            const dateStr = `${year}-${month.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`
            const item = data.find(x => parseInt(x.Day.trim()) === d)
            const isSelected = selectedDateStr === dateStr
            const isToday = toLocalDateString(new Date()) === dateStr

            days.push(
                <button
                    key={d}
                    onClick={() => handleDateClick(dateStr)}
                    className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center text-xs transition-colors relative",
                        isSelected
                            ? "bg-primary text-primary-foreground font-bold"
                            : "hover:bg-muted text-foreground",
                        isToday && !isSelected && "border border-primary text-primary font-medium"
                    )}
                >
                    {d}
                    {item && (
                        <span className={cn(
                            "absolute bottom-1 left-1.2 w-1 h-1 rounded-full",
                            isSelected ? "bg-primary-foreground/50" : "bg-primary/50"
                        )} />
                    )}
                </button>
            )
        }
        return days
    }

    return (
        <div className="flex flex-col border-b bg-background">
            {/* Header */}
            <div className="flex items-center justify-between px-2 py-2">
                <button onClick={handlePrevMonth} className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-sm font-semibold">
                    {year}.{month.toString().padStart(2, '0')}
                </div>
                <button onClick={handleNextMonth} className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            {/* Days Grid */}
            <div className="px-3 pb-2">
                <div className="grid grid-cols-7 mb-1 text-center">
                    {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                        <div key={day} className="text-[10px] text-muted-foreground">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-1 justify-items-center">
                    {loading ? (
                        <div className="col-span-7 py-8 flex justify-center">
                            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                    ) : renderCalendarDays()}
                </div>
            </div>

            {/* Selected Info */}
            <div className="px-4 py-3 bg-muted/20 border-t min-h-[60px] flex flex-col justify-center gap-1">
                {selectedInfo ? (
                    <>
                        <div className="text-[10px] text-muted-foreground font-medium">
                            {selectedInfo.Qt_date}
                        </div>
                        <div className="text-xs font-semibold text-primary">
                            {selectedInfo.Bible_name} {selectedInfo.Bible_chapter}
                        </div>
                    </>
                ) : (
                    <div className="text-[10px] text-muted-foreground italic">
                        날짜를 선택하세요
                    </div>
                )}
            </div>
        </div>
    )
}
