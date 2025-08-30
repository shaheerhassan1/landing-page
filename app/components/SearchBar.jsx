"use client";

import { useState } from "react";
import { Link, Send } from "lucide-react";
import { motion } from "motion/react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    onSearch(q);
    setQuery("");
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-full px-4 sm:px-6 md:px-12 lg:px-72 z-50">
      <form onSubmit={handleSubmit} className="font-sm mr-2">
        <div className="relative flex items-center font-sm text-[14px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full h-[48px] p-4 pr-12 pl-10 rounded-xl border border-gray-200 bg-white placeholder:opacity-60"
          />
          <button type="button" className="absolute left-4" tabIndex={-1}>
            <Link className="h-4 w-4 cursor-pointer" color="grey" />
          </button>

          <motion.button
            type="submit"
            disabled={!query.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.92 }}
            className="absolute right-2 p-1.5 rounded-lg bg-[#38b9ff] cursor-pointer text-white flex items-center gap-2 font-semibold px-3"
          >
            <Send className="h-4 w-4" /> Send
          </motion.button>
        </div>

        <p className="mt-2.5 mb-2 text-[12px] text-gray-500 text-center opacity-65">
          Centre may display inaccurate info, so please double check the
          response.{" "}
          <span className="font-extrabold text-black underline">
            Your Privacy & Centre AI
          </span>
        </p>
      </form>
    </div>
  );
}
