import React from "react";
import { lesson } from "@/assets";

export default function Lesson({ type, children, className }) {
  return (
    <button
      className={`flex-items-center gap-x-1 text-white px-5 py-4 rounded-40 ml-auto ${
        type === "blue" ? "bg-blue-500" : "bg-purple-100"
      } hover:opacity-90 ${className}`}
    >
      <img src={lesson} alt="Lesson" />

      {children}
    </button>
  );
}
