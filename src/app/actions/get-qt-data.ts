'use server'

interface QTContentResponse {
    Qt_id: string
    Qt_ty: string
    Base_de: string
    Bible_name: string
    Bible_chapter: string
    Qt_sj: string
    Qt_Brf: string
    Qt_q1_str: string
    Qt_a1: string
    Qt_q2_str: string
    Qt_a2: string
    Qt_q3_str: string
    Qt_a3: string
    Qt_q4_str: string
    Qt_a4: string
}

interface BibleVerseResponse {
    Chapter: number
    Verse: number
    Bible_Cn: string
}

export interface DailyQTData {
    title: string
    passage: string
    verses: { num: number; text: string }[]
    commentary: Array<{ title: string; content: string }>
}

export async function getDailyQTData(dateStr: string): Promise<DailyQTData | null> {
    try {
        // 1. Fetch QT Content
        const contentResponse = await fetch('https://sum.su.or.kr:8888/Ajax/Bible/BodyBibleCont', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                qt_ty: 'QT1',
                Base_de: dateStr,
                Bibletype: '1'
            })
        })

        if (!contentResponse.ok) throw new Error('Failed to fetch QT content')
        const contentData: QTContentResponse = await contentResponse.json()

        // 2. Fetch Bible Verses
        const versesResponse = await fetch('https://sum.su.or.kr:8888/Ajax/Bible/BodyBible', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                qt_ty: 'QT1',
                Base_de: dateStr
            })
        })

        if (!versesResponse.ok) throw new Error('Failed to fetch Bible verses')
        const versesData: BibleVerseResponse[] = await versesResponse.json()

        // 3. Process Commentary
        const commentary = []

        if (contentData.Qt_a1) {
            commentary.push({
                title: contentData.Qt_q1_str || '말씀 해설',
                content: contentData.Qt_a1
            })
        }

        // Sometimes a2 is empty, check before adding
        if (contentData.Qt_a2) {
            commentary.push({
                title: contentData.Qt_q2_str || '말씀 해설',
                content: contentData.Qt_a2
            })
        }

        if (contentData.Qt_a3) {
            commentary.push({
                title: contentData.Qt_q3_str || '기도',
                content: contentData.Qt_a3
            })
        }

        if (contentData.Qt_a4) {
            commentary.push({
                title: contentData.Qt_q4_str || '적용',
                content: contentData.Qt_a4
            })
        }

        return {
            title: contentData.Qt_sj,
            passage: `${contentData.Bible_name} ${contentData.Bible_chapter}`,
            verses: versesData.map(v => ({
                num: v.Verse,
                text: v.Bible_Cn
            })),
            commentary
        }

    } catch (error) {
        console.error('Error fetching Daily QT:', error)
        return null
    }
}
