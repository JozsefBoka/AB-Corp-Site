import CustomImage from "../../utils/imageBuilder"
import { getStyles } from "../../utils/theme"
import PercentageCircle from '../small/PercentageCircle'
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import gsap from 'gsap'

const ProgressSection = (props) => {
    const {
        themeColors,
        bgColor,
        image,
        imageTiles,
        title,
        progressContainers,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container pr-0 lg:pr-[unset]">
                <div ref={ref} className="section-padding" >
                    <div className="relative lg:pl-[40%] overflow-hidden py-20">
                        {image &&
                            <div className="absolute top-20 left-0 hidden xl:block mr-0 xl:mr-[8%]">
                                <CustomImage image={image} options={{ desktop: { width: '406', height: '478' } }} />
                            </div>
                        }

                        {!!imageTiles && (
                            <div className="flex pb-[15%] overflow-x-scroll overflow-y-hidden no-scrollbar">
                                {imageTiles?.map(tile => (
                                    <div key={tile._key} className="w-[305px] md:w-full flex flex-col shrink-0 md:shrink max-w-[305px] sm:max-w-[420px] pr-3 md:first:pr-[7%] md:last:pl-[7%]">
                                        <p className="h3 uppercase pb-6">{tile.title}</p>
                                        <div className=" pb-12">
                                            <CustomImage image={tile.image} options={{ desktop: { width: '404', height: '270' } }} />
                                        </div>
                                        <PortableText value={tile.text} components={getPortableTextComponents()} />
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col">
                            <h3 className="mb-4 md:mb-8 text-[28px] md:text-[48px] w-[80%] 2xl:w-[61%] 3xl:w-[54%] leading-[48px] md:leading-[68px] uppercase">
                                {title}
                            </h3>
                            <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
                                {progressContainers.map(proggressBox => {
                                    const boxData = { ...proggressBox }
                                    return <ProgressBox key={proggressBox._key} {...boxData} themeColors={themeColors} bgColor={bgColor} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProgressBox = (props) => {
    const {
        percentage,
        borderColor,
        year,
        title,
        description,
        themeColors,
        bgColor,
        _key
    } = props

    const ref = useRef()
    const q = gsap.utils.selector(ref)
    const [animatedPercent, setAnimatedPercent] = useState(0)

    useEffect(() => {
        let aniPercent = { value: 0, setter: setAnimatedPercent }
        const tl = gsap.timeline({scrollTrigger: ref.current})
        tl.counter(aniPercent, {
            end: percentage,
            duration: 1
        })
    }, [percentage])

    return (
        <div ref={ref} className="w-full first:pr-[7%] last:pl-[7%] max-w-[270px] sm:max-w-[420px] shrink-0 md:shrink">
            <div key={_key} className="flex flex-col">
                <div className="my-12">
                    <div className="progress-circle">
                        <PercentageCircle
                            percent={animatedPercent}
                            color={borderColor}
                            themeColors={themeColors}
                            bgColor={bgColor}
                        >
                            <p className="text-[11px] text-dusty-gray">{year}</p>
                            <p className="h2 text-[46px] pb-[15px]">{animatedPercent}%</p>
                        </PercentageCircle>
                    </div>
                </div>
                <h3 className="my-6 max-w-none 2xl:max-w-[80%] uppercase">{title}</h3>
                <p className="text-lg text-[#acacac]">{description}</p>
            </div>
        </div>
    );
}

export default ProgressSection