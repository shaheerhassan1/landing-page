"use client";

import { PanelRight } from "lucide-react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import DropdownMenu from "./DropdownMenu";
import {
  UserCircleIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const user = {
    name: "CentraAI 2.0",
  };

  const dropdownItems = [
    {
      label: "CentraAI 2.0 mini",
      icon: <UserCircleIcon className="h-4 w-4" />,
      onClick: () => console.log("Profile clicked"),
    },
    {
      label: "CentraAI 3.0",
      icon: <CogIcon className="h-4 w-4" />,
      onClick: () => console.log("Settings clicked"),
    },
    {
      label: "CentraAI 3.0 mini",
      icon: <ArrowLeftOnRectangleIcon className="h-4 w-4" />,
      onClick: () => console.log("Sign out clicked"),
    },
  ];

  return (
    <nav className="bg-white px-3 py-3 flex justify-between items-center rounded-t-3xl text-[11px]">
      {/* Left side - Menu icon */}
      <button className="cursor-pointer">
        <PanelRight color="#b4b6b8" className="h-4 w-4 text-black" />
      </button>

      {/* Right side - Buttons */}
      <div className="flex items-center gap-2 rounded-sm">
        <DropdownMenu
          trigger={
            <div className="cursor-pointer">
              <span className=" text-gray-800 font-bold">{user.name}</span>
            </div>
          }
          items={dropdownItems}
          align="right"
        />
        <button className="flex items-center gap-2 px-3 py-2 bg-[#38b9ff] text-white rounded-lg transition-colors duration-200 shadow-sm cursor-pointer">
          <SparklesIcon className="h-4 w-4 hover:animate-sparkle" />
          <span className="font-bold">New Chat</span>
        </button>
      </div>
    </nav>
  );
}
