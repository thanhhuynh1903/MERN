import React, { useEffect, useState } from "react";

export default function DisplayField({ label, value }) {
  console.log(value);
  const [color, setColor] = useState("");
  useEffect(() => {
    setColor(value);
  }, [value]);

  return (
    <div className="flex justify-start items-center">
      <label
        for="price"
        className="block text-sm font-medium leading-6 text-gray-900 w-20"
      >
        {label}
      </label>
      <div className="relative mt-2  rounded-md  w-2/6">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {label === "Weight" ? (
            <span className="text-gray-500 sm:text-sm">g</span>
          ) : (
            " "
          )}
        </div>
        {label !== "Color*" ? (
          <input
            type="text"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            value={value}
            disabled
          />
        ) : (
          <input
            type="text"
            id="price"
            className="uppercase tracking-[.12em] block w-full md:w-80 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
            value={value}
            disabled
          />
        )}
      </div>
    </div>
  );
}
