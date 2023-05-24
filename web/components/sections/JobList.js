import { getStyles } from "../../utils/theme"
import CustomImage from "../../utils/imageBuilder"
import { ArrowNorthEast } from "../icons"

const JobList = (props) => {
    const {
        themeColors,
        bgColor,
        jobs
    } = props

    return (
        <div style={getStyles(themeColors, bgColor)}>
            <div className="container">
                <ul>
                    {jobs.map(job => <Job key={job._key} jobData={{ ...job }} />)}
                </ul>
            </div>
        </div>
    )
}

const Job = (props) => {
    const { type, deadLine, brandImage, url } = props.jobData
    const { day, month, year } = getFormatDeadline(deadLine)

    return (
        <li key={props.jobData._key}>
            <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between sm:p-[42px] sm:px-[42] px-0 p-[28px] border-t-[2px] border-[#000000] border-opacity-20">
                <div className="flex sm:flex-row flex-col">
                    <div className="mr-[80px]">
                        <CustomImage image={brandImage} />
                    </div>
                    <div className="mt-6 sm:m-0">
                        <h2 className="text-base font-normal mb-2">{type}</h2>
                        <p className="text-[#000] opacity-80">Søknadsfrist {day} {month} {year}</p>
                    </div>
                </div>
                <div className="mt-4 sm:m-t-0 ml-auto">
                    <a className="flex items-center" href={url} target="_blank" rel="noreferrer">
                        <h6 className="text-sm mr-6 whitespace-nowrap">Les mer</h6>
                        <ArrowNorthEast fill={'black'} />
                    </a>
                </div>
            </div>
        </li>
    )
}

const getFormatDeadline = (dateStr) => {
    const date = new Date(dateStr)

    return {
        day: date.getDate(),
        month: date.toLocaleString('no-no', { month: 'short' }),
        year: date.getFullYear()
    }
}

export default JobList