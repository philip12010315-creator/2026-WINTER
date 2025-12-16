import { Camp, GalleryImage, Review } from './types';

export const CAMPS: Record<string, Camp> = {
    time: {
        id: 'time',
        title: '時空探險隊：拯救未來世界',
        date: '1/26 (一) - 1/30 (五)',
        themeColor: 'bg-blue-600',
        themeLight: 'bg-blue-50',
        textColor: 'text-blue-900',
        accentColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        iconType: 'Rocket',
        description: '一週充滿科技與創意的時空之旅！讓孩子化身時空偵查員，修復時間裂縫！',
        tags: ['Minecraft 遊戲創作', 'LEGO SPIKE 機器人'],
        image: 'https://i.ibb.co/gMQQ0YkL/Gemini-Generated-Image-6alobk6alobk6alo.png', 
        schedule: [
            { day: '1/26', title: '未來科技 - 時空偵查車', task: '打造專屬時空偵查車，找出時間混亂原因', tools: ['APP程式設計'] },
            { day: '1/27', title: '未來科技 - 時空發射台', task: '組裝發射器，傳送資料到未來總部', tools: ['APP程式設計'] },
            { day: '1/28', title: '恐龍奔馳 - 來到恐龍時代', task: '進入 Minecraft 恐龍世界，重現史前巨獸', tools: ['SPM', 'SPIKE'] },
            { day: '1/29', title: '甜蜜羅馬 - 修復時鐘核心', task: '派出維修機器人，修復控制時間的時鐘', tools: ['SPM', 'SPIKE'] },
            { day: '1/30', title: '西部荒野 - 時間重啟任務', task: '完成最終任務，讓時間穩定器重新運作', tools: ['SPM', 'SPIKE'] },
        ]
    },
    art: {
        id: 'art',
        title: '藝術機械師：創意製造工坊',
        date: '2/02 (一) - 2/06 (五)',
        themeColor: 'bg-orange-500',
        themeLight: 'bg-orange-50',
        textColor: 'text-orange-900',
        accentColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        iconType: 'Palette',
        description: '一週結合藝術與科技的創作之旅！學習圖形設計、雷射切割、3D列印與機器人積木！',
        tags: ['圖形設計', '雷射切割', '3D 列印', 'SPM/SPIKE 積木'],
        image: 'https://i.ibb.co/qYGnKZgb/Gemini-Generated-Image-otu943otu943otu9.png',
        schedule: [
            { day: '2/02', title: '小試身手 - 基礎造型', task: '學習雷射切割基礎，製作專屬小吊飾與壓麵機', tools: ['雷射切割'] },
            { day: '2/03', title: '機器人想幫手', task: '完成小吊飾，設計動物造型杯墊與攪拌器', tools: ['雷射切割'] },
            { day: '2/04', title: '動物派對', task: '動物造型杯墊大功告成！製作紙飛機發射器', tools: ['雷射切割'] },
            { day: '2/05', title: '合作沙畫', task: '3D列印沙漏零件！組裝 SPIKE 畫圖機展現藝術', tools: ['3D列印', 'SPIKE'] },
            { day: '2/06', title: '作品展', task: '沙漏組裝完成！SPIKE 翻滾機器人登場', tools: ['3D列印', 'SPIKE'] },
        ]
    },
    newyear: {
        id: 'newyear',
        title: '新春發明家：拯救福氣塔',
        date: '2/09 (一) - 2/13 (五)',
        themeColor: 'bg-red-600',
        themeLight: 'bg-red-50',
        textColor: 'text-red-900',
        accentColor: 'text-red-600',
        borderColor: 'border-red-200',
        iconType: 'Star',
        description: '化身小小發明家，運用科技拯救新春城，擊敗年獸，點亮福氣塔！',
        tags: ['3D 列印', '雷射切割', 'Minecraft', 'LEGO SPM/Spike'],
        image: 'https://i.ibb.co/5gFCVkLm/Gemini-Generated-Image-leo3qtleo3qtleo3.png',
        schedule: [
            { day: '2/09', title: '找回能量核心', task: '3D列印新春元素，組裝加農炮找回核心', tools: ['3D列印', 'SPIKE'] },
            { day: '2/10', title: '收集散落零件', task: '3D列印零件，打造機械夾子收集福氣', tools: ['3D列印', 'SPIKE'] },
            { day: '2/11', title: '製作啟動核心', task: '雷射切割吉祥圖案，畫圖機繪製祝福', tools: ['雷射切割', 'SPIKE'] },
            { day: '2/12', title: '進入春天秘境', task: '挑戰 Minecraft 關卡，製作鎮定年獸的信號機', tools: ['Minecraft', 'SPIKE'] },
            { day: '2/13', title: '最終決戰', task: '擊敗年獸，修復福氣塔，迎接新春慶典！', tools: ['Minecraft', 'SPIKE'] },
        ]
    }
};

export const DEFAULT_GALLERY_IMAGES: GalleryImage[] = [
    { src: "https://i.ibb.co/NdmWqJF2/image.jpg", label: "專注學習" },
    { src: "https://i.ibb.co/0VCTbMVk/SPIKE.png", label: "樂高機器人實作" },
    { src: "https://i.ibb.co/ynB9rzf0/2025-12-12-132717.png", label: "團隊合作解題" },
    { src: "https://i.ibb.co/HTnprMbJ/9-21.jpg", label: "動手做 Maker" }
];

export const REVIEWS: Review[] = [
    { name: "陳媽媽", kid: "小學三年級", text: "孩子參加完時空探險隊後，回家一直分享做好的機器人，還主動說要學程式！真的很推薦。", stars: 5 },
    { name: "林爸爸", kid: "小學五年級", text: "原本擔心孩子坐不住，結果玩 Minecraft 學程式玩得超開心，老師引導得很好。", stars: 5 },
    { name: "張小姐", kid: "小學一年級", text: "第一次參加冬令營，雷射切割的作品很有質感，帶回家阿公阿嬤都說好厲害！", stars: 5 },
    { name: "王先生", kid: "小學四年級", text: "課程內容很豐富，不是只有玩遊戲，真的有學到邏輯思考，明年還會再來。", stars: 5 }
];

export const INTEREST_TAGS = [
    "📱 想做自己的 APP", "🎮 超愛玩 Minecraft", "🤖 喜歡組裝樂高",
    "🎨 喜歡畫畫設計", "🛠️ 喜歡動手做勞作", "⚙️ 對機械構造好奇",
    "🖨️ 想學 3D 列印/雷切", "🧩 喜歡解謎闖關", "🐉 想要挑戰 Boss 戰"
];