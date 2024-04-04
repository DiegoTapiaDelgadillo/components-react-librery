import { useState } from "react";
import InputRadio from "./input";

export default function InteractiveRatingComponent({ question, description }) {
  const data = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    console.log(selectedValue);
  };

  return (
    <div className="min-h-svh flex justify-center items-center bg-neutral-900 px-48">
      <div className="grid w-full md:w-1/2 h-auto rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950 p-8">
        <div className="bg-slate-800 shadow rounded-full w-12 h-12 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-orange-500 fill-orange-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
        <h1 className=" text-white font-bold text-3xl py-8">{question}</h1>
        <p className=" text-neutral-400 pb-8">{description}</p>
        <form action="" className="w-full" onSubmit={handleRadioChange}>
          <div className="flex justify-between px-12">
            {data.map((item, index) => (
              <InputRadio
                key={index}
                value={item.value}
                index={index}
                isActive={activeIndex === index}
                handleClick={() => handleItemClick(index)}
              />
            ))}
          </div>
          <div className="pt-8 w-full">
            <button
              type="submit"
              className=" bg-orange-500 w-full rounded-2xl py-4 font-bold text-white hover:bg-white hover:text-orange-500 ease-in-out duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
