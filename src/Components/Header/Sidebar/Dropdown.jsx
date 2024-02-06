import React, { useState } from "react";
import { Link } from "react-router-dom/dist";

export const Dropdown = ({ id, btntxt, item, handleOnClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };
  // console.log("item is open",item)

  return (
    <>
    <div id={`accordion-collapse-${id}`} data-accordion="collapse">
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 hover:text-black gap-3`}
          data-accordion-target={`#accordion-collapse-body-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
          onClick={toggleAccordion}
        >
          <span>{btntxt}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-180 shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={` ${isOpen ? "block" : "hidden"}`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="ps-5 pt-2 divide-y divide-solid">

          {item.map((items, index) => (
            <p key={index} className="mb-2 text-gray-800 pt-3" onClick={handleOnClick(id)}>
              {items}
            </p>
          ))}
          {/* {item.map((items, index) => (
            <Link index={2} className="mb-2 text-gray-800 pt-3">
            sdfcsdfsd
            </Link>
          ))} */}
        </div>
      </div>
    </div>
          </>
  )}