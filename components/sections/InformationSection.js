import { getFontColorValue, getStyles } from "../../utils/theme"
import fileDownload from "js-file-download"
import { DownloadIcon } from "../icons"
import client from '../../client'
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const SustainabilitySheet = (props) => {
    const { themeColors, bgColor, files } = props
    const { projectId, dataset } = client.config()

    const getUrlFromId = (ref) => {
        const [_file, id, extension] = ref.split("-")
        const url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`

        return { url, extension }
    }

    const handleClick = (url, filename) => {
        fetch(url)
            .then((response) => response.blob())
            .then((response) => {
                if (response) {
                    fileDownload(response, filename)
                }
            })
    }

    // todo make border collor same as font
    return (
        <ul className="block border-t-[3px] w-full text-sm pb-9 lg:pb-0"
            style={{
                borderColor: bgColor === 'dark' ? 'white' : themeColors?.font
            }}
        >
            {files.map((file, idx) => {
                const { url, extension } = getUrlFromId(file.pdfFile.asset._ref)
                const fileName = `${file.title}.${extension}`

                return (
                    <li 
                        key={idx}
                        onClick={() => handleClick(url, fileName)}
                        className="block cursor-pointer"
                    >
                        <div className="flex justify-between p-[32px]">
                            <p>{file.title}</p>
                            <DownloadIcon fill={getFontColorValue(themeColors, bgColor)} />
                        </div>

                        {files.length > idx && (
                            <div className="opacity-[0.1] h-[2px] w-full"
                                style={{ backgroundColor: (bgColor === 'dark' ? 'white' : themeColors?.font) }}
                            ></div>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

const InformationSection = (props) => {
    const {
        categories,
        downloadable,
        text,
        infItems,
        themeColors,
        bgColor,
        sectionPadding
    } = props

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding" >
                    <div className="flex justify-between">
                        <div className={"relative w-full md:w-auto md:pl-[40%] flex md:block " + (categories ? "flex-col-reverse" : "flex-col")}>
                            {categories && (
                                <div className="hidden md:absolute top-0 left-0 md:flex flex-col">
                                    <p className="uppercase text-[11px] text-dusty-gray pb-[19px]">{'Kategorierer'}</p>
                                    {categories.map((category, idx) => <div key={idx}><p className="inline-block px-[12px] pt-[7px] pb-[8px] mb-2 border-2 border-solid rounded-md whitespace-nowrap text-[13px] font-semibold">{category}</p></div>)}
                                </div>
                            )}

                            {downloadable && (
                                <div className="lg:absolute top-0 left-0 w-full lg:max-w-[350px]">
                                    <SustainabilitySheet themeColors={themeColors} bgColor={bgColor} files={downloadable} />
                                </div>
                            )}

                            <div className="max-w-[883px]">
                                <p className="text-[20px] font-bold pb-[48px]">
                                    {text}
                                </p>

                                {categories && (
                                    <div className="md:hidden pb-[48px]">
                                        <p className="uppercase text-[11px] text-[#9A9A9A] pb-[19px]">{'Kategorierer'}</p>
                                        {categories.map((category, idx) => <p key={idx} className="inline-block px-[12px] pt-[7px] pb-[8px] mr-[8px] mb-2 border-2 border-solid rounded-md whitespace-nowrap text-[13px] font-semibold">{category}</p>)}
                                    </div>
                                )}

                                <div className="overflow-hidden mr-[-20px] lg:mr-0">
                                    <div className="flex overflow-x-scroll overflow-y-hidden no-scrollbar">
                                        {infItems.map(infItem => (
                                            <div key={infItem._key} className="flex-shrink-0 pr-[50px]">
                                                <p className="text-[11px] text-[#9A9A9A] uppercase pb-[12px] lg:pb-[18px]">{infItem.smallText}</p>
                                                <p className="text-[30px] lg:text-[46px] leading-[46px] font-bold">{infItem.bigText}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection;
