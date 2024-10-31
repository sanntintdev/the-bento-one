import React from 'react';
import { ImageOff } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function NoImagePreview({ message = 'No preview available yet' }) {
    return (
        <Card className="w-full h-full min-h-48 bg-slate-100 flex flex-col items-center justify-center p-6 gap-4 group transition-all duration-300 hover:bg-slate-200">
            <div className="relative">
                <ImageOff
                    className="w-12 h-12 text-slate-400 group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                />
                <div className="absolute -bottom-1 -right-1 w-24 h-2 bg-gradient-to-r from-slate-200 to-slate-300 blur-xl opacity-50" />
            </div>

            <div className="text-center space-y-1">
                <p className="text-slate-600 font-medium">{message}</p>
                <p className="text-sm text-slate-400">Check back soon!</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 opacity-50" />
        </Card>
    );
}
