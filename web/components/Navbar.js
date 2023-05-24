import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getBackgroundColor, getFontColor, getFontColorValue, getStyles } from "../utils/theme"
import { useSiteConfig, useSiteConfigUpdate } from "./context/ConfigContext"
import { urlFor } from "../utils/imageBuilder";
import gsap from 'gsap';
import { ArrowEast, Logo } from "./icons";
import { isTabletWidth } from "../utils/hooks/windowResizeListener";
import Image from "next/image";

// todo use clip path circle for navbar
// file too unreadable

const NavLink = (props) => {
  const {
    navItem,
    classNames,
    onClick,
    style
  } = props

  if (navItem.secondLevelItems) {
    return ""
  }

  if (!navItem.navLink) {
    return <h2>Navigation Item not properly set up</h2>
  }

  return (
    <div className={classNames}>
      <Link href={navItem.navLink.internal ? navItem.navLink.internal.slug.current : navItem.navLink.external}>
        <p className="cursor-pointer" onClick={onClick} style={style}>
          {navItem.name}
        </p>
      </Link>
    </div>
  )
}

const SecondLevelItems = ({ navItem }) => {
  const contextReducers = useSiteConfigUpdate()
  const context = useSiteConfig()

  if (navItem.secondLevelItems) {

    return (
      <div className="h2 second-level mb-20 lg:mb-0">
        <div className="lg:hidden">
          <button onClick={() => contextReducers.toggleSecondLevelNav()}>
            <div className="flex justify-between items-center min-w-[350px]">
              <p className="text-[30px]">{navItem.name}</p>
              <ArrowEast fill="#ACACAC" />
            </div>
          </button>
        </div>

        <div className={"absolute lg:static top-0 w-screen lg:w-auto h-screen lg:h-auto bg-[#242424] transition-[left] duration-300 " + (context.isSecondLevelNavActive ? "left-0 z-40" : "left-[110vw]")}>
          {navItem.secondLevelItems.map(item => (
            <NavLink key={'second-lvl-' + item._key} navItem={item} classNames={'opacity-60 hover:opacity-100 hover:pl-10 transition-all'} onClick={() => {
              contextReducers.toggleNavbars()
            }} style={{ textTransform: 'uppercase' }} />
          ))}
        </div>
      </div>
    )
  }

  return ""
}

const clipPathPos = {
  mobile: '90% 7%',
  desktop: '95% 10%'
}

const getClipPathPos = () => {
  return isTabletWidth() ? clipPathPos.mobile : clipPathPos.desktop
}

const openNavbar = (themeColors) => {
  gsap.to('.navbar', {
    duration: 0.3,
    ease: 'in',
    '--clip-path': 'circle(150% at ' + getClipPathPos() + ')'
  })
}

const closeNavbar = (themeColors) => {
  const tl = gsap.timeline()
  tl
    .to('.navbar', {
      duration: 0.3,
      '--clip-path': 'circle(0% at ' + getClipPathPos() + ')'
    })
}

const BurgerNav = (props) => {
  const {
    logo,
    burgerNav,
    themeColors
  } = props

  const secondLeveItems = burgerNav?.navItems?.find((navItem) => navItem.secondLevelItems)

  const contextReducers = useSiteConfigUpdate()
  const isNavActive = useSiteConfig().isNavbarActive

  useEffect(() => {
    if (isNavActive) {
      openNavbar(themeColors)
    } else {
      closeNavbar(themeColors)
    }
  })

  return (
    <div className="navbar left-0 transition-[left] ease-in-out duration-300 fixed top-0 w-full h-screen bg-[#242424] text-white z-30 font-krona">
      <div className="flex items-center justify-between pl-5 lg:pl-12 pr-5 lg:pr-16 h-[112px] xl:h-[176px]">
        <Link href="/">
          <div className="cursor-pointer w-[125px] h-[39px] opacity-60" onClick={() => contextReducers.toggleNavbar()}>
            <Logo fill='white' />
          </div>
        </Link>
      </div>

      <div className="container mt-28 h-[60%] flex flex-col justify-between">
        <div className="relative flex justify-start lg:justify-between flex-col lg:flex-row">
          <SecondLevelItems navItem={secondLeveItems} />

          <div className="flex flex-col lg:items-end">
            {burgerNav?.navItems?.map((navItem) => (
              <NavLink key={navItem._key} navItem={navItem} onClick={() => contextReducers.toggleNavbar()} classNames={'opacity-60 hover:opacity-100 mb-3 lg:mb-0'} />
            ))}

            <div className="flex pt-[40%]">
              {burgerNav?.socialItems?.map((socialItem) => (
                <NavLink key={socialItem._key} navItem={socialItem} onClick={() => contextReducers.toggleNavbar()} classNames={'first:pl-0 pl-[60px] text-[13px]'} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[10%] text-xs text-[#707070]">
          <p className="hidden lg:block">Copyright © {new Date().getFullYear()} Active Brands</p>

          {/* todo add link in studio */}
          <div className="flex flex-col lg:flex-row">
            <Link href=""><p className="cursor-pointer transition-all duration-150 hover:text-white pr-4 mb-4">Administrer cookie innstillinger</p></Link>
            <Link href=""><p className="cursor-pointer transition-all duration-150 hover:text-white">Vilkar og personvern</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = (props) => {
  const {
    logo,
    mainNav,
    burgerNav,
    themeColors,
    includeTransNav
  } = props

  const contextReducers = useSiteConfigUpdate()
  const isNavActive = useSiteConfig().isNavbarActive

  if (!mainNav || !burgerNav) {
    return
  }

  return (
    <>
      <nav className={(includeTransNav ? "transparent-navbar" : "") + " md:!bg-[unset] w-full h-[112px] xl:h-[176px] flex justify-between xl:justify-start items-center pl-5 lg:pl-12 pr-5 lg:pr-16 box-border overflow-hidden"} style={getStyles(themeColors, 'light')}>
        <Link href="/">
          <div className="w-[125px] h-[39px] cursor-pointer">
            <Logo fill={getFontColorValue(themeColors, 'light')} />
          </div>
        </Link>
        <ul className="hidden xl:flex items-center pl-[8.7%] py-10 w-full">
          {mainNav.map((navItem) => (
            <li key={navItem._key}
              className="p-3 pl-0 mr-8 relative group">
              <NavLink navItem={navItem} />
              <div className="absolute opacity-0 w-[0%] h-[2px] transition-all ease-in-out duration-500 left-0 bottom-0 group-hover:opacity-100 group-hover:w-full" style={{ backgroundColor: themeColors?.font }}></div>
            </li>
          ))}
        </ul>
        <button className="z-40 group hover:px-7 px-5 hover:py-9 py-7 rounded-full transition-[100%] duration-500 hover:-m-2" style={{ backgroundColor: themeColors?.accent }} onClick={() => {
          contextReducers.toggleNavbar()
        }}>
          <div className="w-[23px] h-[9px] relative navbar-button">
            <div className={"w-[23px] h-[2px] bg-black absolute top-0 left-0 transition-all origin-left " + (isNavActive ? "-top-[5px] left-1 rotate-45" : "")}></div>
            <div className={"w-[23px] h-[2px] bg-black absolute bottom-0 left-0 transition-all origin-left " + (isNavActive ? "-bottom-1 left-1 -rotate-45" : "")}></div>
          </div>
        </button>

        <BurgerNav logo={logo} themeColors={themeColors} burgerNav={burgerNav} />
      </nav>
    </>
  )
}

export default Navbar;
