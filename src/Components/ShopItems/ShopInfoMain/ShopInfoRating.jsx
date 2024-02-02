import React from "react";
import { Rating } from "@material-tailwind/react";

export const ShopInfoRating = () => {
  return (
    <>
      <div>
        <h1 className="mb-2 text-slate-500">Long crystal earrings</h1>
        <h4 className="mb-3 text-slate-500">3,999</h4>
      </div>
      <div className="flex mb-3">
        <div>
          <Rating value={4} />
        </div>
        <div className=" ms-2 text-md text-slate-500">reviews</div>
      </div>
    </>
  );
};
