import React from "react";
import { TfiAlignJustify } from "react-icons/tfi";

export const DrawerButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="text-dark rounded-lg text-xl px-5 py-2.5 "
        type="button"
        onClick={onClick}
      >
        <TfiAlignJustify />
      </button>
    </div>
  );
};