"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

/**
 * @typedef {Object} DropdownItem
 * @property {string} label
 * @property {React.ReactNode} [icon]
 * @property {() => void} [onClick]
 */

/**
 * @typedef {Object} DropdownMenuProps
 * @property {React.ReactNode} trigger
 * @property {DropdownItem[]} items
 * @property {"left" | "right"} [align]
 */

export default function DropdownMenu({
  trigger,
  items,
  align = "left",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center gap-1 hover:bg-gray-100 rounded-lg p-2 transition-colors border-1 border-neutral-300 text-[11px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {trigger}
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-270" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-45 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-neutral-500 ring-opacity-1 focus:outline-none z-50`}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
