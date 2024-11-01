'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
            {/* Main content */}
            <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
                <div className="text-8xl font-bold text-primary mb-8">404</div>

                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Page Under Construction
                </h1>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    The page you&apos;re looking for is still being developed. Check back soon!
                </p>

                <motion.div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-8 overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: '0%' }}
                        animate={{ width: '70%' }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/">
                        <Button variant="default" className="group">
                            <HomeIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
