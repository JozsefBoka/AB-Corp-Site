import React from 'react'
import Link from "next/link";
import PropTypes from 'prop-types'

const UnderlinedButton = (props) => {
    const {
        type,
        link,
        onClick,
        text,
        classes,
        color,
        active
    } = props

    let result;

    if (type === "button") {
        result = (
            <button className={classes + " p-3 pl-0 mr-8 relative group"} onClick={onClick}>
                <p className="cursor-pointer" style={{ color: color }}>
                    {text}
                </p>
                <div className={(active ? "w-full " : "opacity-0 w-[0%] ") + " absolute h-[2px] transition-all ease-in-out duration-500 left-0 bottom-0 group-hover:opacity-100 group-hover:w-full"} style={{ backgroundColor: color }}></div>
            </button>
        )
    } else if (type === "link" && link) {
        result = (
            <Link href={link}>
                <div className={classes + " relative group"} onClick={onClick}>
                    <p className="cursor-pointer" style={{ color: color }}>
                        {text}
                    </p>
                    <div className="absolute opacity-0 w-[0%] h-[2px] transition-all ease-in-out duration-500 left-0 bottom-0 group-hover:opacity-100 group-hover:w-full" style={{ backgroundColor: color }}></div>
                </div>
            </Link>
        )
    }

    return result
}

UnderlinedButton.PropTypes = {
    type: PropTypes.string,
    link: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    classes: PropTypes.string,
    color: PropTypes.string,
    active: PropTypes.bool
}

export default UnderlinedButton
