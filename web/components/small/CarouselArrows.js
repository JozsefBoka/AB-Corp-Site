import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ArrowEast, ArrowWest } from "../icons"
import gsap from 'gsap'

const CarouselArrows = (props) => {
    const {
        instanceRef,
        currentSlide,
        color,
        styles
    } = props

    return (
        <>
            <ArrowPrevious instanceRef={instanceRef} currentSlide={currentSlide} color={color} styles="absolute left-5 top-[50%] -translate-y-[50%] z-10" />
            <ArrowNext instanceRef={instanceRef} currentSlide={currentSlide} color={color} styles="absolute right-5 top-[50%] -translate-y-[50%] z-10" />
        </>
    )
}

CarouselArrows.PropTypes = {
    instanceRef: PropTypes.object,
    currentSlide: PropTypes.number,
    color: PropTypes.string,
    styles: PropTypes.string
}

export const ArrowPrevious = (props) => <CarouselArrow {...props} isLeft={true} />
export const ArrowNext = (props) => <CarouselArrow {...props} />

export const CarouselArrow = (props) => {
    const {
        instanceRef,
        currentSlide,
        color,
        styles,
        isLeft
    } = props

    let defaultRef = useRef()
    const [stateColor, setStateColor] = useState('rgb(255,255,255)')

    useEffect(() => {
        gsap.set(defaultRef.current, { '--accent-color': color })
    }, [color])

    const mouselLeaveCallback = () => {
        gsap.to(defaultRef.current, { '--clip-path': 'circle(0% at 0% 60%)', duration: 0.5 })
        setStateColor('rgb(255,255,255)')
    }

    useEffect(() => {
        defaultRef.current?.addEventListener('mouseenter', () => {
            gsap.to(defaultRef.current, { '--clip-path': 'circle(130% at 0% 60%)', duration: 0.5 })
            setStateColor('rgb(0,0,0)')
        })
        defaultRef.current?.addEventListener('mouseleave', mouselLeaveCallback)
    }, [])

    useEffect(() => {
        if (isLeft && currentSlide === 0) {
            mouselLeaveCallback()
        } else if (
            currentSlide === instanceRef?.current?.track.details.maxIdx
        ) {
            mouselLeaveCallback()
        }
    }, [currentSlide, color, instanceRef, isLeft])

    return (
        <button ref={defaultRef} className={"cursor-pointer primary-button block w-fit px-[30px] py-[15px] mr-3 rounded-[100%] ml-auto overflow-hidden z-20 disabled:opacity-30 " + styles}
            onClick={(e) => {
                if (isLeft) {
                    e.stopPropagation() || instanceRef.current?.prev()
                } else {
                    e.stopPropagation() || instanceRef.current?.next()
                }
            }}
            disabled={
                isLeft ?
                    currentSlide === 0
                    :
                    currentSlide === instanceRef?.current?.track.details.maxIdx
            }
        >
            <div className="z-10">
                {!!isLeft ? <ArrowWest fill={stateColor} /> : <ArrowEast fill={stateColor} />}
            </div>
        </button>
    )
}

CarouselArrow.PropTypes = {
    instanceRef: PropTypes.object,
    currentSlide: PropTypes.number,
    color: PropTypes.string,
    styles: PropTypes.string,
    isLeft: PropTypes.bool
}

export const SecondaryCarouselArrows = (props) => {
    const {
        instanceRef,
        currentSlide,
        color
    } = props

    return (
        <div className="flex">
            <button
                className="p-1 mr-[12px] disabled:opacity-60"
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
            >
                <ArrowWest fill={color} />
            </button>

            <button
                className="p-1 ml-[12px] disabled:opacity-60"
                onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                    currentSlide ===
                    instanceRef?.current?.track.details.maxIdx
                }
            >
                <ArrowEast fill={color} />
            </button>
        </div>
    )
}

SecondaryCarouselArrows.PropTypes = {
    instanceRef: PropTypes.object,
    currentSlide: PropTypes.number,
    color: PropTypes.string
}

export default CarouselArrows
