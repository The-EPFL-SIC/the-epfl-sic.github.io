import '../styles/components/CompanyStandCard.css'
import { Link } from 'react-router-dom'

function CompagnyStandCard({company_stand_data}) {

    let fullPageUrl = `/company-stand/${company_stand_data["id"]}`

    return (
        <Link key={company_stand_data["id"]} className="company-stand-card" to={fullPageUrl}>
            <h2>{company_stand_data["name"]}</h2>
            <p>{company_stand_data["short-description"]}</p>
        </Link>
    )
}

export default CompagnyStandCard