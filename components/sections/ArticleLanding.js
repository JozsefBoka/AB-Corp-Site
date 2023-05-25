import { getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"
import { isValidDate, monthNames } from "../../utils/dateHelpers"

const ArticleLanding = (props) => {
    const {
        title,
        text,
        // todo remove default values
        category,
        publishDate,
        themeColors,
        bgColor
    } = props

    const date = new Date(publishDate)
    let month, year
    if (isValidDate(date)) {
        month = monthNames[date.getMonth()]
        year = date.getFullYear()
    }

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container py-24">
                <h1 className="pb-[126px] md:pb-[260px] md:max-w-[80%] h2 leading-[60px] uppercase font-semibold">
                    {title}
                </h1>

                <div className="relative md:pl-[40%]">
                    <div className="absolute top-0 left-0 flex uppercase text-sm text-dusty-gray">
                        <p className="pr-6">{category}</p>
                        <p>{month} {year}</p>
                    </div>

                    <div className="text-1 leading-8 pb-[48px] md:pb-0">
                        <PortableText value={text} components={getPortableTextComponents()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleLanding;
