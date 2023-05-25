import CustomImage from "../../utils/imageBuilder"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import PropTypes from 'prop-types'

/**
 * An animated image with zoom on hover and a link
 * @param {*} props 
 * @returns 
 */
const AnimatedImage = (props) => {
    const {
        image,
        imageSettings,
        link,
        hoverActive
    } = props

    // todo outside element leave gets triggered after this elements enter which causes the animation for leave to activeate
    useEffect(() => {
        if (hoverActive) {
            onMouseEnter()
        } else {
            onMouseLeave()
        }
    }, [hoverActive])

    const ref = useRef()

    const onMouseEnter = () => {
        gsap.to(ref.current, { scale: 1.1, duration: 0.5 })
    }

    const onMouseLeave = () => {
        gsap.to(ref.current, { scale: 1, duration: 0.5 })
    }

    let renderedImage = <CustomImage image={image} options={imageSettings} />
    if (link) {
        renderedImage = (
            <Link href={link}>
                <CustomImage image={image} options={imageSettings} />
            </Link>
        )
    }

    return (
        <div
            ref={ref}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            className="cursor-pointer"
        >
            {renderedImage}
        </div>
    )
}

AnimatedImage.propTypes = {
    link: PropTypes.string,
    image: PropTypes.object,
    imageSettings: PropTypes.object,
    hoverActive: PropTypes.bool,
}


export default AnimatedImage
