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
    hidden: { opacity: 0, filter: 'blur(16px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        ease: 'easeIn',
        duration: 0.75,
        staggerChildren: 0.5  // Here's the key part
      }
    }
  };
  
  const childVariant = {
    hidden: { 
      opacity: 0, 
      filter: 'blur(0.5px)', 
      y: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'tween',
        // ease: 'easeIn',
        duration: 0.75
      }
    }
  };
  
  return (
    <>
      {/* <motion.div
        className="text-[#22223b] w-[90%] lg:w-[50%] text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:text-[#f5EBE0] bg-[#f5EBE0] dark:bg-[#22223b] lg:p-5 p-2 transition-colors duration-500"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.p variants={childVariant} className="playfair italic">01.welcome</motion.p>
        <motion.h2 variants={childVariant} className="xl:text-5xl lg:text-4xl text-3xl mt-1">
          I help businesses and individuals stand out from the crowd with exceptionally good websites
        </motion.h2>
        <motion.button variants={childVariant} className="py-1 px-3 mt-3 rounded-lg dark:border-[#f5EBE0] border border-[#22223b] dark:text-[#f5EBE0] text-[#22223b]">
          Scroll
        </motion.button>
      </motion.div>
      <canvas
        ref={canvasRef}
        style={{ background: "transparent" }}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas> */}
      <motion.div
        className="text-[#22223b] min-h-[95vh] text-center dark:text-[#f5EBE0] bg-[#f5EBE0] dark:bg-[#22223b] lg:p-5 p-2 transition-colors duration-500 flex items-center justify-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="xl:w-[50%] lg:w-[65%] w-[90%]">
          <motion.p variants={childVariant} className="playfair italic">01.welcome</motion.p>
          <motion.h2 variants={childVariant} className="xl:text-5xl lg:text-4xl text-3xl mt-1">
            I help businesses and individuals stand out from the crowd with exceptionally good websites
          </motion.h2>
          <motion.button variants={childVariant} className="py-1 px-3 mt-3 rounded-lg dark:border-[#f5EBE0] border border-[#22223b] dark:text-[#f5EBE0] text-[#22223b]">
            Scroll
          </motion.button> 
          <div className="flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{ background: "transparent" }}
              className="border border-[#22223b] rounded-[100px] mt-6 dark:border-[#f5EBE0]"
              width={200}
              height={300}
            ></canvas>
          </div>     
        </div>  
      </motion.div>
    </>
  );
  
};

export default Canvas;
