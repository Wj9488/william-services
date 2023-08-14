"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion"

const Canvas = () => {
  const canvasRef = useRef(null);
  const starCount = 200; // You can change this value later
  const starColour = "#22223b"; // You can change this value later

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5,
        speed: Math.random() * 2 + 1,
      });
    }

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = starColour;

      for (let star of stars) {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          star.speed = Math.random() * 5 + 1;
        }
        context.fillRect(star.x, star.y, star.size, star.size);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [starColour]);

  const fadeIn = {
    hidden: { opacity: 0, filter: 'blur(16px)'},
    visible: {
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.75
        }
    }
  };

  return (
    <>
      <motion.div
        className="text-[#22223b] w-[75%] lg:w-[50%] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-[#f5EBE0] bg-[#f5EBE0] dark:bg-[#22223b] p-5 transition-colors duration-500"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <p className="playfair italic">01.welcome</p>
        <h1 className="xl:text-5xl lg:text-4xl text-3xl mt-1">
          I help businesses and individuals stand out from the crowd with exceptionally good websites
        </h1>
        <button className="py-1 px-3 mt-3 rounded-lg dark:border-[#f5EBE0] border border-[#22223b] dark:text-[#f5EBE0] text-[#22223b]">
          Scroll
        </button>
      </motion.div>
      <canvas
        ref={canvasRef}
        style={{ background: "transparent" }}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </>
  );
};

export default Canvas;
