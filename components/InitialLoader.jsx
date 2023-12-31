import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Canvas() {
    const canvasRef = useRef(null);
    const [modeParticleColour, setModeParticleColour] = useState("#22223b");
    const [loadingPercentage, setLoadingPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Fallback in case p el is rendered with 100 as the value
        if (loadingPercentage === 100) return;

        const loadingPercentageInterval = setInterval(() => {
            setLoadingPercentage(prevPercentage => {
                const newPercentage = prevPercentage + 1;

                if (newPercentage >= 100) {
                    clearInterval(loadingPercentageInterval);
                    return 100;
                }

                return newPercentage;
            });
        }, 20); // Updating every 28 milliseconds

        return () => clearInterval(loadingPercentageInterval); // Interval cleanup
    }, [loadingPercentage]);

    useEffect(() => {
        if (document.documentElement.classList.contains('dark')) {
          setModeParticleColour("#f5EBE0");
        } else {
            setModeParticleColour("#22223b");
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let particleNumber = 15;
        let particleRingWidth = window.innerWidth / (window.innerWidth < 1000 ? 4 : 10);

        class Particle {
            constructor(angle) {
                this.angle = angle;
                this.radius = particleRingWidth;
                this.size = 0;
                this.targetSize = Math.random() * 2.5;
                this.speed = Math.random() * 0.02 + 0.005;
                this.growthRate = this.targetSize / 250;
            }

            draw() {
                if (this.size < this.targetSize) {
                    this.size += this.growthRate;
                }
                ctx.beginPath();
                ctx.arc(
                    canvas.width / 2 + this.radius * Math.cos(this.angle),
                    canvas.height / 2 + this.radius * Math.sin(this.angle),
                    this.size,
                    0,
                    2 * Math.PI
                );
                ctx.fillStyle = modeParticleColour;
                ctx.fill();
            }

            update() {
                this.angle += this.speed;
                this.draw();
            }
        }

        const particles = Array.from({ length: particleNumber }).map(
            () => new Particle(Math.random() * 2 * Math.PI)
        );

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => particle.update());
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        animate();
    }, [modeParticleColour]); // Include modeParticleColour as a dependency

    const fadeIn = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.75
            }
        }
      };

      useEffect(() => {
        const loaderTimeout = setTimeout(() => {
            setIsVisible(false);
        }, 2750);
    
        return () => clearTimeout(loaderTimeout);  // Timeout cleanup
    }, []);

      const fadeOut = {
        visible: { opacity: 1 },
        hidden: { 
            opacity: 0,
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <motion.div 
        initial="visible" 
        animate={isVisible ? "visible" : "hidden"} 
        variants={fadeOut}
        >
            <motion.p 
                className="text-[#22223b] text-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-[#f5EBE0]"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <span className="font-semibold">william</span>.loading: <span className="">{loadingPercentage}%</span>
            </motion.p>
            <canvas
                className="bg-transparent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-10]"
                ref={canvasRef}
            ></canvas>
        </motion.div>
    );
}
