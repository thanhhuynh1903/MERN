import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import GetAllBrand from "../../api/getAllBrand";
import { Link } from "react-router-dom";

export default function Sidebar({ setSelectedBrand }) {
  const [brandList, setBrandList] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await GetAllBrand();
      setBrandList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section className="sticky top-0 bg-white dark:bg-gray-900 space-y-3 lg:min-w-[20%] lg:px-2 lg:space-y-4 border-r-2 border-gray-200 my-2 mr-[1%]">
      <div className="container px-6 py-8 h-full">
        <div className="lg:flex lg:-mx-2 sticky top-0">
          <div className="w-full">
            <div
              className={`flex w-full justify-between items-center mb-2 border-b-2 py-2`}
            >
              <Link
                to="/home"
                className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                onClick={() => setSelectedBrand(null)}
              >
                All brands
              </Link>
              <MdOutlineKeyboardArrowRight />
            </div>
            {brandList.map((item, index) => (
              <div
                key={index}
                className={`flex w-full justify-between items-center mb-2 border-b-2 py-2`}
              >
                <Link
                  to="#"
                  className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"
                  onClick={() => setSelectedBrand(item._id)}
                >
                  {item.brandName}
                </Link>
                <MdOutlineKeyboardArrowRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
