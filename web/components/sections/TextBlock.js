import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const TextBlock = (props) => {
    const {
        text,
        addPaddingLeft,
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
                    <div className={addPaddingLeft ? "md:pl-[40%]" : ""}>
                        <div className="text-1 leading-8 pb-[48px] md:pb-0">
                            <PortableText value={text} components={getPortableTextComponents({ themeColors: themeColors })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBlock;
