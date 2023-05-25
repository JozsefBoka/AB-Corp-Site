import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import client from '../client'
import PropTypes from 'prop-types'
import { useWindowSize, isTabletWidth, isMobileWidth, isSmallMobileWidth } from "./hooks/windowResizeListener"
import { useEffect, useState } from 'react'

export function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

/**
 * image needs desktop.width and height or it uses the layout="fill" property for next/Image and becomes absolute width 100% width, height
 * @param {*} image 
 * @param {*} options 
 * @returns 
 */
const CustomImage = ({ image, options = {} }) => {
    if (!image?.asset) {
        return
    }

    const {
        styles,
        desktop = {},
        mobile = {},
        tablet = {}
    } = options

    const [isLoading, setLoading] = useState(true);
    const [width, height] = useWindowSize();

    const getImageSize = () => {
        if (isSmallMobileWidth() && mobile.width) {
            setImageSize({ width: mobile.width, height: mobile.height })
        } else if (isTabletWidth() && tablet.width) {
            setImageSize({ width: tablet.width, height: tablet.height })
        } else if (desktop.width) {
            setImageSize({ width: desktop.width, height: desktop.height })
        }
    }

    const [imageSize, setImageSize] = useState({});

    useEffect(() => {
        getImageSize()
    }, [])

    useEffect(() => {
        getImageSize()
    }, [width])

    const getImageComponent = (width, height) => {
        const imageUrl = urlFor(image).auto('format').width(width).height(height).url()
        if (width && height) {
            return <Image src={imageUrl} width={+width} height={+height}
                className={styles +
                    ' duration-700 ease-in-out ' + (
                        isLoading
                            ? 'grayscale blur-2xl scale-110 bg-slate-300'
                            : 'grayscale-0 blur-0 scale-100'
                    )
                }
                onLoadingComplete={() => setLoading(false)}
            />
        } else {
            return <Image src={imageUrl} layout="fill"
                className={styles +
                    ' duration-700 ease-in-out ' +
                    (isLoading
                        ? 'grayscale blur-2xl scale-110 bg-slate-300'
                        : 'grayscale-0 blur-0 scale-100'
                    )
                }
                onLoadingComplete={() => setLoading(false)}
            />
        }
    }

    // todo look into srcset for next/Image
    if (imageSize.width) {
        return getImageComponent(imageSize.width, imageSize.height)
    }

    return <div></div>
}

CustomImage.propTypes = {
    image: PropTypes.object,
    options: PropTypes.shape({
        styles: PropTypes.string,
        desktop: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number
        }),
        mobile: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number
        }),
        tablet: PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number
        })
    })
}

export const Icon = ({ image, options = {} }) => {
    if (!image?.asset) {
        return
    }

    const {
        styles,
        width,
        height,
    } = options

    const imageUrl = urlFor(image).auto('format').width(width).height(height).url()

    if (width && height) {
        return <Image src={imageUrl} width={desktop.width} height={desktop.height} className={styles} />
    }

    return <Image src={imageUrl} layout="fill" className={styles} />
}

export default CustomImage
