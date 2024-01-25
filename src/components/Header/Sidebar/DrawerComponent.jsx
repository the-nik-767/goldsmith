import React from "react";
import { Dropdown } from "./Dropdown";

export const DrawerComponent = ({ isOpen, onClose }) => {
  return (
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
        isOpen ? "shadow-lg" : ""
      } ${isOpen ? "" : "-translate-x-full"} bg-white w-64 dark:bg-gray-800`}
      tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white mb-10"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <br />
      <br />

      <Dropdown
        buttonText="HOME"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />

      <Dropdown
        buttonText="SHOP"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />

      <Dropdown
        buttonText="PRODUCTS"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />

      <Dropdown
        buttonText="TEMPLATES"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />

      <Dropdown
        buttonText="PAGES"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />

      <Dropdown
        buttonText="MEGA"
        items={[
          { href: "#", label: "Drawer Item 1" },
          { href: "#", label: "Drawer Item 2" },
        ]}
      />
      <br />
    </div>
  );
};
