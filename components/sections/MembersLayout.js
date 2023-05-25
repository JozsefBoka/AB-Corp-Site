import React, { useState } from "react"
import UnderlinedButton from '../small/UnderlinedButton'
import { MemberCard } from "../small"

const MembersLayout = (props) => {
    const {
        title,
        filters,
        members,
        themeColors
    } = props

    const [activeFilter, setActiveFilter] = useState('all')

    return (
        <div className="container">
            <div className="">
                <div className='flex justify-between mb-28'>
                    <h1 className='uppercase'>{title}</h1>
                    <div className='flex items-center'>
                        <UnderlinedButton active={"all" === activeFilter} type="button" text="All" color="black" onClick={() => setActiveFilter('all')} />
                        {filters?.map(filter => <UnderlinedButton key={filter._key} active={filter.toLowerCase() === activeFilter} type="button" text={filter} color="black" onClick={() => setActiveFilter(filter.toLowerCase())} />)}
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-10 mb-24">
                {members?.map(member => {
                    if (member.category?.toLowerCase() === activeFilter || activeFilter === 'all') {
                        return <MemberCard key={member._key} {...member} underlineColor={themeColors.accent} style="mb-[50px]"/>
                    }
                })}
            </div>
        </div>
    )
}

export default MembersLayout
