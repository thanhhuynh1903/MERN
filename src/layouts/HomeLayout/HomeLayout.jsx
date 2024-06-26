import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../../atom/nav/NavItem";
import Sidebar from "../../atom/sidebar/Sidebar";
import { useSidebar } from "../../context/SidebarContext";
import FooterLayout from "../../atom/Footer/FooterLayout";

export default function HomeLayout() {
  const { showSidebar } = useSidebar();

  return (
    <div>
      <NavItem />
      <hr />
      <div className="flex justify-center">
        {showSidebar && <Sidebar />}
        <main className="lg:mt-6 lg:px-2 my-5 lg:w-full justify-center ">
          <Outlet />
        </main>
      </div>
      <footer>
        <FooterLayout />
      </footer>
    </div>
  );
}
