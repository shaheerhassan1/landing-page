"use client";

import { PanelRight, Menu } from "lucide-react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import DropdownMenu from "./DropdownMenu";
import {
  UserCircleIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";

export default function Navbar({ onToggleSidebar }) {
  const icons = [
    {
      path: "M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z",
      name: "messages",
    },
    {
      path: "M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z",
      name: "files",
    },
    {
      path: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z",
      name: "settings",
    },
  ];
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

  const [isOpen, setIsOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <nav className="bg-white px-3 py-3 flex justify-between items-center rounded-t-3xl text-[11px]">
      <div className="flex items-center">
        <button onClick={onToggleSidebar} className="hidden lg:block">
          <PanelRight color="#b4b6b8" className="h-4 w-4 text-black" />
        </button>
        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu color="#b4b6b8" className="h-4 w-4 text-black" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu
          trigger={
            <div className="cursor-pointer">
              <span className="text-gray-800 font-bold">{user.name}</span>
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

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-opacity-50 z-1 transition-opacity duration-300"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-2 transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center gap-10 p-4">
          <Image
            src="/bg.png"
            alt=""
            className="opacity-90 mt-15"
            width={80}
            height={80}
          />
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 w-[8rem] rounded-lg transition-all duration-300 cursor-pointer
          ${hoveredIcon === index ? "bg-neutral-200 scale-105" : ""}
          ${activeIcon === index ? "bg-blue-100" : ""}`}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => setActiveIcon(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`h-5 w-5 transition-all duration-300
            ${activeIcon === index ? "text-blue-600" : "text-gray-900"}
            ${hoveredIcon === index ? "scale-110" : ""}`}
              >
                <path fillRule="evenodd" d={icon.path} clipRule="evenodd" />
              </svg>
              <span
                className={`text-sm font-medium transition-all duration-300
            ${activeIcon === index ? "text-blue-600" : "text-gray-900"}
            ${hoveredIcon === index ? "scale-105" : ""}`}
              >
                {icon.name.charAt(0).toUpperCase() + icon.name.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
