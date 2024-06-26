import React from 'react'
import { useSidebar } from '../../context/SidebarContext';
import { useEffect } from 'react';
export default function Cart() {

    const { setShowSidebar } = useSidebar();

    useEffect(() => {
      setShowSidebar(false); // Hide the sidebar
  
      return () => {
        setShowSidebar(true); // Show the sidebar when leaving the component
      };
    }, [setShowSidebar]);

  return (
    <div>Cart</div>
  )
}
