import { getFontColorValue, getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { Quote } from "../icons"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const QuoteSection = (props) => {
    const {
        text,
        signature,
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
                <div ref={ref} className="section-padding" >
                    <div className="md:pl-[40%] relative">
                        <div className="max-w-[754px] pt-[52px] px-20 pr-[20px] md:pr-[20px] relative" style={{
                            borderTop: '5px solid ' + (bgColor === 'dark' ? 'white' : themeColors?.font)
                        }}>
                            <div className="absolute top-[57px] left-0"><Quote fill={themeColors.accent} /></div>
                            <div className="font-krona text-[20px] xl:text-[30px] leading-[32px] md:leading-[46px] pb-[94px]">
                                <PortableText value={text} components={getPortableTextComponents()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteSection;
