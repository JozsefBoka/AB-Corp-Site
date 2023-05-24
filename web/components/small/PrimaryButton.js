import React, { useState, useEffect, useRef } from "react"
import Link from "next/dist/client/link"
import { ArrowEast } from "../icons"
import { gsap } from "gsap"
import { hexToRgb } from "../../utils/colorConvert"
import PropTypes from 'prop-types'


// todo recreate with refForwards
const PrimaryButton = (props) => {
    const {
        link,
        content,
        fontColor,
        accentColor,
        propRef
    } = props

    const [stateFontColor,setStateFontColor] = useState({color: hexToRgb(fontColor, true)})

    let defaultRef = useRef()
    if (propRef) {
        defaultRef = propRef
    }

    useEffect(() => {
        gsap.set(defaultRef.current, { '--accent-color': accentColor, duration: 0 })
    })

    useEffect(() => {
        defaultRef.current?.addEventListener('mouseenter', () => {
            gsap.to(defaultRef.current, { '--clip-path': 'circle(130% at 0% 60%)', duration: 0.5 })
            gsap.to(defaultRef.current, { color: 'rgb(0,0,0)', duration: 0.2 })
            setStateFontColor({color: 'rgb(0,0,0)'})

        })
        defaultRef.current?.addEventListener('mouseleave', () => {
            gsap.to(defaultRef.current, { '--clip-path': 'circle(0% at 0% 60%)', duration: 0.5 })
            gsap.to(defaultRef.current, { color: stateFontColor.color, duration: 0.2 })
            setStateFontColor({color: hexToRgb(fontColor, true)})
        })
    }, [fontColor, stateFontColor])
    


    if (link) {
        return (
            <Link href={link}>
                <div ref={defaultRef} className="cursor-pointer primary-button relative block w-fit px-[30px] py-[15px] mr-3 rounded-[100%] ml-auto overflow-hidden z-20">
                    <div className="z-10 font-krona text-xs">
                        {!!content ? content : <ArrowEast fill={stateFontColor.color} />}
                    </div>
                </div>
            </Link>
        )
    }
}

PrimaryButton.PropTypes = {
    link: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    fontColor: PropTypes.string,
    accentColor: PropTypes.string,
    propRef: PropTypes.string,
}

export default PrimaryButton
