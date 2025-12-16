import React, { useState, useEffect } from 'react';
import { Icons } from './ui/Icons';
import AdminPanel from './AdminPanel';
import { DEFAULT_GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>(DEFAULT_GALLERY_IMAGES);
    const [showAdmin, setShowAdmin] = useState(false);
    
    useEffect(() => { 
        try {
            const saved = localStorage.getItem('camp_gallery_images'); 
            if (saved) setImages(JSON.parse(saved)); 
        } catch(e) {
            console.error(e);
        } 
    }, []);
    
    const handleSaveImages = (newImages: GalleryImage[]) => { 
        setImages(newImages); 
        localStorage.setItem('camp_gallery_images', JSON.stringify(newImages)); 
    };

    return (
        <div className="bg-gray-50 py-12 relative border-t border-gray-100">
            {showAdmin && <AdminPanel images={images} onSave={handleSaveImages} onClose={() => setShowAdmin(false)} />}
            <div className="max-w-[95%] xl:max-w-screen-2xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">精彩活動剪影</h2>
                    <p className="text-gray-500 mt-2">專注的眼神，是學習最美的風景</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {images.map((img, i) => {
                        // Check if this is the target image to zoom in
                        const isFeatured = img.label === "樂高機器人實作";
                        return (
                            <div key={i} className="rounded-2xl overflow-hidden shadow-lg group relative aspect-[4/3] cursor-pointer bg-gray-200 border-4 border-white">
                                <img 
                                    src={img.src} 
                                    alt={`活動照片 ${i+1}`} 
                                    // Modified: changed scale-125 to scale-110 for a more moderate zoom.
                                    // This maintains the container size (overflow-hidden) but zooms the image content slightly to fill the frame better.
                                    className={`w-full h-full object-cover transition-transform duration-700 ${isFeatured ? 'scale-110 group-hover:scale-125' : 'group-hover:scale-110'}`} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer" 
                                    onError={(e: any)=>e.target.src='https://placehold.co/800x600?text=圖片載入中'} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <span className="text-white font-bold text-sm md:text-base tracking-wide">{img.label}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Admin button hidden */}
        </div>
    );
};

export default Gallery;