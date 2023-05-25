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

function RenderSection(props) {
    const { 
        section,
        themeColors
    } = props

    const SectionComponent = resolveSections(section)

    if (!SectionComponent) {
        return <div>Missing section {section._type}</div>
    }

    return <SectionComponent themeColors={themeColors} {...section} key={section._key} />
}

RenderSection.propTypes = {
    section: PropTypes.arrayOf(
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

export default RenderSection
