import { useRef, useState, useEffect } from "react"
import CustomImage from "../../utils/imageBuilder"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const BigImage = (props) => {
    const {
        bgImage,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    return (
        <div className="m-auto">
            <div className="section-padding">
                <CustomImage image={bgImage} options={{ desktop: { width: '1920', height: '1280' }, mobile: { width: '768', height: '768' } }} />
            </div>
        </div>
    )
}

export default BigImage;
