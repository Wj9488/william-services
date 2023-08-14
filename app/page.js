"use client"

import { useState, useEffect } from 'react';
import Header from "@/components/Header"
import InitialLoader from "@/components/InitialLoader"
import Nav from '@/components/Nav';
import Transition from '@/components/utils/Transition';

export default function Home() {
  const [initialLoading, setInitialLoading] = useState(true);

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
          <Nav />
          <Header />
        </Transition>
      </>}
    </main>
  );
}
