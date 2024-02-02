import React from "react";
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
      className={`${
        id === open ? "rotate-180" : ""
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
    question: "story",
    answer:
      "Infuse playful sophistication into your wardrobe with the Bright White and Black Polka Dotted Subtle Sheen Super Soft Premium Cotton Shirt. The classic polka dot pattern in bright white base adds a touch of classic charm. Crafted from premium cotton with a subtle sheen and super-soft feel, this shirt seamlessly combines luxury and comfort. Make a stylish statement with this uniquely designed piece, perfect for adding a dash of personality to your ensemble.",
  },
  {
    id: 2,
    question: "description",
    answer:
      "Safer For The Environment: Our denim factory partner recycles 98% of their water using reverse osmosis filtration and keeps byproducts out of the environment by mixing them with concrete to create building materials.",
  },
  {
    id: 3,
    question: "customization",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
  {
    id: 4,
    question: "delivery time",
    answer: (
      <div>
        Delivery available in all Pincodes.
        <br />
        Delivery Time
        <br />3 to 7 working Days.
      </div>
    ),
  },
  {
    id: 5,
    question: "return policy",
    answer: (
      <div>
        Free returns within 14 days
        <br />
        No Questions Asked
        <br />
        We gladly accept returns as it is a fantastic opportunity for us to show
        you our honesty and transparency. We will also get your feedback to
        improve our products and services. We encourage you to return because
        your satisfaction and comfort is our utmost priority. We don’t want our
        customers to get even slightly dissatisfied, hence we advise you to go
        ahead and ask for refund/exchange.
        <br />
        Refund
        <br />
        Exchange
      </div>
    ),
  },
  {
    id: 6,
    question: "cash on delivery terms",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
  {
    id: 7,
    question: "company details",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
];

export const ShopInfoAccordian = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      {accordionItems.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            className="text-sm text-black capitalize hover:bg-slate-300 transition-colors"
            onClick={() => handleOpen(item.id)}
          >
            {item.question}
          </AccordionHeader>
          <AccordionBody>{item.answer}</AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};
