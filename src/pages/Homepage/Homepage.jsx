import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GetAllWatch from "../../api/getAllWatch";
import FilterBar from "../../atom/filterBar/FilterBar";
import { Slide } from "../../atom/Slide/Slide";
import Sidebar from "../../atom/sidebar/Sidebar";
export default function Homepage() {
  const [watchesList, setWatchList] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await GetAllWatch();
      setWatchList(response);
      setFilteredWatches(response); // Set the initial filtered list
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      const filtered = watchesList.filter(
        (watch) => watch.brand._id === selectedBrand
      );
      setFilteredWatches(filtered);
    } else {
      setFilteredWatches(watchesList);
    }
  }, [selectedBrand, watchesList]);

  return (
    <div className="lg:mt-0 lg:px-2 lg:w-5/5 flex">
      <Sidebar setSelectedBrand={setSelectedBrand} />
      <div className="flex-grow">
        <Slide />
        <FilterBar quantity={filteredWatches.length} />
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredWatches.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center w-full max-w-lg mx-auto"
            >
              <Link
                to={`/product/${item?._id}`}
                className="flex flex-col justify-center w-full max-w-lg mx-auto"
              >
                <img
                  className="object-cover w-full rounded-md h-72 xl:h-80"
                  src={`http://localhost:8080/upload/${item.image}`}
                  alt={item.watchName}
                />
              </Link>
              <div className="flex justify-between w-full pl-3 flex-wrap">
                <h4 className="mt-2 text-[13px] font-medium text-gray-400 dark:text-gray-200 w-full">
                  {item?.comments.length} reviews
                </h4>
                <h4 className="mt-2 text-[20px] font-medium text-gray-700 dark:text-gray-200 w-full">
                  {item?.watchName}
                </h4>
                <span className="flex mt-2 text-lg text-[12px] text-gray-700 dark:text-gray-200">
                  <p className="underline">brand</p>: {item?.brand?.brandName}
                </span>
              </div>
              <p className="text-blue-500 pl-3 font-bold text-lg">
                Price: ${item?.price}
              </p>
              <Link
                to={`/product/${item?._id}`}
                className="flex flex-col justify-center w-full max-w-lg mx-auto"
              >
                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mx-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="mx-1">View Details</span>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
