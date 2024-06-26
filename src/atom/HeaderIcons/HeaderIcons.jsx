import React from "react";
import { UserIcon, HeartIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
export default function HeaderIcons() {
  var name = "";
  if (localStorage.getItem("name")) {
    name = localStorage.getItem("name");
  }
  return (
    <div className="flex space-x-4 items-center">
      <div className="flex items-center space-x-2">
        {name ? (
          <div class="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full">
            <span class="text-white font-bold">{name.charAt(0).toUpperCase()}</span>
          </div>
        ) : (
          <Link to={"/login"} className="flex items-center space-x-2">
            <UserIcon className="h-6 w-6 text-black" />
            <span className="text-black">Sign in</span>
          </Link>
        )}
      </div>
      {/* <HeartIcon className="h-6 w-6 text-black" />
      <ShoppingBagIcon className="h-6 w-6 text-black" /> */}
    </div>
  );
}
