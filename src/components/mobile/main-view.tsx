"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, BookOpen, MessageCircleHeart, Share2, Menu, Copy, Check } from "lucide-react"
import { BottomSheet } from "./bottom-sheet"
import { cn } from "@/lib/utils"

// Mock Data Type
interface QTContent {
    date: string
    title: string
    passage: string
    verses: { num: number; text: string }[]
    commentary: string
    meditation: string
}

import { getDailyQTData, DailyQTData } from "@/app/actions/get-qt-data"
import { getQtMeditations, MeditationPost } from "@/app/actions/get-qt-meditations"
import { generateQtMentor } from "@/app/actions/generate-qt-mentor"
import { ExpandableContent } from "./expandable-content"
import { Loader2, Sparkles, Feather } from "lucide-react"
import ReactMarkdown from "react-markdown"

export function MobileMainView() {
    const [date, setDate] = React.useState(new Date()) // Default to today
    const [activeSheet, setActiveSheet] = React.useState<"commentary" | "meditation" | "mentor" | null>(null)
    const [data, setData] = React.useState<DailyQTData | null>(null)
    const [meditations, setMeditations] = React.useState<MeditationPost[]>([])
    const [loading, setLoading] = React.useState(false)
    const [meditationLoading, setMeditationLoading] = React.useState(false)
    const [mentorContent, setMentorContent] = React.useState<string | null>(null)
    const [mentorLoading, setMentorLoading] = React.useState(false)
    const [copied, setCopied] = React.useState(false)

    // Format date for API (YYYY-MM-DD)
    const formatDateKey = (d: Date) => {
        const year = d.getFullYear()
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const day = String(d.getDate()).padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    // Convert keys like . to - for display if needed, or just use the date object
    const displayDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setMeditations([]) // Reset meditations
            setMentorContent(null) // Reset AI content on date change
            const dateStr = formatDateKey(date)

            // 1. Fetch Main QT Data
            const result = await getDailyQTData(dateStr)
            setData(result)
            setLoading(false)

            // 2. Fetch Meditations if QT data exists
            if (result && result.passage) {
                setMeditationLoading(true)
                // passage format: "요한복음(John) 2:1 - 2:12"
                // Split Name and Range
                // We need to parse "요한복음(John)" and "2:1 - 2:12"
                // The API returns passage as `${contentData.Bible_name} ${contentData.Bible_chapter}`
                // Example: "요한복음(John) 2:1 - 2:12"
                // Ideally, getDailyQTData should return them separately, but we can parse here or update the action.
                // Let's parse simply: Last digit block is likely the range? 
                // Better approach: split by first digit?

                // Regex to split Name and Range: "Name(En) 1:1-2"
                const match = result.passage.match(/^(.+?)\s(\d+:.+)$/);
                if (match) {
                    const name = match[1];
                    const range = match[2];
                    const medResults = await getQtMeditations(name, range);
                    setMeditations(medResults);
                } else {
                    // Fallback try with simple split if format differs
                    const parts = result.passage.split(' ');
                    if (parts.length >= 2) {
                        const range = parts.slice(1).join(' '); // "2:1 - 2:12"
                        const name = parts[0];
                        const medResults = await getQtMeditations(name, range);
                        setMeditations(medResults);
                    }
                }
                setMeditationLoading(false)
            }
        }
        fetchData()
    }, [date])

    const handleOpenMentor = async () => {
        setActiveSheet("mentor")
        setCopied(false) // Reset copy status when opening
        if (data && !mentorContent) {
            setMentorLoading(true)
            try {
                const content = await generateQtMentor(data.title, data.passage, data.verses)
                setMentorContent(content)
            } catch (error) {
                console.error("Failed to generate mentor content", error)
            } finally {
                setMentorLoading(false)
            }
        }
    }

    const handleCopy = () => {
        if (mentorContent) {
            navigator.clipboard.writeText(mentorContent)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const handlePrevDate = () => {
        const newDate = new Date(date)
        newDate.setDate(date.getDate() - 1)
        setDate(newDate)
    }

    const handleNextDate = () => {
        const newDate = new Date(date)
        newDate.setDate(date.getDate() + 1)
        setDate(newDate)
    }

    return (
        <div className="fixed inset-0 w-full bg-[#F7FBF5] font-sans text-[#2C3E3E] overflow-hidden overscroll-none">
            <div className="w-full h-full relative flex flex-col overflow-hidden">

                {/* Header */}
                <header className="px-5 py-3 flex items-center justify-center bg-[#F7FBF5]/95 backdrop-blur-sm z-20 shrink-0 touch-none">
                    <div className="flex items-center gap-4 text-lg font-bold text-[#4A6767]">
                        <button onClick={handlePrevDate} className="p-1 hover:bg-black/5 rounded-full">
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span>{displayDate}</span>
                        <button onClick={handleNextDate} className="p-1 hover:bg-black/5 rounded-full">
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                </header>

                {loading ? (
                    <div className="flex-1 flex flex-col items-center justify-center gap-4">
                        <Loader2 className="h-8 w-8 text-[#4A6767] animate-spin" />
                        <p className="text-[#6B8A8A] text-base animate-pulse">말씀을 불러오고 있습니다...</p>
                    </div>
                ) : data ? (
                    <>
                        {/* Fixed Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            key={`title-${displayDate}`} // Re-animate on date change
                            className="px-4 pb-3 pt-1 text-center space-y-1 bg-[#F7FBF5] z-10 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] shrink-0 touch-none"
                        >
                            <span className="inline-block text-[0.6rem] font-bold text-[#8FAFAF] tracking-widest uppercase mb-0.5">Daily Bible</span>
                            <h1 className="text-xl font-bold text-[#2C3E3E] leading-tight break-keep">
                                {data.title}
                            </h1>
                            <p className="text-sm text-[#6B8A8A] font-medium font-sans mx-auto max-w-[85%]">
                                {data.passage}
                            </p>
                        </motion.div>

                        {/* Main Content Scrollable (Verses Only) */}
                        <main className="flex-1 overflow-y-auto px-5 pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                key={`verses-${displayDate}`}
                                className="space-y-4"
                            >
                                {data.verses.map((verse) => (
                                    <div key={verse.num} className="flex gap-2 leading-relaxed text-base">
                                        <span className="text-[#E88D67] font-bold min-w-[1.4rem] mt-0.5 font-sans text-sm">{verse.num}.</span>
                                        <p className="text-[#3A4A4A] break-keep">{verse.text}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </main>
                    </>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center gap-4 text-[#6B8A8A] text-xs">
                        <p>말씀을 찾을 수 없습니다.</p>
                        <button onClick={() => setDate(new Date())} className="text-[#4A6767] underline">오늘 날짜로 돌아가기</button>
                    </div>
                )}

                {/* Floating Bottom Action Buttons */}
                <div className="absolute bottom-6 right-5 flex flex-col gap-3 z-20">
                    <button
                        onClick={handleOpenMentor}
                        className="group flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border-2 border-[#D4E0D1] group-hover:scale-105 transition-transform duration-200">
                            <Feather className="h-5 w-5 text-[#8FAFAF]" />
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#8FAFAF] bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm">문학소년</span>
                    </button>

                    <button
                        onClick={() => setActiveSheet("meditation")}
                        className="group flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border-2 border-[#EBF2E8] group-hover:scale-105 transition-transform duration-200">
                            <MessageCircleHeart className="h-5 w-5 text-[#E88D67]" fill="#E88D67" fillOpacity={0.2} />
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#6B8A8A] bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm">묵상</span>
                    </button>

                    <button
                        onClick={() => setActiveSheet("commentary")}
                        className="group flex flex-col items-center gap-1"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-[#4A6767] shadow-[0_4px_20px_rgba(74,103,103,0.3)] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
                            <BookOpen className="h-5 w-5" />
                        </div>
                        <span className="text-[0.6rem] font-bold text-[#4A6767] bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm">해설</span>
                    </button>
                </div>

                {/* Bottom Sheets */}
                <BottomSheet
                    isOpen={activeSheet === "commentary"}
                    onClose={() => setActiveSheet(null)}
                    title="해설"
                >
                    <div className="space-y-6">
                        {data?.commentary.map((comm, idx) => (
                            <div key={idx} className="space-y-1.5">
                                <h3 className="text-lg font-bold text-[#4A6767] border-l-4 border-[#E88D67] pl-2.5">
                                    {comm.title}
                                </h3>
                                <div
                                    className="text-[0.9rem] leading-relaxed text-[#3A4A4A] pl-0.5"
                                    dangerouslySetInnerHTML={{ __html: comm.content }}
                                />
                            </div>
                        ))}
                    </div>
                </BottomSheet>

                <BottomSheet
                    isOpen={activeSheet === "mentor"}
                    onClose={() => setActiveSheet(null)}
                    title="문학 소년의 큐티"
                    headerAction={
                        mentorContent && !mentorLoading ? (
                            <button
                                onClick={handleCopy}
                                className="p-1.5 text-gray-400 hover:text-[#4A6767] transition-all bg-gray-100 rounded-lg active:scale-95 flex items-center gap-1"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span className="text-[0.65rem] font-bold text-green-600">완료</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-4 w-4" />
                                        <span className="text-[0.65rem] font-bold">복사</span>
                                    </>
                                )}
                            </button>
                        ) : null
                    }
                >
                    <div className="min-h-[200px] relative">
                        {mentorLoading ? (
                            <div className="flex flex-col items-center justify-center py-12 gap-3">
                                <Sparkles className="h-8 w-8 text-[#A3C4BC] animate-pulse" />
                                <p className="text-[#6B8A8A] text-sm font-medium">따뜻한 위로의 문장을 적는 중입니다...</p>
                            </div>
                        ) : mentorContent ? (
                            <div className="prose prose-sm max-w-none text-[#3A4A4A] leading-relaxed select-text">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ children }) => <h1 className="text-xl font-bold text-[#4A6767] mb-4">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-lg font-bold text-[#4A6767] mt-6 mb-3">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-base font-bold text-[#4A6767] mt-4 mb-2">{children}</h3>,
                                        p: ({ children }) => <p className="mb-4 text-[0.95rem]">{children}</p>,
                                        blockquote: ({ children }) => (
                                            <blockquote className="border-l-4 border-[#A3C4BC] pl-4 italic my-4 text-[#5A7A7A] bg-[#F0F7F4] py-2 pr-2 rounded-r-lg">
                                                {children}
                                            </blockquote>
                                        ),
                                        hr: () => <hr className="my-6 border-[#EBF2E8]" />,
                                    }}
                                >
                                    {mentorContent}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <p className="text-center text-gray-400 py-8">내용을 불러올 수 없습니다.</p>
                        )}
                    </div>
                </BottomSheet>

                <BottomSheet
                    isOpen={activeSheet === "meditation"}
                    onClose={() => setActiveSheet(null)}
                    title="묵상 나눔"
                    height="h-[85vh]"
                >
                    <div className="space-y-1">
                        {meditationLoading ? (
                            <div className="flex flex-col items-center justify-center py-8 gap-2">
                                <Loader2 className="h-5 w-5 text-[#E88D67] animate-spin" />
                                <p className="text-[#6B8A8A] text-sm">묵상 나눔을 불러오는 중...</p>
                            </div>
                        ) : meditations.length > 0 ? (
                            meditations.map((post) => (
                                <div key={post.id} className="w-full border-b border-gray-100/50 py-3 last:border-0">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-sm text-gray-800 truncate">{post.writer}</span>
                                        <div className="flex items-center gap-1.5 text-[0.65rem] text-gray-400 shrink-0 font-sans">
                                            <span>{post.date}</span>
                                            <span className="w-0.5 h-0.5 bg-gray-300 rounded-full"></span>
                                            <span>조회 {post.viewCount}</span>
                                        </div>
                                    </div>

                                    {/* Expandable Content Component */}
                                    <ExpandableContent content={post.content} />
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-400 py-8 text-sm">나눔이 아직 없습니다.</p>
                        )}

                        {/* Input Area */}
                        <div className="pt-3 mt-4 border-t border-gray-100">
                            <textarea
                                placeholder="오늘의 묵상을 기록해보세요..."
                                className="w-full h-20 p-3 rounded-xl border border-gray-100 bg-white focus:ring-1 focus:ring-[#4A6767]/20 focus:border-[#4A6767] outline-none resize-none text-sm"
                            ></textarea>
                            <button className="w-full mt-2 bg-[#4A6767] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#3A5252] transition-colors text-sm">
                                나눔 등록하기
                            </button>
                        </div>
                    </div>
                </BottomSheet>

            </div>
        </div>
    )
}
