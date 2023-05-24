import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import * as SectionComponents from './sections'
import capitalizeString from '../utils/capitalizeString'

function resolveSections(section) {
    // eslint-disable-next-line import/namespace
    const Section = SectionComponents[capitalizeString(section._type)]

    if (Section) {
        return Section
    }

    console.error(`Cant find section ${capitalizeString(section._type)}: `, section) // eslint-disable-line no-console
    return null
}

function RenderSections(props) {
    const {
        sections,
        themeColors
    } = props

    if (!sections) {
        console.error('Missing section')
        return <div>Missing sections</div>
    }



    return sections.map((section) => {
        const SectionComponent = resolveSections(section)

        if (!SectionComponent) {
            return <div key={section._key}>Missing section {section._type}</div>
        }
        return <SectionComponent key={section._key} themeColors={themeColors} {...section}  />
    })

}

RenderSections.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            _type: PropTypes.string,
            _key: PropTypes.string,
            section: PropTypes.instanceOf(PropTypes.object),
        })
    ),
    themeColors: PropTypes.shape({
        light: PropTypes.string,
        dark: PropTypes.string,
        accent: PropTypes.string,
        font: PropTypes.string,
    })
}

export default RenderSections
