import { getFontColorValue, getStyles } from "../../utils/theme"
import { PortableText } from '@portabletext/react'
import { getPortableTextComponents } from "../../utils/portableTextComponents"

const ContactUsLanding = (props) => {
    const {
        title,
        text,
        contactInfo,
        themeColors,
        bgColor
    } = props

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container py-9 lg:py-24">
                <h1 className="pb-12 lg:pb-[260px] md:max-w-[80%] uppercase font-semibold">
                    {title}
                </h1>

                <div className="lg:flex">
                    <div className="lg:w-1/2 text-1 leading-8 pb-[48px] md:pb-0">
                        <PortableText value={text} components={getPortableTextComponents()} />
                    </div>

                    <div className="lg:w-1/2">
                        <div className="mt-12 lg:mt-0 lg:ml-auto font-krona text-sm w-full max-w-[404px]">
                            <p className="h3 text-[28px] uppercase pb-5 border-b-2 border-solid" style={{
                                borderColor: getFontColorValue(themeColors, bgColor)
                            }}>{contactInfo.title}</p>
                            <p className="pt-10">{contactInfo.address}</p>
                            {/* todo create a template for underlined text */}
                            <div>
                                <p className="inline-block font-krona text-sm pt-10" style={{
                                    borderBottom: '1px solid ' + themeColors.accent
                                }}>
                                    {contactInfo.email}
                                </p>
                            </div>

                            <div>
                                <p className="inline-block font-krona text-sm pt-5" style={{
                                    borderBottom: '1px solid ' + themeColors.accent
                                }}>
                                    {contactInfo.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsLanding;
