import React from "react"
import { getStyles } from "../../utils/theme"
import CustomImage, { Icon } from "../../utils/imageBuilder"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import Link from "next/link"
import { getLink } from "../../utils/urls"

const IconRow = (props) => {
    const {
        themeColors,
        bgColor,
        icons,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    icons.map(icon => {
        console.log(icon.image)
        console.log(icon.link)
    })

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding" >
                    <div className="md:pl-[40%]">
                        <div className="w-full flex flex-wrap align-middle pb-3">
                            {icons.map(icon => {
                                return (
                                    <div className="self-center pb-5 px-5 w-1/3 basis-1/3 min-h-[40px] mb-8 lg:w-auto box-border lg:first:pl-0 lg:last:pr-0 relative cursor-pointer" key={icon._key}>
                                        <Link href={getLink(icon.link)}>
                                            <div>
                                                <Icon image={icon.image} options={{ styles: "mx-auto" }} />
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconRow
