import React, { useEffect, useState } from "react";

export default function DisplayField({ label, value }) {
  const [Value, setValue] = useState(value);

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
        {label === "Automatic*" ? (
          <label className="inline-flex items-center cursor-pointer " >
            <input type="checkbox" className="sr-only peer"   checked={value ? true : false}  disabled  />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
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
