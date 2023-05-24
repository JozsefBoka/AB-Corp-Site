import React from "react";
import Navbar from "./Navbar";

export function Header(props) {
  const {
    logo,
    mainNav,
    burgerNav,
    themeColors,
    includeTransNav
  } = props

  return (
    <Navbar logo={logo} mainNav={mainNav} burgerNav={burgerNav} themeColors={themeColors} includeTransNav={includeTransNav}/>
  );
}

export default Header
