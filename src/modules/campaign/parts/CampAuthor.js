import React from "react";
import { defaultImage } from "../../../constants/global";

const CampAuthor = ({ image = defaultImage, author = "" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img src={image} alt="" className="object-cover w-8 h-8 rounded-full" />
      <p className="text-xs text-text3">
        By {""}
        <span className="font-semibold text-text2">Mahfuzil Nabil</span>
      </p>
    </div>
  );
};

export default CampAuthor;
