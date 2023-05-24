import { getStyles } from "../../utils/theme"
import Youtube from 'react-youtube'
import getYoutubeId from 'get-youtube-id'
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const VideoBanner = (props) => {
    const {
        title,
        url,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding">
                    <h3 className="uppercase pb-[48px] xl:pb-[64px]">
                        <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                    </h3>
                    <div className=" float-none clear-both w-full relative pb-[56.25%] pt-[25px] h-0">
                        <Youtube videoId={getYoutubeId(url)} iframeClassName="absolute top-0 left-0 w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoBanner;
