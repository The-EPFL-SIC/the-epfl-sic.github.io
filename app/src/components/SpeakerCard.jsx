import '../styles/components/SpeakerCard.css'
import { Link } from 'react-router-dom'

function SpeakerCard({speaker_data}) {

    let fullPageUrl = `/speaker/${speaker_data["id"]}`

    return (
        <Link className="speaker-card" to={fullPageUrl} key={speaker_data["id"]}>
            <h2>{speaker_data["name"]}</h2>
            <p>{speaker_data["title"]}</p>
        </Link>
    )
}

export default SpeakerCard