import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import DropdownLinkButton from "../../atom/profileSetup/ProfileSetup";
export default function HeaderIcons() {
  const token = localStorage.getItem("accessToken") || "";
  const [userData, setUserData] = useState(null);
  console.log(userData);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserData(decoded);
    }
  }, [token]);
  return (
    <div className="flex space-x-4 items-center">
      <div className="flex items-center space-x-2">
        {userData ? (
          
            <DropdownLinkButton>
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full">
                <span className="text-white font-bold">
                  {userData?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            </DropdownLinkButton>
   
        ) : (
          <Link to={"/login"} className="flex items-center space-x-2">
            <FaRegUser className="h-6 w-6 text-black" />
            <span className="text-black">Sign in</span>
          </Link>
        )}
      </div>
      {/* <HeartIcon className="h-6 w-6 text-black" />
      <ShoppingBagIcon className="h-6 w-6 text-black" /> */}
    </div>
  );
}
