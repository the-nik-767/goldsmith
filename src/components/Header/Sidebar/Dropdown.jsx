import React, { useState } from "react";

export const Dropdown = ({ buttonText, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        className="text-gray-700 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center pt-6"
        type="button"
        onClick={toggleDropdown}
      >
        {buttonText}{" "}
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isOpen ? "rtl:rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 z-20">
          <ul
            className="py-2 text-sm text-gray-700 "
            aria-labelledby="multiLevelDropdownButton"
          >
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 "
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
