import CustomImage from "../../utils/imageBuilder"
import PropTypes from 'prop-types'

const MemberCard = (props) => {
    const {
        name,
        job,
        email,
        profile,
        category,
        underlineColor,
        style
    } = props

    const imageSettings = {
        desktop: {
            width: '404',
            height: '340'
        }
    }

    return (
        <div className={style}>
            <p className="mb-4 uppercase font-krona text-xs text-dusty-gray">{category}</p>
            <CustomImage image={profile} options={imageSettings} />
            <p className="h3 uppercase mt-8 mb-3" style={{ wordSpacing: '100vw' }}>{name}</p>
            <p className="mb-11 font-krona text-sm">{job}</p>

            <a href={"mailto:" + `${email}`} className="inline-block font-corona text-sm mb-11" style={{borderBottom: '1px solid' + underlineColor}}>{email}</a>


            {/* <p className="inline-block font-krona text-sm" style={{
                borderBottom: '1px solid ' + underlineColor
            }}>{email}</p> */}
        </div>
    )
}

MemberCard.PropTypes = {
    name: PropTypes.string,
    job: PropTypes.string,
    email: PropTypes.string,
    profile: PropTypes.object,
    category: PropTypes.string,
    underlineColor: PropTypes.string,
    style: PropTypes.string,
}

export default MemberCard
