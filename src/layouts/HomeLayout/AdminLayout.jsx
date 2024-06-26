import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawerLeft from '../../atom/sidebar/AdminSideBar';
import FooterLayout from '../../atom/Footer/FooterLayout';

export default function AdminLayout({ children }) {
    return (
        <div>
            <PersistentDrawerLeft>{children}</PersistentDrawerLeft>

            {/* <div className="flex justify-center">
                <main className="lg:mt-6 lg:px-2 my-5 lg:w-full justify-center ">
                    <Outlet />
                </main>
            </div>
            <footer>
                <FooterLayout />
            </footer> */}
        </div>
    );
}
