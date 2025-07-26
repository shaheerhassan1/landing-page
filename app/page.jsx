"use client";
import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="border-[1.5px] border-neutral-300 rounded-lg m-2 w-[99vw] h-[98vh] flex">
      <Sidebar />
      <div className="border-[1.5px] border-neutral-200 rounded-lg w-[95vw] h-[96vh] mt-1.5 mr-1.5">
        <Navbar />
        <div className="bg-[#f5f6fa] h-[87vh] m-1 rounded-b-lg pt-[5%] items-center flex flex-col">
          <Image
            src="/bg1.png"
            alt=""
            className="items-center flex justify-center opacity-90"
            width={80}
            height={80}
          />
          <p className="text-md text-neutral-500 font-semibold">Hi, there 👋</p>
          <p className="font-bold text-xl">How can we help?</p>
          <div className="flex flex-row gap-2">
            <SearchBar />
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
  );
}
