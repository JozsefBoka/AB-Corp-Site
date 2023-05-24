import React, { useState, useEffect, useRef } from "react"
import CustomImage from "../../utils/imageBuilder"
import { useKeenSlider } from "keen-slider/react"
import { CarouselArrows } from "../small"
import { getBackgroundColor, getFontColor, getFontColorValue } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import { useWindowSize, isTabletWidth } from "../../utils/hooks/windowResizeListener"
import { SecondaryCarouselArrows } from "../small/CarouselArrows"

const GalleryCarousel = (props) => {
    const {
        title,
        carouselItems,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const [width, height] = useWindowSize()
    const [isTablet, setIsTablet] = useState(false)
    const ref = useRef()

    useEffect(() => {
        if (isTabletWidth(width)) {
            setIsTablet(true)
        } else {
            setIsTablet(false)
        }
    }, [width])

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const imageSettings = {
        desktop: { width: '1372', height: '915' },
        tablet: { width: '665', height: '443' },
        mobile: { width: '350', height: '520' }
    }

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free-snap",
        slides: { perView: "auto", spacing: 16 },
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div style={getBackgroundColor(themeColors, bgColor)}>
            <div className={"container pr-0 " + (isTablet ? "pl-0" : "" )}>
                <div ref={ref} className="section-padding relative">
                    <div className="flex justify-between items-center pb-[25px] pr-5 md:pr-0 ">
                        <h4 className="uppercase pl-5 lg:pl-0" style={getFontColor(themeColors, bgColor)}>
                            <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                        </h4>

                        {isTablet && loaded && instanceRef.current && (
                            <SecondaryCarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={getFontColorValue(themeColors, bgColor)} />
                        )}
                    </div>

                    {!isTablet && loaded && instanceRef.current && (
                        <CarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={themeColors.accent} />
                    )}

                    <div className="md:mr-[-200px] relative">
                        <div ref={sliderRef} className="keen-slider">
                            {carouselItems.map(image => <div key={image._key} className="keen-slider__slide  max-w-[320px] min-w-[320px] sm:max-w-[665px] sm:min-w-[665px] lg:max-w-[950px] lg:min-w-[950px] xl:max-w-[1024px] xl:min-w-[1024px] 2xl:max-w-[1372px] 2xl:min-w-[1372px]"><CustomImage image={image} options={imageSettings} /></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryCarousel;
