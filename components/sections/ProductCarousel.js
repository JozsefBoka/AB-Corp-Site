import React, { useState, useRef, useEffect } from "react"
import CustomImage from "../../utils/imageBuilder"
import { getFontColorValue, getStyles } from "../../utils/theme"
import { useKeenSlider } from "keen-slider/react"
import { CarouselArrows } from "../small"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import { useWindowSize, isTabletWidth } from "../../utils/hooks/windowResizeListener"
import { SecondaryCarouselArrows } from "../small/CarouselArrows"

const InformationSection = (props) => {
    const {
        title,
        products,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

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

    const [width, height] = useWindowSize()
    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        if (isTabletWidth(width)) {
            setIsTablet(true)
        } else {
            setIsTablet(false)
        }
    }, [width])


    const imageSettings = {
        desktop: {
            width: '404',
            height: '404'
        }
    }

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container pr-0">
                <div ref={ref} className="section-padding relative">
                    <div className="flex justify-between items-center pb-[25px] pt-[113px]">
                        <h3 className="uppercase">{title}</h3>

                        {isTablet && loaded && instanceRef.current && (
                            <SecondaryCarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={getFontColorValue(themeColors, bgColor)} />
                        )}
                    </div>

                    {!isTablet && loaded && instanceRef.current && (
                        <CarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={themeColors.accent} />
                    )}

                    <div ref={sliderRef} className="keen-slider pb-[163px]">
                        {products.map(product => (
                            <a href={product.url} key={product._key} className="keen-slider__slide min-w-[305px] max-w-[305px] xl:min-w-[474px] xl:max-w-[474px] bg-white px-[26px] xl:px-[35px] pt-[69px] xl:pt-[90px] pb-[55px] xl:pb-[62px]">
                                <CustomImage image={product.image} options={imageSettings} />
                                <p className="uppercase text-black font-krona pt-[11px] xl:pt-[51px] pl-[19px] xl:pl-[35px]">{product.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection;
