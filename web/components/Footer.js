import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getBackgroundColor, getFontColor, getStyles } from "../utils/theme"
import { useSiteConfig, useSiteConfigUpdate } from "./context/ConfigContext"
import { urlFor } from "../utils/imageBuilder";
import gsap from 'gsap';
import Image from 'next/image'
import { Logo } from "./icons";

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
                <p className="cursor-pointer font-krona" onClick={onClick} style={style}>
                    {navItem.name}
                </p>
            </Link>
        </div>
    )
}

const SecondLevelItems = ({ navItem }) => {
    if (navItem?.secondLevelItems) {
        return (
            <div className="h2 second-level mb-24 lg:mb-0">
                <p className="lg:hidden text-sm text-white pb-20">{navItem.name}</p>
                <div className="">
                    {navItem.secondLevelItems.map(item => (
                        <NavLink key={'second-lvl-' + item._key} navItem={item} classNames={'opacity-60 hover:opacity-100 hover:pl-10 transition-all pb-4 lg:uppercase'} />
                    ))}
                </div>
            </div>
        )
    }

    return ""
}

const Footer = (props) => {
    const {
        logo,
        mainNav,
        burgerNav,
        themeColors
    } = props

    const secondLeveItems = burgerNav?.navItems?.find((navItem) => navItem.secondLevelItems)

    return (
        <div className="flex flex-col justify-between w-full h-screen bg-[#242424] text-white py-14">
            <div className="container relative flex justify-start lg:justify-between flex-col lg:flex-row mb-24">
                <SecondLevelItems navItem={secondLeveItems} />

                <div className="flex flex-col lg:items-end">
                    {burgerNav?.navItems?.map((navItem) => (
                        <NavLink key={navItem._key} navItem={navItem} classNames={'opacity-60 hover:opacity-100'} />
                    ))}

                    <div className="flex pt-10">
                        {burgerNav?.socialItems?.map((socialItem) => (
                            <NavLink key={socialItem._key} navItem={socialItem} classNames={'first:pl-0 pl-[60px] text-[13px]'} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="">
                    <Link href="/">
                        <div className="cursor-pointer max-w-[125px] w-[125px] h-[39px]">
                            <Logo fill='#707070' />
                        </div>
                    </Link>
                </div>
                <div className="flex justify-between border-t-[1px] border-solid border-[#6B6B6B] pt-[27px] mt-[27px] text-xs text-[#707070]">
                    <p className="">Copyright © {new Date().getFullYear()} Active Brands</p>

                    {/* todo add link in studio */}
                    <div className="flex flex-col lg:flex-row">
                        <Link href=""><p className="cursor-pointer transition-all duration-150 hover:text-white pr-4">Administrer cookie innstillinger</p></Link>
                        <Link href=""><p className="cursor-pointer transition-all duration-150 hover:text-white">Vilkar og personvern</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
