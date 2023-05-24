import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const TextBlockSplit = (props) => {
    const {
        title,
        textColOne,
        textColTwo,
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
                    <div className="md:pl-[40%]">
                        <h3 className="pb-[30px] uppercase">
                            <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                        </h3>
                        <div className="md:flex text-1 leading-8">
                            <div className="pb-[48px] md:pb-0 md:w-1/2 md:mr-10">
                                <PortableText value={textColOne} components={getPortableTextComponents()} />
                            </div>

                            <div className="md:w-1/2 md:mr-10">
                                <PortableText value={textColTwo} components={getPortableTextComponents()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextBlockSplit;
