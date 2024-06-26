import React, { useState, useEffect } from 'react';

export default function FilterBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrollThreshold = screenHeight / 2;
// console.log(scrollPosition);
// console.log(screenHeight);
      if (scrollPosition > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex items-center justify-between text-sm tracking-widest uppercase my-4 pl-2 ${isSticky ? 'border-2 sticky top-0 bg-white drop-shadow-md' : ''}`}>
      <p className="text-gray-500 dark:text-gray-300">6 Items</p>
      <div className="flex items-center">
        <p className="text-gray-500 dark:text-gray-300 pr-2">Sort</p>
        <select className="font-small text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none text-[15px]">
          <option value="#">Recommended</option>
          <option value="#">Size</option>
          <option value="#">Price</option>
        </select>
      </div>
    </div>
  );
}
