import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Sidebar() {
  return (
    <section className="bg-white dark:bg-gray-900 space-y-3 lg:w-[30%] lg:px-2 lg:space-y-4 border-r-2 border-gray-200 my-2">
        <div className="container px-6 py-8">
            <div className="lg:flex lg:-mx-2">
                <div className="w-full">
                  <div className='flex w-full justify-between'>
                    <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                    <MdOutlineKeyboardArrowRight/>
                    </div>
                    <hr/>
                    <div className='flex w-full justify-between'>
                    <a href="#" className="block font-medium text-blue-500 dark:text-blue-300 hover:underline">Jackets & Coats</a>
                    <MdOutlineKeyboardArrowRight/>
                    </div>
                    <hr/>
                    <div className='flex w-full justify-between'>
                    <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                    <MdOutlineKeyboardArrowRight/>
                    </div>
                    <hr/>
                    <div className='flex w-full justify-between'>
                    <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Jackets & Coats</a>
                    <MdOutlineKeyboardArrowRight/>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
