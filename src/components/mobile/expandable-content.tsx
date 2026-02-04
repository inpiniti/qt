import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableContentProps {
    content: string; // The HTML content string
}

export function ExpandableContent({ content }: ExpandableContentProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    // 1. Aggressive Content Flattening (No more newlines!)
    const cleanContent = (rawContent: string) => {
        if (typeof window === 'undefined') return rawContent;

        // Step A: Decode Entities fully
        let decoded = rawContent;
        const decoder = document.createElement('textarea');
        for (let i = 0; i < 3; i++) {
            if (!decoded || !decoded.includes('&')) break;
            decoder.innerHTML = decoded;
            decoded = decoder.value;
        }

        // Step B: Replace structure tags with spaces BEFORE stripping tags
        let flattened = decoded
            .replace(/<\/p>/gi, ' ')
            .replace(/<\/div>/gi, ' ')
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/&nbsp;/g, ' ');

        // Step C: Parse and strip ALL tags
        const div = document.createElement("div");
        div.innerHTML = flattened;

        // Return only the text content
        let finalContent = div.textContent || div.innerText || "";

        // Step D: Compact whitespace
        return finalContent.replace(/\s+/g, ' ').trim();
    };

    const processedContent = typeof window !== 'undefined' ? cleanContent(content) : content;

    return (
        <div className="w-full">
            {/* Top Collapse Button */}
            {isExpanded && (
                <div className="sticky top-0 right-0 flex justify-end mb-1 z-10">
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="text-[0.65rem] font-bold text-gray-500 flex items-center gap-1 hover:text-gray-700 px-2 py-0.5 rounded-full bg-gray-100 shadow-sm"
                    >
                        <ChevronUp className="h-2.5 w-2.5" />
                        <span>닫기</span>
                    </button>
                </div>
            )}

            <div
                className={`
          relative text-gray-600 text-[0.6rem] leading-tight overflow-hidden 
          break-words whitespace-normal font-sans
          ${isExpanded ? '' : 'max-h-[2.2rem]'} 
        `}
            >
                <p className="w-full font-normal m-0 tracking-tight">
                    {processedContent}
                </p>

                {/* Smaller Gradient Mask */}
                {!isExpanded && (
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}
            </div>

            {/* Tiny Toggle Button */}
            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="mt-0.5 text-[0.6rem] font-bold text-[#4A6767]/50 flex items-center gap-0.5"
                >
                    더보기 <ChevronDown className="h-2 w-2" />
                </button>
            )}

            {isExpanded && (
                <button
                    onClick={() => setIsExpanded(false)}
                    className="mt-3 text-[0.75rem] font-medium text-gray-400 flex items-center justify-center gap-1 w-full py-2 border-t border-dashed border-gray-100"
                >
                    접기 <ChevronUp className="h-3 w-3" />
                </button>
            )}
        </div>
    );
}
