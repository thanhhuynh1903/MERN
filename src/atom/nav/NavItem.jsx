import React from "react";
import SearchButton from "../search/SearchButton";
import Logo from "../Logo/LogoAtom";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
export default function NavItem() {
  return (
    <div>
      <div className="flex flex=wrap justify-between item-center p-5 ">
        <Logo/>
        <SearchButton/>
        <HeaderIcons/>
      </div>
    </div>
  );
}
