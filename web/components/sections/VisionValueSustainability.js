import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { getFontColorValue, getStyles } from "../../utils/theme"
import { PrimaryButton } from "../small"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import gsap from 'gsap'
import AnimatedImage from "../small/AnimatedImage"
import Link from "next/link"

const VisionValueSustainabilityCard = (props) => {
    const {
        cardImage,
        cardTitle,
        cardText,
        btnLink,
        themeColors,
        bgColor,
        classNames
    } = props

    const cardImageSettings = {
        desktop: { width: '615', height: '411' },
        styles: ['ml-auto']
    }

    const ref = useRef()
    // const q = gsap.utils.selector(ref)
    // useEffect(() => {
    //     const tl = gsap.timeline()
    //     tl.set(q('img'), {y: 50})
    //     tl.to(q('img'), {
    //         y: -100,
    //         scrollTrigger: {
    //             trigger: ref.current,
    //             scrub: 0.5,
    //         }
    //     })
    // })

    const [hoverActive, setHoverActive] = useState(false)

    const btnRef = useRef()

    const triggerRippleMouseEnter = () => {
        const event = new MouseEvent('mouseenter', {
            view: window,
            bubbles: true,
            cancelable: true
        })

        btnRef?.current?.dispatchEvent(event)
    }

    const triggerRippleMouseLeave = () => {
        const event = new MouseEvent('mouseleave', {
            view: window,
            bubbles: true,
            cancelable: true
        })

        btnRef?.current?.dispatchEvent(event)
    }

    return (
        <div ref={ref} className={"relative mt-[120px] md:mt-[200px] max-w-[684px] w-full " + classNames}>
            <Link href={btnLink}>
                <div className="cursor-pointer"
                    onMouseEnter={() => {
                        triggerRippleMouseEnter()
                    }}

                    onMouseLeave={() => {
                        triggerRippleMouseLeave()
                    }}
                >
                    <p className="uppercase text-xs text-dusty-gray mb-7">{cardTitle}</p>
                    <div className="flex justify-center ml-[-20px] mr-[-20px] md:ml-10 md:mr-0">
                        <AnimatedImage link={btnLink} image={cardImage} imageSettings={cardImageSettings} hoverActive={hoverActive} />
                    </div>

                    <div className="absolute bottom-[-100px] md:bottom-[-20px] left-0 z-10"
                        onMouseEnter={() => {
                            setHoverActive(true)
                        }}

                        onMouseLeave={() => {
                            setHoverActive(false)
                        }}
                    >
                        <div className="flex justify-end flex-col h-full pr-6">
                            <p className="md:w-1/2 text-2xl h3 uppercase">{cardText}</p>
                        </div>
                        <div className="mr-[5%]">
                            <PrimaryButton link={btnLink} accentColor={themeColors.accent} fontColor={getFontColorValue(themeColors, bgColor)} propRef={btnRef} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const VisionValueSustainability = (props) => {
    const {
        header,
        mainText,
        visionValueSustainabilityCards,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const card1 = visionValueSustainabilityCards[0]
    const card2 = visionValueSustainabilityCards[1]

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="w-full section-padding" >
                    <div className="w-full">
                        <h2 className="h1 md:w-[87%] uppercase mb-24">
                            {header}
                        </h2>
                    </div>

                    <div className="w-full md:flex">
                        <div className="mb-[60px] md:mb-0 md:w-1/2">
                            <VisionValueSustainabilityCard {...card1} themeColors={themeColors} bgColor={bgColor} key={card1._key} />
                        </div>

                        <div className="md:w-1/2">
                            <div className="hidden md:flex w-auto">
                                <PortableText value={mainText} components={getPortableTextComponents()} />
                            </div>

                            <div className="flex w-full">
                                <VisionValueSustainabilityCard {...card2} themeColors={themeColors} bgColor={bgColor} key={card2._key} classNames={"mt-[120px] md:mt-[260px]"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionValueSustainability;
