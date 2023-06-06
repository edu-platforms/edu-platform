import React from "react";
import { greenArrowBack } from "@/assets";

export default function Back({ ...props }) {
  return (
    <button className="flex-items-center gap-x-2 text-green border border-gray h-12 w-[180px] rounded-full" {...props}>
      <img src={greenArrowBack} alt="Back" />
      Back
    </button>
  );
}
