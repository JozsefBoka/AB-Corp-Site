import ImageTile from "../ImageTile";
import { getStyles, getFontColorValue } from "../../utils/theme"
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"
import { useKeenSlider } from "keen-slider/react"
import { SecondaryCarouselArrows } from "../small/CarouselArrows"

const ArticlesRow = (props) => {
    const {
        title,
        articles,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    const [currentSlide, setCurrentSlide] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 50 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 100 },
            },
            "(min-width: 1700px)": {
                slides: { perView: 3, spacing: 156 },
            },
        },
        slides: { perView: 1 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })

    // todo btn link stil not working
    // console.log(articles)

    return (
        <div className="w-full" style={getStyles(themeColors, bgColor)}>
            <div ref={ref} className="section-padding" >
                <div className="container">
                    <div className="flex justify-between items-center pb-9">
                        <h3 className="uppercase">{title}</h3>
                        {articles.length > 3 &&
                            <SecondaryCarouselArrows instanceRef={instanceRef} currentSlide={currentSlide} color={getFontColorValue(themeColors, bgColor)} />
                        }
                    </div>
                    {articles.length > 3 ?
                        <div ref={sliderRef} className=' keen-slider'>
                            {articles.map(article => (
                                <ImageTile key={article._key} {...article.preview} btnLink={article.btnLink} category={false} classNames="keen-slider__slide min-w-[404px]" themeColors={themeColors} />
                            ))}
                        </div>
                        :
                        <div className='grid md:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-10 mb-24'>
                            {articles.map(article => (
                                <ImageTile {...article.preview} key={article._key} category={false} btnLink={article.btnLink} classNames="mx-auto md:first:ml-0 md:last:mr-0" themeColors={themeColors} />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticlesRow;
