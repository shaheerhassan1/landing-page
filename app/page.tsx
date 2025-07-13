import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";

export default function home() {
  return (
    <div className="border-[1.5px] border-neutral-300 rounded-lg m-2 w-[99vw] h-[98vh] flex">
      <Sidebar />
      <div className="border-[1.5px] border-neutral-200 rounded-lg w-[95vw] h-[96vh] mt-1.5 mr-1.5">
        <Navbar />
        <div className="bg-[#f5f6fa] h-[86vh] m-1 rounded-b-lg pt-[5%] items-center flex flex-col">
          <img
            src="/bg1.png"
            alt=""
            className="w-20 items-center flex justify-center opacity-90"
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
