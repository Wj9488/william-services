"use client"

import { useState, useEffect } from 'react';
import Header from "@/components/Header"
import InitialLoader from "@/components/InitialLoader"
import Nav from '@/components/Nav';
import Transition from '@/components/utils/Transition';

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);
  const [canvasColour, setCanvasColour] = useState("#22223b");

  const handleCanvasDarkMode = () => {
    // If current color is #22223b, switch to #f5EBE0. Otherwise, revert back to #22223b.
    setCanvasColour(prevColour => prevColour === "#22223b" ? "#f5EBE0" : "#22223b");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);

    // Cleanup the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {initialLoading ? 
        <InitialLoader /> 
      : 
      <>
        <Transition>
          <Nav handleCanvasDarkMode={handleCanvasDarkMode}/>
          <Header currentColour={canvasColour}/>
        </Transition>
      </>}
    </main>
  );
}
