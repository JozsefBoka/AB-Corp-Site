import CustomImage from "../../utils/imageBuilder"
import { getBackgroundColor, getFontColor, getFontColorValue, getStyles } from "../../utils/theme"
import { ArrowWest } from "../icons"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useRouter } from 'next/router'
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

const HeroBrandpage = (props) => {
    const {
        title,
        bgImage,
        brandLogo,
        themeColors,
        bgColor,
        navigation
    } = props

    const router = useRouter()

    // todo
    // link references dont show
    // add brand site link
    // add pdf download button should be uploaded from sanity

    const bgImageOptions = {
        desktop: {
            width: '1810',
            height: '1100'
        },
        tablet: {
            width: '1024',
            height: '732'
        },
        mobile: {
            width: '600',
            height: '942'
        }
    }

    const ref = useRef()
    useEffect(() => {
        gsap.fromTo(ref.current, { duration: 2, opacity: 0, x: 100 }, { opacity: 1, x: 0 })
    }, [])


    return (
        <div className="h-auto flex items-stretch" style={getBackgroundColor(themeColors, bgColor)}>
            <div className="w-[180px] hidden xl:flex items-center relative group cursor-pointer" style={getFontColor(themeColors, bgColor)} onClick={() => router.push('')}>
                <div className="brand-back-btn-overlay absolute top-0 left-0 w-full opacity-0 group-hover:opacity-10 transition-opacity ease-out duration-300 bg-slate-100"></div>
                <div className="pl-14">
                    <ArrowWest fill={getFontColorValue(themeColors, bgColor)} />
                </div>
            </div>
            <div className="relative">
                <div className="relative w-fit overflow-hidden">
                    <div className="absolute top-[2px] right-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-transparent z-10"></div>
                    <CustomImage image={bgImage} options={bgImageOptions} />
                </div>


                <div className="absolute bottom-0 left-0 w-full z-20">
                    <div ref={ref} className="pl-[20px] pr-[33px] lg:pr-0 md:pl-[50px] 2xl:pl-[70px] pb-[100px] md:pb-[123px] 2xl:pb-[163px]">
                        <div className="relative w-24 h-16">
                            <CustomImage image={brandLogo} />
                        </div>
                        <h1 className="max-w-[870px] pt-[30px] md:pt-[80px] 2xl:pt-[60px] text-[28px] md:text-[40px] xl:text-[60px] leading-[35px] md:leading-[50px] xl:leading-[80px] text-white uppercase">
                            <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                        </h1>
                    </div>
                    {navigation?.navItems?.length > 0 &&
                        (<div className="flex pt-[25px] pb-[30px] md:pt-[33px] md:pb-[36px] pl-[20px] md:pl-[130px] text-sm font-krona w-[100%] md:w-[85%] overflow-x-scroll overflow-y-hidden no-scrollbar" style={getStyles(themeColors, bgColor)}>
                            {navigation.navItems.map((navItem) => (
                                <a key={navItem._key} className="relative mr-[53px] pb-[10px] pr-[20px] last:mr-0 group text-[11px] whitespace-nowrap"
                                    href={navItem.link.internal ? navItem.link.internal.slug.current : navItem.link.external}>
                                    {navItem.label}
                                    <div className="absolute opacity-0 w-[0%] h-[2px] transition-all ease-in-out duration-500 left-0 bottom-0 group-hover:opacity-100 group-hover:w-full" style={{ backgroundColor: themeColors?.font }}></div>
                                </a>
                            ))}
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroBrandpage;
