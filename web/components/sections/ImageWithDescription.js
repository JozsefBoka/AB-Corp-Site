import CustomImage from "../../utils/imageBuilder"
import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const ImageWithDescription = (props) => {
    const {
        image,
        description,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const imageSettings = {
        desktop: { width: '1524', height: '1017' }
    }

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding" >
                    <CustomImage image={image} options={imageSettings} />
                    {description &&
                        (
                            <div className="md:ml-[25%] py-[18px] md:pt-[28px] md:pb-[32px]" style={{
                                borderBottom: '1px solid ' + (bgColor === 'dark' ? 'white' : themeColors?.font)
                            }}>
                                <div className="md:pr-[15%] text-[13px] leading-5">
                                    <PortableText value={description} components={getPortableTextComponents()} />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ImageWithDescription;
