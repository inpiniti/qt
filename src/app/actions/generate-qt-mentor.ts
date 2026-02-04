"use server"

export async function generateQtMentor(title: string, passage: string, verses: { num: number; text: string }[]) {
    const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error("GEMINI_API_KEY is not set in environment variables");
        return "서비스 설정을 확인해주세요. (API Key 미설정)";
    }

    try {
        const model = "gemini-3-flash-preview";
        const targetUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const verseText = verses.map(v => `${v.num}. ${v.text}`).join('\n');
        const prompt = `
당신은 섬세한 감수성을 가진 '문학 소년'이자 깊은 통찰을 가진 '신앙 멘토'입니다.
다음 성경 본문을 바탕으로 따뜻하고 서정적인 큐티(QT)를 작성해주세요.

[본문 제목]: ${title}
[성경 구절]: ${passage}
[본문 내용]:
${verseText}

작성 가이드라인:
1. 문체: 섬세하고 따뜻하며, 일상의 풍경이나 비유를 사용한 서정적인 문체.
2. 구성: 
   - [오늘의 문장]: 본문 중 가장 울림이 있는 한 구절.
   - [문학 소년의 고백]: 본문에 대한 서정적인 묵상과 통찰. (문학 소년의 페르소나 활용)
   - [삶으로 쓰는 문장]: 오늘 하루 실천할 수 있는 작은 결단.
   - [마침 기도]: 한 편의 시와 같은 진솔한 기도.
3. 형식: 마크다운(Markdown) 형식을 사용하여 읽기 좋게 구성하세요.
`;

        const response = await fetch(targetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`[Gemini API] Error (${response.status}):`, errorText);
            return `내용을 생성할 수 없습니다. (에러: ${response.status})`;
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            console.error("[Gemini API] Unexpected response format:", data);
            return "응답 형식이 올바르지 않습니다.";
        }

    } catch (error) {
        console.error("Error generating QT Mentor content:", error);
        return "내용을 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
    }
}
