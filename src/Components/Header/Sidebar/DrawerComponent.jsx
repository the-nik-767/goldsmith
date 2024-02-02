import React from "react";
import { Dropdown } from "./Dropdown";

export const DrawerComponent = ({ isOpen, onClose }) => {
  let x = [
    {
        id: "1",
        btntxt: "HOME",
        item: ["Item 1", "Item 2"]
    },
    {
        id: "2",
        btntxt: "SHOP",
        item: ["Item 1", "Item 2"]
    },
    {
        id: "3",
        btntxt: "PRODUCTS",
        item: ["Item 1", "Item 2"]
    },
    {
        id: "4",
        btntxt: "TEMPLATES",
        item: ["Item 1", "Item 2"]
    },
    {
        id: "5",
        btntxt: "PAGES",
        item: ["Item 1", "Item 2"]
    },
    {
        id: "6",
        btntxt: "MEGA",
        item: ["Item 1", "Item 2"]
    }
];
 
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
        className="text-gray-400 bg-transparent text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center mb-10"
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
      {
        x?.map((x,i) =>{ 
          return(
         
          <Dropdown id={x.id} btntxt={x.btntxt} item={x.item} />
          
          )
        })
      }
    </div>
  );
};
