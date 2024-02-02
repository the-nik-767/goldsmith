import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open.includes(id) ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const accordionItems = [
  {
    id: 1,
    question: "size",
    answer: ["8k", "10k", "14k", "18k", "22k", "24k"]

  },
  {
    id: 2,
    question: "price",
    answer: ["item1", "item2", "item3"]

  },
  {
    id: 3,
    question: "category",
    answer: ["earrings", "necklaces", "rings", "bangles and bracelets", "nose pins"]

  },
  {
    id: 4,
    question: "material",
    answer: ["diamond", "gemstone", "gold", "pearl", "silver"]

  },
  {
    id: 5,
    question: "gender",
    answer: ["female", "male"]

  },
  {
    id: 6,
    question: "occasion",
    answer: ["Anniversary", "dailywear", "cocktail", "engagement", "wedding", "solitaire"]

  },
  {
    id: 7,
    question: "Metal purity",
    answer: ["14KT", "18KT", "22KT", "925 Sterling Silver"]

  },
  {
    id: 8,
    question: "Diamond Shape",
    answer: ["emerald", "heart", "oval", "pear", "round"]

  },
];
const SideFilter = () => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const handleOpen = (value) => {
    setOpenAccordions((prevOpenAccordions) => {
      if (prevOpenAccordions.includes(value)) {
        return prevOpenAccordions.filter((accordion) => accordion !== value);
      } else {
        return [...prevOpenAccordions, value];
      }
    });
  };

  return (
    <div className=" mt-32" style={{ width: "15vw" }} >
      <div style={{ width: "70%", margin: "0 auto" }}>
        {accordionItems.map((item) => (
          <Accordion
            key={item.id}
            open={openAccordions.includes(item.id)}
            icon={<Icon id={item.id} open={openAccordions} />}
          >
            <AccordionHeader
              className="text-sm text-black capitalize hover:bg-slate-300 transition-colors"
              onClick={() => handleOpen(item.id)}

            >
              {item.question}
            </AccordionHeader>

            <AccordionBody>
              {item.answer.map((items, index) => (
                <p key={index} className=" text-gray-800 my-2 capitalize">
                  {items}
                </p>
              ))}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SideFilter;
