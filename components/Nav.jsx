"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Nav = ({ handleCanvasDarkMode }) => {
  const [time, setTime] = useState(getCurrentTime());
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkClick() {
    setDarkMode(!darkMode);
    handleCanvasDarkMode("#f5EBE0")
  }
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // Update every second

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    // Convert 24-hour time to 12-hour time format
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${twelveHour}:${formattedMinutes}${ampm}`;
  }

  return (
    <nav className="lg:py-2 py-3 mx-auto w-[95%] flex items-center justify-between z-10">
      <div>
        <Link href={"/"}>
            <p role="Website Name">
            <span className="font-semibold">william</span>.jones
            </p>
        </Link>
      </div>
      <div className="flex items-center justify-around lg:gap-3 gap-2 text-sm">
        <p className="hidden lg:block">Exeter University</p>
        <p className="hidden lg:block">/</p>
        <p className="">{time}</p>
        <div
          className="dark:text-neutral-200 hover:cursor-pointer min-w-[1.5rem] rounded-xl p-2 hover__button transition-all duration-500"
          onClick={handleDarkClick}
        >
          <span className="sr-only sr-only-focusable">
            Click to change colour theme
          </span>
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-neutral-200"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                className="fill-neutral-200"
              ></path>{" "}
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="fill-black"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.502 3.502 0 0 1 7 8zm4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />{" "}
              <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />{" "}
            </svg>
          )}
        </div>
        <Link href={"/contact"}>
          <button className="py-1 px-3 rounded-lg dark:bg-[#f5EBE0] bg-[#22223b] text-[#f5EBE0] dark:text-[#22223b]">
            Let's Talk
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
