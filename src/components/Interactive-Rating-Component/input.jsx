import React, { useState } from "react";

export default function InputRadio({ value, index, isActive, handleClick }) {
  return (
    <>
      <label
        htmlFor=""
        className={`inline-flex  ${
          isActive ? "bg-white/50 text-white" : "bg-white/10 text-white/50"
        } items-center justify-center rounded-full h-16 w-16 cursor-pointer hover:bg-orange-500 hover:text-white ease-in-out duration-300`}
        onClick={handleClick}
        name="option"
      >
        <input type="radio" className="" value={value} name="option" />
        <span className="font-bold">{value}</span>
      </label>
    </>
  );
}
