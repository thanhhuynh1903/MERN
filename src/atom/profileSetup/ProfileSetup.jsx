import React from "react";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ProfileSetup({children, data}) {
const navigate = useNavigate();

const handlogout = () =>{
  localStorage.removeItem("accessToken")
  navigate('/')
}

  return (
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle
          tag="a"
          className="flex items-center justify-center w-12 h-12 bg-pink-500 rounded-full"
        >
        {children}
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
        <TEDropdownItem>
          <Link to={`/profile`} className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Profile
          </Link>
        </TEDropdownItem>
        <TEDropdownItem>
          <button  className="text-red-500 block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600" onClick={handlogout}>
            Logout
          </button>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}