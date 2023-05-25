import React, { useState, useEffect, useRef } from "react"
import CustomImage from "../../utils/imageBuilder"
import { useKeenSlider } from "keen-slider/react"
import { getFontColorValue, getStyles } from "../../utils/theme"
import { SecondaryCarouselArrows } from "../small/CarouselArrows"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const ProgressCarousel = props => {
    const {
        themeColors,
        bgColor,
        title,
        carouselItems,
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
        slides: { perView: 1, spacing: 8 },
        initial: 0,
        breakpoints: {
            "(max-width: 680px)": {
                slides: { perView: 1.2, spacing: 48 },
            }
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container progress-container pr-0 lg:pr-[unset]">
                <div ref={ref} className="section-padding" >
                    <h2 className="block md:hidden text-[28px] md:text-[44px] lg:mb-28">{title}</h2>
                    <div ref={sliderRef} className="keen-slider">
                        {carouselItems.map((slideObject, index) =>
                            <ProggressCarosuelItem key={slideObject._key} data={{ ...props, slideObject, index }} />
                        )}
                    </div>

                    <div className="hidden sm:flex justify-between pr-[8%] align-center pt-16">
                        <ul className="flex gap-8 text-[#acacac] text-[14px]">
                            {carouselItems.map((slideObject, index) =>
                                <li
                                    key={slideObject._key}
                                    className="cursor-pointer"
                                    style={{
                                        color: currentSlide === index && themeColors.font,
                                        fontWeight: currentSlide === index && 'bold'
                                    }}
                                    onClick={e => e.stopPropagation() || instanceRef.current?.moveToIdx(index)}
                                >
                                    {slideObject.year}
                                </li>
                            )}
                        </ul>

                        {loaded && instanceRef.current && (
                            <SecondaryCarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={getFontColorValue(themeColors, bgColor)} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProggressCarosuelItem = props => {
    const {
        slideObject,
        index,
        title,
    } = props.data

    const imageSettings = {
        desktop: { width: '840', height: '560' },
        tablet: { width: '297', height: '198' },
        styles: 'rounded-xl'
    }    

    return (
        <div key={slideObject._key} className="keen-slider__slide pt-14 md:pt-32 pb-10 pr-[7%] lg:pr-[8%]">
            <div className="flex">
                <div className="flex flex-col md:w-[40%] w-full ml-[3%] mr-[5%] sm:ml-0 lg:mr-[12%]">
                    <h2 className="hidden md:block uppercase lg:mb-28 mb-16">{title}</h2>
                    <div className={`mobile-image block md:ml-0 ml-[2%] md:hidden rounded-full mb-10 ${index % 2 === 0 ? 'rotate-y-5' : '-rotate-y-5'}`} >
                        <CustomImage image={slideObject.image} options={imageSettings} />
                    </div>
                    <h4 className="text-[16px] md:text-[28px] lg:mb-14 mb-6 mb-2 md:mb-12">{slideObject.year}</h4>
                    <p className="max-w-[90%]">{slideObject.description}</p>
                </div>

                <div className={`desktop-image hidden md:block rounded-full ${index % 2 === 0 ? 'rotate-y-5' : '-rotate-y-5'}`} >
                    <CustomImage image={slideObject.image} options={imageSettings} />
                </div>
            </div>
        </div>
    )
}

export default ProgressCarousel;