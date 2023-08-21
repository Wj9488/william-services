"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';

// const TestPage = () => {
//     const [swipeProgress, setSwipeProgress] = useState(0)
//     const router = useRouter();

//     console.log(swipeProgress)

//     useEffect(() => {
//         if (swipeProgress >= 90) {
//             router.push('/test-2');
//         }   
//     }, [swipeProgress]);

//     const handleSwipe = (progress) => {
//         setSwipeProgress(progress * 100);
//     }

//     return (
//         <main>
//             <div className="min-h-[100dvh] min-w-[100%] overflow-x-hidden flex items-center justify-start">
//                 <motion.div 
//                     drag="x" 
//                     dragConstraints={{ left: 0, right: 100 }} 
//                     onDrag={(e, info) => handleSwipe(info.point.x / window.innerWidth)}
//                     className="bg-red-500 p-4 rounded cursor-pointer"
//                     transition={{ type: "spring", stiffness: 100 }}
//                 >
//                     Swipe Me
//                 </motion.div>
//                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 h-4">
//                     <div className="h-4 bg-gray-300 rounded-full relative w-100 z-10">
//                         <motion.div 
//                             initial={{ width: 0 }}
//                             animate={{ width: `${swipeProgress}%` }}
//                             // transition={{ type: "spring", stiffness: 100 }}
//                             className="bg-green-500 h-4 rounded-full"
//                         ></motion.div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default TestPage

const TestPage = () => {
    const [swipeProgress, setSwipeProgress] = useState(0)
    const router = useRouter();

    useEffect(() => {
        if (swipeProgress >= 100) {
            router.push('/test-2');
        }
    }, [swipeProgress]);

    const handleSwipe = (progress) => {
        setSwipeProgress(progress * 100);
    }

    return (
        <main>
            <div className="min-h-[100vh] flex items-center justify-start">
                <motion.div 
                    drag="x" 
                    dragConstraints={{ left: 0, right: 100 }} 
                    onDrag={(e, info) => handleSwipe(info.point.x / window.innerWidth)}
                    className="min-h-[100dvh] w-1/2 bg-red-400"
                >
                </motion.div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="h-2 transparent rounded-full relative w-60 border border-neutral-900">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${swipeProgress}%` }}
                            className="bg-neutral-900 h-2 rounded-full"
                        ></motion.div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default TestPage
