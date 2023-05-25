import CustomImage from "../../utils/imageBuilder"
import { getBackgroundColor, getFontColor, getFontColorValue } from "../../utils/theme"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useState, useEffect, useRef } from "react"
import { PrimaryButton } from "../small"
import Link from "next/link"
import client from '../../client'

const BrandTile = (props) => {


    const [mySlug, setMySlug] = useState()


    // QUERY SANITY FOR THE ROUTE ID - SET THE MYSLUG TO THE SLUG
    // CHANGED THE STUDIO SCHEMA TO 'link' FOR btnLink 
    // 
    useEffect(()=> {

        const getData = async () => {
            
            const data = await client.fetch(
                `*[_type=='route' && _id == "${btnLink.internal._ref}"]`
            )
            
            const myRes = await data

            setMySlug(myRes[0].slug.current)
 

        }

        getData().catch(console.error)
        

    },[])


    const {
        bgImage,
        brandLogo,
        mainText,
        btnLink,
        themeColors,
        bgColor
    } = props

    const bgImageSettings = {
        desktop: { width: '449', height: '674' }
    }

    const el = useRef()
    const tl = useRef()
    const imageWrapper = useRef()

    // todo elements align not working
    useEffect(() => {
        gsap.set(el.current, { opacity: 0 })

        tl.current = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                scrub: 0.5,
                start: 'top 80%',
                stop: 'bottom -20%'
            }
        })
            .to(el.current, {
                opacity: 1
            })
            .to(el.current, {
                opacity: 0.5
            })
    }, [])

    const btnRef = useRef()

    const triggerRippleMouseEnter = () => {
        const event = new MouseEvent('mouseenter', {
            view: window,
            bubbles: true,
            cancelable: true
        })

        btnRef?.current?.dispatchEvent(event)
    }

    const triggerRippleMouseLeave = () => {
        const event = new MouseEvent('mouseleave', {
            view: window,
            bubbles: true,
            cancelable: true
        })

        btnRef?.current?.dispatchEvent(event)
    }

    const onMouseEnter = () => {
        gsap.to(imageWrapper.current, { scale: 1.1, duration: 0.5 })
        triggerRippleMouseEnter()
    }

    const onMouseLeave = () => {
        gsap.to(imageWrapper.current, { scale: 1, duration: 0.5 })
        triggerRippleMouseLeave()
    }

    return (
        <div
            className='lg:inline-block max-w-[390px] lg:max-w-[831px] w-full lg:w-1/2 lg:px-[78px] lg:pb-[16px] box-border mx-auto mt-[100px] group lg:even:relative lg:mt-[225px]'>
            <Link href={btnLink}>
                <div ref={el} className='relative pl-12 lg:group-even:top-[390px] cursor-pointer'>
                    <div className="w-full">
                        <div className="ml-auto mr-0 w-fit">
                            <div
                                className="brands-tile-image-wrap relative w-fit overflow-hidden"
                                ref={imageWrapper}
                                onMouseEnter={() => onMouseEnter()}
                                onMouseLeave={() => onMouseLeave()}
                            >
                                <div className="absolute top-[2px] right-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10"></div>
                                <CustomImage image={bgImage} options={bgImageSettings} />
                            </div>
                        </div>
                    </div>

                    <div className='absolute -bottom-5 left-0 w-full z-20'
                        onMouseEnter={() => onMouseEnter()}
                        onMouseLeave={() => onMouseLeave()}
                    >
                        <div className='mb-11 max-h-10 max-w-[100px] lg:max-w-[200px] lg:max-h-16'><CustomImage image={brandLogo} /></div>
                        <p className='h2 uppercase mb-[25px] lg:mb-[45px]'>{mainText}</p>
                        <PrimaryButton link={mySlug} accentColor={themeColors.accent} fontColor={getFontColorValue(themeColors, bgColor)} propRef={btnRef}/>
                    </div>
                </div>
            </Link>
        </div>
    )
}

const BrandsList = (props) => {
    const {
        heading,
        brandTiles,
        themeColors,
        bgColor
    } = props

    const el = useRef()
    const title = useRef()
    const endTrigger = useRef()
    const q = gsap.utils.selector(el)
    const titleSel = '.title'
    const titleH2ContainerSel = '.title-sub'
    const titleH2Sel = '.title h2'

    // title animations
    useEffect(() => {
        gsap.fromTo(q(titleH2ContainerSel), { x: 200, opacity: 0 }, {
            scrollTrigger: {
                trigger: q(titleSel),
                endTrigger: endTrigger.current
            }, x: 0, opacity: 0.1, duration: 1
        })

        // bugs out when going back
        // const titleOffsetRight = title.current.offsetParent.offsetParent.clientWidth - title.current.offsetParent.offsetLeft - title.current.offsetParent.offsetWidth
        gsap.to(q(titleH2Sel), {
            x: -440, scrollTrigger: {
                trigger: q(titleH2Sel),
                endTrigger: endTrigger.current,
                scrub: 0.2,
                start: 'top center'
            }
        })

        gsap.to(q(titleSel), {
            scrollTrigger: {
                trigger: q(titleSel),
                start: "top 10%",
                endTrigger: endTrigger.current,
                end: 'top center',
                pin: true,
                pinSpacing: false,
                toggleActions: 'play reverse play reverse'
            },
            duration: 1, ease: 'none'
        })
    }, [q])

    return (
        <div ref={el} className='w-full' style={{ ...getFontColor(themeColors, bgColor), ...getBackgroundColor(themeColors, bgColor) }}>
            <div className="relative wtf">
                <div ref={title} className='title hidden lg:block uppercase absolute top-36 left-0'>
                    <div className="title-sub">
                        <h2 className="text-[200px] whitespace-nowrap">{heading}</h2>
                    </div>
                </div>
                <div className='container relative w-full py-28 pt-10 lg:py-60'>
                    <div className='lg:mx-[-78px]'>
                        {brandTiles.map(brandTile => {
                            return <BrandTile {...brandTile} themeColors={themeColors} bgColor={bgColor} key={brandTile._key} />
                        })}
                    </div>
                </div>
                <div ref={endTrigger} className="end-trigger"></div>
            </div>
        </div>
    )
}

export default BrandsList;
