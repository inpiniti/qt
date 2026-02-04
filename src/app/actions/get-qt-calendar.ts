'use server'

interface QTCalendarItem {
    Year: string
    Month: string
    Day: string
    Cell_num: number
    Weeks: number
    Week: number
    Bible_date: string
    Bible_name: string
    Bible_chapter: string
    Qt_date: string
    Day_on: string
}

export async function getQTCalendar(year: number, month: number): Promise<QTCalendarItem[]> {
    const paddedMonth = month.toString().padStart(2, '0')
    const baseDate = `${year}-${paddedMonth}-01`

    try {
        const response = await fetch('https://sum.su.or.kr:8888/Ajax/Bible/Calendar', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/javascript, */*; q=0.01',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://sum.su.or.kr:8888',
                'Referer': 'https://sum.su.or.kr:8888/bible/today',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
                'X-Requested-With': 'XMLHttpRequest'
            },
            // Form URL encoded body as per the curl example (though curl used --data-raw with string, 
            // fetch usually needs URLSearchParams for x-www-form-urlencoded, or JSON if content-type is json. 
            // The curl command had 'Content-Type: application/json; charset=UTF-8' but sent a string looking like json? 
            // Wait, the curl said `--data-raw $'{ \'qt_ty\' : \'QT1\' , \'Base_de\' : \'2026-01-01\'}'`. 
            // That looks like a JSON string.
            // Let's re-read the curl carefully.
            // -H 'Content-Type: application/json; charset=UTF-8'
            // Body: { 'qt_ty' : 'QT1' , 'Base_de' : '2026-01-01'}
            // Okay, it IS JSON.
            body: JSON.stringify({
                qt_ty: 'QT1',
                Base_de: baseDate
            })
        })

        if (!response.ok) {
            console.error('QT API Error:', response.status, response.statusText)
            throw new Error(`Failed to fetch QT calendar: ${response.status}`)
        }

        const data = await response.json()
        return data as QTCalendarItem[]

    } catch (error) {
        console.error('Error fetching QT calendar:', error)
        return []
    }
}
