import { getFontColorValue, getStyles } from "../../utils/theme"
import fileDownload from "js-file-download"
import { DownloadIcon } from "../icons"
import client from '../../client'
import { useEffect, useRef, useState } from "react"
import { getSectionPaddingStyles } from "../../utils/sectionPadding"

const DownloadBlock = (props) => {
    const {
        title,
        themeColors,
        bgColor,
        files,
        sectionPadding
    } = props
    const { projectId, dataset } = client.config()

    const ref = useRef()

    useEffect(() => {
        getSectionPaddingStyles(sectionPadding, ref.current)
    })

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

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <div ref={ref} className="section-padding" >
                    <div className="md:pl-[40%]">
                        <h3 className="uppercase pb-5">{title}</h3>
                        <div className="flex flex-col max-w-full text-sm">
                            <ul className={`border-t-[3px] border-[${themeColors.font}]`}>
                                {files.map(file => {
                                    const { url, extension } = getUrlFromId(file.pdfFile.asset._ref)
                                    const fileName = `${file.title}.${extension}`

                                    return (
                                        <li key={file._key} onClick={() => handleClick(url, fileName)}
                                            className="flex justify-between cursor-pointer p-[32px] border-[#000] border-opacity-[0.1] border-b-[2px]"
                                        >
                                            <p>{file.title}</p>
                                            <DownloadIcon fill={getFontColorValue(themeColors, bgColor)} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadBlock
