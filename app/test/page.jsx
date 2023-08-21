"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';

const TestPage = () => {
    const [swipeProgress, setSwipeProgress] = useState(0)
    const router = useRouter();

    useEffect(() => {
        // Check if any part of the div reaches 90% of the screen width
        if (swipeProgress >= 90) {
            router.push('/test-2');
        } else {
            setSwipeProgress(0); // Reset progress if not at 90% (This will animate the swipe back to start)
        }
    }, [swipeProgress]);

    const handleSwipe = (progress, offsetX) => {
        // Check if any part of the div has reached 90% of the screen width
        if (offsetX + (window.innerWidth * 0.5) >= window.innerWidth) {
            setSwipeProgress(100); // Mark as complete if it has
        } else {
            setSwipeProgress(progress * 100);
        }
    }

    return (
        <main>
            <div className="min-h-[100dvh] min-w-[100%] overflow-x-hidden flex items-center justify-start">
                <motion.div 
                    drag="x" 
                    dragConstraints={{ left: 0, right: window.innerWidth * 0.9 }} 
                    onDrag={(e, info) => handleSwipe(info.point.x / window.innerWidth, info.offset.x)}
                    onDragEnd={(e, info) => {
                        // Reset progress if not at 90%
                        if (info.point.x + (window.innerWidth * 0.1) < window.innerWidth) {
                            setSwipeProgress(0);
                        }
                    }}
                    className="bg-red-500 p-4 rounded cursor-pointer"
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    Swipe Me
                </motion.div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="h-2 bg-gray-400 rounded-full relative w-full">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${swipeProgress}%` }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="bg-neutral-900 h-2 rounded-full"
                        ></motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TestPage
