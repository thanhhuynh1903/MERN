import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import GetAllBrand from '../../api/getAllBrand';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Sidebar() {
const [brandList,setBrandList] = useState([])

const fetchApi = async () =>{
  try {
    const response = await GetAllBrand()
    setBrandList(response)
  } catch (error) {
    console.log(error);
  }
}
console.log(brandList);
useEffect(()=>{
  fetchApi()
},[])

  return (
    <section className="sticky top-0 bg-white dark:bg-gray-900 space-y-3 lg:w-[30%] lg:px-2 lg:space-y-4 border-r-2 border-gray-200 my-2">
      <div className="container px-6 py-8 h-full">
        <div className="lg:flex lg:-mx-2 sticky top-0">
          <div className="w-full ">
            {brandList.map((item,index)=>(
            <div key={index} className={`flex w-full justify-between items-center mb-2  border-b-2 py-2`}>
              <Link href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">
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
