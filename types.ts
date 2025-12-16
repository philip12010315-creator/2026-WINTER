export interface ScheduleDay {
    day: string;
    title: string;
    task: string;
    tools: string[];
}

export interface Camp {
    id: string;
    title: string;
    date: string;
    themeColor: string;
    themeLight: string;
    textColor: string;
    accentColor: string;
    borderColor: string;
    iconType: 'Rocket' | 'Palette' | 'Star';
    description: string;
    tags: string[];
    image: string;
    schedule: ScheduleDay[];
}

export interface GalleryImage {
    src: string;
    label: string;
}

export interface Review {
    name: string;
    kid: string;
    text: string;
    stars: number;
}

export interface ChatMessage {
    role: 'model' | 'user';
    text: string;
}