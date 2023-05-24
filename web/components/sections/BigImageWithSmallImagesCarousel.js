import CustomImage from "../../utils/imageBuilder"
import ImageTile from "../ImageTile"
import { useKeenSlider } from "keen-slider/react"
import { getFontColorValue, getStyles } from "../../utils/theme"
import { PrimaryButton } from "../small"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import Link from "next/link"

const BrandsList = (props) => {
    const {
        heading,
        bigImageTile,
        carouselTiles,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const [sliderRef] = useKeenSlider({
        breakpoints: {

            '(min-width: 768px)': {
                slides: { perView: 2, spacing: 50 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 3, spacing: 96 },
            }
        },
        mode: 'free-snap',
        slides: { perView: 'auto' }
    })

    const bigImageOptions = {
        desktop: { width: '1525', height: '972' },
        mobile: { width: '640', height: '830' }
    }

    const smallImageOptions = {
        desktop: { width: '404', height: '270' },
        mobile: { width: '305', height: '204' },
    }

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
        <div className='w-full' style={getStyles(themeColors, bgColor)}>
            <div className='container relative max-w-screen-2xl w-full overflow-hidden'>
                <div ref={ref} className="section-padding" >
                    <h1 className="uppercase">{heading}</h1>

                    <Link href={bigImageTile.btnLink}>
                        <div className="relative mt-[131px] mb-[60px] md:mb-[100px] mx-[-20px] md:mx-0 cursor-pointer"
                            onMouseEnter={() => {
                                triggerRippleMouseEnter()
                            }}

                            onMouseLeave={() => {
                                triggerRippleMouseLeave()
                            }}
                        >
                            <div className="relative w-fit overflow-hidden">
                                <div className="absolute top-[2px] right-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-transparent z-10"></div>
                                <CustomImage image={bigImageTile.bgImage} options={bigImageOptions} />
                            </div>
                            <div className="absolute flex justify-between flex-col top-0 left-0 w-full h-full pt-[34px] md:pt-[85px] pl-[20px] md:pl-[70px] pr-[55px] md:pr-[64px] pb-[38px] md:pb-16">
                                <p className="mb-auto uppercase text-[10px]">{bigImageTile.smallText}</p>
                                <h6 className="text-2xl xl:text-4xl uppercase mb-4 md:mb-11 z-10">{bigImageTile.mainText}</h6>
                                <PrimaryButton link={bigImageTile.btnLink} content="Les mer" accentColor={themeColors.accent} fontColor={getFontColorValue(themeColors, bgColor)} propRef={btnRef} />
                            </div>
                        </div>
                    </Link>

                    <div className="keen-slider-image-with-carousel -m-5">
                        <div ref={sliderRef} className='keen-slider'>
                            {carouselTiles.map(tile => {
                                return <ImageTile {...tile} category="" imageOptions={smallImageOptions} classNames={'keen-slider__slide p-[20px] max-w-[305px] min-w-[305px] md:max-w-[420px] md:min-w-[420px]'} key={tile._key} themeColors={themeColors} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandsList;
