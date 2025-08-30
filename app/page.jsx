"use client";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Testimonials from "./components/Testimonials";
import Image from "next/image";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [submitted, setSubmitted] = useState(true);
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const handleSend = async (userMessage) => {
    const text = (userMessage || "").trim();
    if (!text) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setSubmitted(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();
      const reply = data?.reply || "⚠️ No response";
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ API Error!" },
      ]);
    }
  };

  const handleSearch = (query) => {
    handleSend(query);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="border-[1.5px] border-neutral-300 rounded-lg m-1 w-[99vw] h-[98vh] flex overflow-hidden">
      <Sidebar ref={sidebarRef} />

      <div className="border-[1.5px] ml-1.5 border-neutral-200 rounded-lg w-[95vw] h-[96vh] mt-1.5 mr-1.5 sm:ml-1.5 md:w-[98vw] sm:w-full flex flex-col overflow-hidden">
        <Navbar />

        <div className="bg-[#f5f6fa] flex-1 m-1 rounded-b-lg flex flex-col items-center overflow-hidden relative">
          <div className="pt-8 flex flex-col items-center shrink-0 overflow-scroll">
            <Image
              src="/bg1.png"
              alt=""
              className="items-center flex justify-center opacity-90"
              width={80}
              height={80}
            />
            <p className="text-md text-neutral-500 font-semibold mt-2">
              Hi, there 👋
            </p>
            <p className="font-bold text-xl">How can we help?</p>
          </div>

          <div className="w-full flex justify-center mt-4 px-4 pb-24">
            <div className="w-full max-w-2xl">
              {submitted && messages.length === 0 && (
                <div className="mt-4">
                  <Testimonials />
                </div>
              )}

              <div className="rounded-xl  overflow-hidden">
                <div className="h-auto overflow-y-auto p-4">
                  <div className="flex flex-col gap-3">
                    {messages.length > 0 && (
                      <div className="flex flex-col gap-3 mt-8 w-full max-w-[600px] h-[400px] overflow-y-auto p-2">
                        {messages.map((msg, i) => (
                          <div
                            key={i}
                            className={`rounded-lg p-3 max-w-[70%] ${
                              msg.sender === "user"
                                ? "bg-blue-500 text-white self-end"
                                : "bg-gray-200 text-black self-start"
                            }`}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    )}

                    <div ref={chatEndRef} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
}
