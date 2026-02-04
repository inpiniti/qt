'use server'

import { getShortBibleName } from "@/lib/bible-utils";

export interface MeditationPost {
    id: number;
    title: string;
    content: string;
    writer: string;
    date: string;
    viewCount: number;
}

export async function getQtMeditations(bibleName: string, range: string): Promise<MeditationPost[]> {
    const shortName = getShortBibleName(bibleName); // e.g., "요"
    const fullName = bibleName.split('(')[0].trim(); // e.g., "요한복음"

    // Parse Range: "1:35 - 1:51" -> "1:35-1:51" and "1:35-51"
    // Handle "2:1 - 2:12" -> "2:1-12"
    let cleanRange = range.replace(/\s/g, ''); // "2:1-2:12"
    let simpleRange = cleanRange;

    // Attempt to simplify range if it repeats chapter (e.g. 2:1-2:12 -> 2:1-12)
    const parts = cleanRange.split('-');
    if (parts.length === 2) {
        const start = parts[0].split(':');
        const end = parts[1].split(':');

        if (start.length === 2 && end.length === 2 && start[0] === end[0]) {
            // Same chapter, simpler format is "2:1-12"
            simpleRange = `${start[0]}:${start[1]}-${end[1]}`;
        }
    }

    // Generate Query Variations
    const queries = new Set<string>();
    queries.add(`${fullName} ${cleanRange}`);       // 요한복음 2:1-2:12
    queries.add(`${fullName} ${simpleRange}`);      // 요한복음 2:1-12
    queries.add(`${shortName} ${cleanRange}`);      // 요 2:1-2:12
    queries.add(`${shortName} ${simpleRange}`);     // 요 2:1-12

    // Add variations without space if needed (though usually space helps)

    console.log("Searching Meditations with queries:", Array.from(queries));

    // Parallel Fetch
    const fetchPromises = Array.from(queries).map(query => fetchMeditationList(query));

    try {
        const results = await Promise.all(fetchPromises);
        const allPosts = results.flat();

        // Dedup by Ntt_id
        const uniquePostsMap = new Map<number, MeditationPost>();
        allPosts.forEach(post => {
            if (!uniquePostsMap.has(post.id)) {
                uniquePostsMap.set(post.id, post);
            }
        });

        // Convert to array and sort by date descending
        const sortedPosts = Array.from(uniquePostsMap.values()).sort((a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        return sortedPosts;

    } catch (error) {
        console.error("Error fetching meditations:", error);
        return [];
    }
}

async function fetchMeditationList(searchTxt: string): Promise<MeditationPost[]> {
    try {
        const formBody = new URLSearchParams({
            'Bbs_id': 'E16',
            'Ntt_id': '0',
            'SearchOtn3': '',
            'SearchTxt1': searchTxt,
            'SearchOtn1': 'NTT_SJ', // Searching Subject (Title) - user request implies Passage search in text maybe? User said "SearchTxt1=%EC%9A%94+2%3A1-12"
            'StrOrderBy': ' ORDER BY NOTICE_AT DESC, NTT_NO DESC, NTT_STEP ASC ',
            'Admin_yn': 'N',
            'NowPage': '1',
            'PageSize': '10' // Limit per query
        });

        const response = await fetch('https://sum.su.or.kr:8888/Ajax/Board/ListAjax', {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
                'Origin': 'https://sum.su.or.kr:8888',
                'Referer': 'https://sum.su.or.kr:8888/bible/forum'
            },
            body: formBody
        });

        if (!response.ok) return [];

        const data = await response.json();

        if (!Array.isArray(data)) return [];

        return data.map((item: any) => ({
            id: item.Ntt_id,
            title: item.Ntt_sj,
            content: item.Ntt_cn,
            writer: item.Wrter_nm,
            date: item.Reg_dt_conv, // "2026-02-04"
            viewCount: item.Read_co
        }));

    } catch (e) {
        // console.error(`Failed to fetch for query "${searchTxt}":`, e);
        return [];
    }
}
