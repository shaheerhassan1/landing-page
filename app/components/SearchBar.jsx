"use client";

import { useState } from "react";
import { Link } from "lucide-react";
import { Send } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
  };

  return (
    <div className="fixed bottom-5 border-gray-200 p-4 items-center flex flex-col left-18 right-0">
      <form onSubmit={handleSubmit} className="font-sm">
        {/* Input field */}
        <div className="relative flex items-center font-sm text-[14px]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me anything..."
            className="w-[700px] h-[48px] p-4 pr-12 pl-10 rounded-xl border border-gray-200 bg-white placeholder:opacity-25"
          />
          <button type="button" className="absolute left-4">
            <Link className="h-4 w-4 cursor-pointer" color="grey" />
          </button>
          {/* Send button */}
          <button
            type="submit"
            disabled={!query.trim()}
            className="absolute right-2 m p-1.5 rounded-lg w-auto bg-[#38b9ff] text-white flex items-center gap-2 font-semibold pl-3 pr-3"
          >
            <Send className="h-4 w-4" /> Send
          </button>
        </div>

        {/* Disclaimer text */}
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
