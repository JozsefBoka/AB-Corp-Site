import CustomImage from "../../utils/imageBuilder"
import { getStyles } from "../../utils/theme"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import Link from "next/link"
import { getLink } from "../../utils/urls"

const Hero = (props) => {
    const {
        title,
        tagline,
        image,
        logos,
        themeColors,
        bgColor
    } = props

    const wrapperRef = useRef()
    const q = gsap.utils.selector(wrapperRef)

    useEffect(() => {
        gsap.fromTo(q('.title'), { duration: 2, opacity: 0, x: 100 }, { opacity: 1, x: 0 })
        gsap.fromTo(q('.logos'), { duration: 2, opacity: 0, x: 100 }, { opacity: 1, x: 0 })
    }, [q])

    const imageSettings = {
        desktop: { width: '1272', height: '1004' },
        tablet: { width: '1024', height: '903' },
        mobile: { width: '600', height: '500' },
        styles: 'object-none object-center h-full w-full'
    }

    return (
        <div ref={wrapperRef} className='relative w-full md:calc-hero-height flex flex-col justify-center box-border overflow-hidden -mb-32 md:mb-0' style={getStyles(themeColors, bgColor)}>
            <div className="static md:absolute max-h-screen h-[500px] md:h-screen md:w-4/6 right-0 top-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-r after:from-[rgba(0,0,0,0.7)]">
                <CustomImage image={image} options={imageSettings} />
            </div>

            <div className="relative -top-32 md:top-0 md:absolute h-full w-full">
                <div className='z-10 md:ml-24 xl:ml-48 px-5 pt-11 pb-9 md:p-0 md:absolute md:h-full md:flex md:justify-center md:flex-col max-w-full md:max-w-[80%] xl:max-w-[60%] box-content uppercase'>
                    <h1 className='title sm:!text-[50px] xl:!text-[70px]'><PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} /></h1>
                </div>

                <div className='logos static md:absolute z-10 bottom-0 right-0 flex flex-wrap align-middle pb-3'>
                    {logos.map(logo => {
                        let link = getLink(logo.link)

                        let image = <CustomImage image={logo.image} options={{ styles: 'mx-auto' }} />
                        let imageWithLink = (
                            <Link href={getLink(logo.link)}>
                                <div className="cursor-pointer mx-auto">
                                    {image}
                                </div>
                            </Link>
                        )
                        

                        return (
                            <div className='self-center pb-5 px-5 w-1/3 md:w-auto box-border' key={logo._key}>
                                {link ? imageWithLink : image}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero;
