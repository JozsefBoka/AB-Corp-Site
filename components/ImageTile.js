import CustomImage from "../utils/imageBuilder"
import { isValidDate, monthNames } from "../utils/dateHelpers"
import { PrimaryButton } from "./small"
import Link from "next/link"
import { useRef } from "react"
import { gsap } from "gsap"
import AnimatedImage from "./small/AnimatedImage"
import { getFontColorValue } from "../utils/theme"

const ImageTile = (props) => {
    const {
        previewImage,
        title,
        publishDate,
        btnLink,
        category,
        classNames,
        themeColors,
        imageOptions = {desktop: { width: '404', height: '270' }}
    } = props

    const date = new Date(publishDate)
    let month, year
    if (isValidDate(date)) {
        month = monthNames[date.getMonth()]
        year = date.getFullYear()
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
        <div className={'w-full max-w-[404px] min-w-[404px] ' + classNames}>
            <div>
                {category && <div className="text-dusty-gray uppercase text-[11px] pb-[23px] md:pb-[31px]">{category}</div>}
                <div
                    onMouseEnter={() => {
                        triggerRippleMouseEnter()
                    }}

                    onMouseLeave={() => {
                        triggerRippleMouseLeave()
                    }}
                >
                    <AnimatedImage link={btnLink} image={previewImage} imageSettings={imageOptions} />
                </div>
                <div className='w-full pt-10'>
                    <p className='pb-20 text-base uppercase font-krona'>
                        {btnLink ? <Link href={btnLink}>{title}</Link> : title}
                    </p>
                    <div className='flex justify-between items-center'>
                        {month && year && (
                            <p className="uppercase text-dusty-gray text-xs font-krona">{month} {year}</p>
                        )}
                        <PrimaryButton link={btnLink} content="" accentColor={themeColors.accent} fontColor={getFontColorValue(themeColors, 'light')} propRef={btnRef} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageTile