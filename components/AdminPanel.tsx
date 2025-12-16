import React, { useState } from 'react';
import { Icons } from './ui/Icons';
import { GalleryImage } from '../types';

interface Props {
    images: GalleryImage[];
    onSave: (images: GalleryImage[]) => void;
    onClose: () => void;
}

const AdminPanel: React.FC<Props> = ({ images, onSave, onClose }) => {
    const [localImages, setLocalImages] = useState(images);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        if (password === 'admin') {
            setIsAuthenticated(true);
        } else {
            alert('密碼錯誤 (預設: admin)');
        }
    };

    const handleSave = () => {
        onSave(localImages);
        onClose();
        alert('設定已儲存！(注意：此為預覽模式，僅保留於此裝置)');
    };

    if (!isAuthenticated) {
        return (
            <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl animate-slide-up">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Icons.Key className="w-5 h-5 text-indigo-600" /> 管理員登入</h3>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="輸入通行碼: admin" className="w-full border rounded-lg p-3 mb-4 outline-none focus:ring-2 focus:ring-indigo-500" />
                    <div className="flex justify-end gap-2">
                        <button onClick={onClose} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg transition">取消</button>
                        <button onClick={handleLogin} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">登入</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-slide-up">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-bold flex items-center gap-2"><Icons.Palette className="w-5 h-5 text-indigo-600" /> 活動剪影管理</h3>
                    <button onClick={onClose}><Icons.X className="w-6 h-6 text-gray-400 hover:text-gray-600" /></button>
                </div>
                <div className="space-y-6">
                    {localImages.map((img, idx) => (
                        <div key={idx} className="border border-gray-200 p-4 rounded-xl bg-gray-50/50">
                            <div className="flex gap-4 items-start">
                                <div className="h-24 w-32 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 relative">
                                    <img src={img.src} className="w-full h-full object-cover" onError={(e: any)=>e.target.src='https://placehold.co/800x600?text=無效連結'} referrerPolicy="no-referrer" alt="preview" />
                                </div>
                                <div className="flex-grow space-y-3">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">圖片連結 URL</label>
                                        <input 
                                            type="text" 
                                            value={img.src} 
                                            onChange={(e) => {
                                                const newImages = [...localImages];
                                                newImages[idx] = { ...newImages[idx], src: e.target.value };
                                                setLocalImages(newImages);
                                            }} 
                                            className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white" 
                                            placeholder="https://..." 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">圖片標題</label>
                                        <input 
                                            type="text" 
                                            value={img.label} 
                                            onChange={(e) => {
                                                const newImages = [...localImages];
                                                newImages[idx] = { ...newImages[idx], label: e.target.value };
                                                setLocalImages(newImages);
                                            }} 
                                            className="w-full border rounded-lg p-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none bg-white" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                    <button onClick={onClose} className="px-5 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl transition">取消</button>
                    <button onClick={handleSave} className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium flex items-center gap-2 shadow-lg shadow-indigo-200"><Icons.Check className="w-4 h-4" /> 儲存變更</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;