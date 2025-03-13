import '../styles/components/TeamCard.css'
import { Link } from 'react-router-dom'

function TeamCard({team_data, is_honorific}) {
    let fullPageUrl =  ((is_honorific)? "/honorific-team/" : "/selected-team/") + team_data["id"]

    return (
        <Link className="team-card" to={fullPageUrl} key={team_data["id"]}>
            <h2>{team_data["name"]}</h2>
            <p>{team_data["short-description"]}</p>
        </Link>
    )
}

export default TeamCard