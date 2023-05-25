/** react.js version
 * a component for a react component to show percentage circle
 **/
import React, { useEffect, useState, useRef } from "react";
import { getBackgroundColor } from "../../utils/theme";
import PropTypes from 'prop-types'
import gsap from 'gsap'

const PercentageCircle = (props) => {
    const { percent, color, themeColors, bgColor, children } = props;

    const [radius, setRadius] = useState(600)

    useEffect(() => {
        setRadius(600 - (600 * percent) / 100)            
    }, [percent])

    return (
        <div className="relative">
            <div className="h-[200px] w-[200px] rounded-[50%] p-[10px] bg-[#d3d3d3]">
                <div className="flex justify-center items-center flex-col h-[180px] w-[180px] rounded-[50%]" style={getBackgroundColor(themeColors, bgColor)}>
                    {children}
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute top-0 left-0 w-[200px] h-[200px] -rotate-90">
                <circle cx="100" cy="100" r="95" strokeLinecap="round" style={{
                    fill: 'none',
                    stroke: color,
                    strokeWidth: '10px',
                    strokeDasharray: 600,
                    strokeDashoffset: radius
                }} />
            </svg>
        </div>
    );
};

PercentageCircle.PropTypes = {
    percent: PropTypes.number,
    color: PropTypes.string,
    themeColors: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.element
}

export default PercentageCircle;