import CustomImage from "../../utils/imageBuilder";
import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const StorySection = (props) => {
    const {
        title,
        text,
        image,
        imagePosition,
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
                    <div className={"flex justify-center flex-col-reverse " + (imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row')}>
                        <div className={"md:w-[80%] xl:w-[55%] my-auto " + (imagePosition === 'left' ? 'md:pl-[55px] xl:pl-[157px]' : 'md:pr-[55px] xl:pr-[157px]')}>
                            <div className="h2 w-4/5 md:w-auto xl:leading-[60px] uppercase pt-[48px] md:pt-0 pb-[67px] md:pb-[77px]">
                                <PortableText value={title} components={getPortableTextComponents({ themeColors: themeColors })} />
                            </div>
                            <div className="2xl:pr-[46%]">
                                <PortableText value={text} components={getPortableTextComponents({ themeColors: themeColors })} />
                            </div>
                        </div>
                        <CustomImage image={image} options={{ desktop: { width: '683', height: '1025' } }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StorySection;
