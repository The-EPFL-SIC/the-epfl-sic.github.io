import '../styles/components/TeamCard.css'
import { Link } from 'react-router-dom'

function WorkshopCard({workshop_data}) {
    let fullPageUrl =  `/workshop/${workshop_data["id"]}`

    return (
        <Link className="team-card" to={fullPageUrl} key={workshop_data["id"]}>
            <h2>{workshop_data["name"]}</h2>
            <p>{workshop_data["short-description"]}</p>
        </Link>
    )
}

export default WorkshopCard