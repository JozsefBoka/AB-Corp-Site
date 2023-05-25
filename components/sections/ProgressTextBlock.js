import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useKeenSlider } from "keen-slider/react"
import { useWindowSize, isMobileWidth } from "../../utils/hooks/windowResizeListener"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import gsap from 'gsap'

const ProgressSection = (props) => {
    const {
        themeColors,
        bgColor,
        title,
        textBlocks,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const [isMobile, setIsMobile] = useState(false)
    const [width, height] = useWindowSize();

    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free-snap",
        slides: { perView: "auto", spacing: 22 },
        initial: 0,
    })

    useEffect(() => {
        if (isMobileWidth(width)) {
            setIsMobile(true)
        }
    }, [width])

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className={"container " + (isMobile ? "pr-0" : "pr-[20px]")}>
                <div ref={ref} className="section-padding" >
                    <div className="lg:pl-[40%]">
                        <h3 className="uppercase pb-[60px] md:pb-[72px]">{title}</h3>
                        <div {...(isMobile ? { ref: sliderRef } : {})} className={isMobile ? "keen-slider" : "flex flex-wrap"} >
                            {textBlocks.map(block => (
                                <PorgressTextBlock key={block._key} width={width} {...block} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PorgressTextBlock = (props) => {
    const {
        smallText,
        title,
        text,
        width
    } = props

    const ref = useRef()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (isMobileWidth(width)) {
            setIsMobile(true)
        }
    }, [width])

    return (
        <div ref={ref} className={"w-1/2 mb-32 md:even:pl-[10%] md:odd:pr-[10%] " + (isMobile && "keen-slider__slide")} style={(isMobile ? { maxWidth: 270, minWidth: 270 } : {})}>
            <p className="uppercase text-sm text-dusty-gray pb-3">{smallText}</p>
            <h4 className="h2 pb-9">{title}</h4>
            <PortableText value={text} components={getPortableTextComponents()} />
        </div>
    )
}

export default ProgressSection