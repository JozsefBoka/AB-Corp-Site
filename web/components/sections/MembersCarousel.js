import React from "react"
import { getStyles } from "../../utils/theme"
import { MemberCard } from "../small"
import { useKeenSlider } from "keen-slider/react"
import { useWindowSize, isMobileWidth } from "../../utils/hooks/windowResizeListener"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const MembersCarousel = (props) => {
    const {
        title,
        members,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const [isMobile, setIsMobile] = useState(false)

    const [width, height] = useWindowSize();
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free-snap",
        slides: { perView: "auto", spacing: 26 },
        initial: 0,
    })

    const accentColor = themeColors.accent

    let membersSectionDesktop = (
        <div className="grid md:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-10 mb-24">
            {members.map(member => <MemberCard key={member._id} {...member} underlineColor={accentColor} />)}
        </div>
    )

    let membersSectionMobile = (
        <div ref={sliderRef} className="keen-slider">
            {members.map(member => <div key={member._id} className="keen-slider__slide min-w-[305px]"><MemberCard {...member} underlineColor={accentColor} /></div>)}
        </div>
    )

    useEffect(() => {
        if (isMobileWidth(width)) {
            setIsMobile(true)
        }
    }, [width])

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className={"container " + (isMobile ? "pr-0" : "")}>
                <div ref={ref} className="section-padding" >
                    <p className="h2 uppercase mb-10 md:mb-24">{title}</p>

                    {isMobile ? membersSectionMobile : membersSectionDesktop}
                </div>
            </div>
        </div>
    )
}

export default MembersCarousel
