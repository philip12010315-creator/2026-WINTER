import { GoogleGenAI } from "@google/genai";
import { CAMPS } from "../constants";

// Safely initialize the AI client. 
// If the API key is missing (e.g. during build or if not set in GitHub Secrets), 
// we use a dummy key or handle it gracefully to prevent the entire app from crashing (White Screen).
const apiKey = process.env.API_KEY || "MISSING_KEY";
const ai = new GoogleGenAI({ apiKey: apiKey });

const CAMP_CONTEXT = Object.values(CAMPS).map(camp => 
    `【${camp.title}】\n時間:${camp.date}\n重點:${camp.tags.join('/')}\n課表:${camp.schedule.map(d=>d.title).join(',')}`
).join('\n');

const PROMO_CONTEXT = `優惠: 1.早鳥折500(12/31前) 2.舊生折500 3.團報折500 4.分享折500。最高折2000。`;

// 1. Recommendation Logic
export const getCampRecommendation = async (age: string, interests: string[]): Promise<string> => {
    try {
        if (!process.env.API_KEY) throw new Error("API Key not configured");

        const campDescriptions = Object.values(CAMPS).map(c => `${c.title} (重點: ${c.tags.join(',')})`).join('\n');
        const interestsStr = interests.join('、');
        
        const prompt = `
            作為冬令營課程顧問，請推薦一個最適合的營隊。
            孩子年齡：${age}
            興趣：${interestsStr}
            營隊列表：
            ${campDescriptions}
            
            請用親切繁體中文回答，直接建議一個營隊並簡述原因(50字內)。
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        return response.text || "目前無法連線，建議您選擇孩子最有興趣的主題！";
    } catch (error) {
        console.error("Gemini Recommendation Error:", error);
        return "AI 連線功能目前維護中，請直接參考課程列表選擇最適合的營隊！";
    }
};

// 2. Chat Assistant Logic
export const getChatResponse = async (userMessage: string): Promise<string> => {
    try {
        if (!process.env.API_KEY) throw new Error("API Key not configured");

        const systemPrompt = `你是一個專業簡潔的夏令營顧問。**回答規則：** 1. **精簡扼要**：回答控制在 100 字內。 2. **格式化**：必須使用 Markdown 格式 (粗體、清單)。 3. **語氣**：親切、繁體中文。 資訊：\n${CAMP_CONTEXT}\n${PROMO_CONTEXT}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userMessage,
            config: {
                systemInstruction: systemPrompt,
            }
        });

        return response.text || "抱歉，我現在有點忙碌，請稍後再問我！";
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        return "目前 AI 助理正在休息中，歡迎直接點擊下方連結聯繫我們的真人客服！";
    }
};