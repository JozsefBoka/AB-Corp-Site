import { useState, useEffect, useRef } from 'react'
import CustomImage from "../../utils/imageBuilder"
import { useKeenSlider } from "keen-slider/react"
import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"


// todo should be a carousel on mobile (probably tablet too)

const ImageGrid = (props) => {
    const {
        title,
        images,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const leftImages = images.reduce((acc, image, index) => {
        if (image && index < 2) {
            acc.push(image)
            return acc
        }
        return acc
    }, [])

    const rightImages = images.reduce((acc, image, index) => {
        if (image && index > 1) {
            acc.push(image)
            return acc
        }
        return acc
    }, [loaded])

    // image sizes
    const imageUpperLeft = {
        desktop: {
            width: '544',
            height: '642'
        }
    }

    const imageDownLeft = {
        desktop: {
            width: '544',
            height: '816'
        }
    }

    const imageUpperRight = {
        desktop: {
            width: '824',
            height: '974'
        }
    }

    const imageDownRight = {
        desktop: {
            width: '824',
            height: '549'
        }
    }

    const [loaded, setLoaded] = useState([true, true])
    const [currentSlide, setCurrentSlide] = useState(0)

    const [sliderRef] = useKeenSlider({
        animationEnded(s) {
            setCurrentSlide(s.track.details.rel)
        },
        initial: 0,
        slides: { perView: "auto", spacing: 11 }
    })

    useEffect(() => {
        const newLoaded = [...loaded]
        newLoaded[currentSlide] = true
        newLoaded[currentSlide + 1] = true
        setLoaded(newLoaded)
    }, [currentSlide, loaded])

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding" >
                    <h3 className="leading-[40px] uppercase pb-[48px] md:pb-[77px]">
                        <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                    </h3>

                    <div className="hidden md:flex">
                        <div className="pr-[10%]">
                            {leftImages.map((image, index) => {
                                if (index == 0) {
                                    return <div key={image._key} className="pb-[100px]"><CustomImage image={image} options={imageUpperLeft} /></div>
                                }

                                return <div key={image._key}><CustomImage image={image} options={imageDownLeft} /></div>
                            })}
                        </div>
                        <div>
                            {rightImages.map((image, index) => {
                                if (index == 0) {
                                    return <div key={image._key} className="pb-[100px]"><CustomImage image={image} options={imageUpperRight} /></div>
                                }

                                return <div key={image._key}><CustomImage image={image} options={imageDownRight} /></div>
                            })}
                        </div>
                    </div>

                    <div className='md:hidden'>
                        <div ref={sliderRef} className="keen-slider">
                            {images.map((image, idx) => <div key={image._key} className="keen-slider__slide lazy__slide" style={{ maxWidth: 304, minWidth: 304 }}><CustomImage image={loaded[idx] ? image : ''} options={{ desktop: { width: '304', height: '359' } }} /></div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageGrid;
