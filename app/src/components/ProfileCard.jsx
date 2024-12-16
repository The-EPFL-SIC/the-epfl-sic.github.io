import linkedin_icon from '../assets/icons/person_linkedin.png'
import link_icon from '../assets/icons/person_link.png'
import default_profile_picture from '../assets/sic/members/default_user.png'
import '../styles/components/ProfileCard.css'

function ProfileCard({lang, profileData}){
    return (
        <div className="profile-block">
            <img alt="profile" src={profileData["profile-picture"] || default_profile_picture} />
            <p>
                <strong>{profileData["name"]}</strong><br/>
                {profileData["role"][lang]}
            </p> 
            <div className="profile-links">
                {profileData["people_epfl"] && <a href={profileData["people_epfl"]}><img alt="external link icon" src={link_icon} /></a>}
                {profileData["linkedin"] && <a href={profileData["linkedin"]}><img alt="linkedin icon" src={linkedin_icon} /></a>}
            </div>
        </div>
    )
}

export default ProfileCard;