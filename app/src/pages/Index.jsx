import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/global.css'
import '../styles/pages/Index.css'
import logo_carbon_removal_booster from '../assets/logo/logo_carbon_removal_booster.png'
import logo_epfl from '../assets/logo/logo_epfl.png'
import logo_eth_sph from '../assets/logo/logo_eth_sph.svg'
import logo_epfl_cctc from '../assets/logo/logo_epfl_cctc.png'
import competition_actors from '../assets/sic/informations/competition_actors_2.svg'

function Index() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    function saveAndChangeLang(language) {
        switch(language) {
            case "FR":
                // it is a supported language
                break;
            case "EN":
                // it is a supported language
                break;
            default:
                // the selected language is not valid yet 
                language = "EN";
                break;
        }
        localStorage.setItem("prefered-language", language);
        changeLang(language);
    }

    const INDEX_ELEMENTS_LOCALE = {
        "sic-presentation" : {
            "FR": "Défi et Conférence sur la Durabilité organisés par des Étudiants - rassemblant étudiants, chercheurs et l'industrie.",   
            "EN": "Student-led sustainable Challenge and Conference - gathering students, research and industry"   
        },
        "date": {
            "FR": "Mars 13, 14 2025",
            "EN": "March 13, 14 2025"
        },
        "sponsors-n-partners": {
            "FR": "2024-2025 Sponsors et Partenaires!",
            "EN": "2024—2025 Sponsors and Partners!"
        },
        "schedule & tickets": {
            "FR": "Horaires et billets",
            "EN": "Schedule & Tickets"
        },
        "student-team": {
            "FR": "Etudiants",
            "EN": "Student Teams"
        },
        "labs": {
            "FR": "Laboratoires",
            "EN": "Labs"
        },
        "public": {
            "FR": "Public",
            "EN": "Public"
        },
        "compagnies": {
            "FR": "Entreprises et ONG",
            "EN": "Companies & NGOs"
        },
        "sic-presentation-1": {
            "FR": "Rejoignez-nous au RLC de Lausanne (EPFL) pour un événement de deux jours dédié à la durabilité, avec une expo réunissant entreprises et monde académique ainsi qu’un challenge étudiant.",
            "EN": "Join us at the RLC in Lausanne (EPFL) for a two-day event dedicated to sustainability, featuring a company and academia expo alongside a student challenge."
        },
        "sic-presentation-2": {
            "FR": "Notre focus : la réduction des émissions, la restauration de la biodiversité et des solutions alignées avec les ODD.",
            "EN": "Our focus: emission reductions, bioodiversity restoration, and solutions aligned with the SDGs."
        },
        "sic-presentation-3": {
            "FR": "Nous promouvons l'innovation sociale, économique et technologique, en mettant en avant des approches diversifiées qui privilégient la réduction de la consommation et un progrès durable.",
            "EN": "We promote social, economic and technological innovation, showcasing diverse approaches that emphasize reduced consumption and sustainable progress."
        },
        "sic-presentation-4": {
            "FR": "Ceci est un nouvel événement.",
            "EN": "This is a new event."
        },
        "sic-presentation-5": {
            "FR": "Nous voulons le construire avec vous.",
            "EN": "We want to build it with you."
        },
        "our-chart": {
            "FR": "Notre charte",
            "EN": "Our charter"
        },
        "reach-out": {
            "FR": "Contactez nous",
            "EN": "Reach out to us"
        }
    }

    const sponsors = [
        {
            "name": "Carbon removal booster",
            "link": "https://www.cdr-booster.ch/",
            "logo": logo_carbon_removal_booster
        },
        {
            "name": "EPFL",
            "link": "https://www.epfl.ch/",
            "logo": logo_epfl
        },
        {
            "name": "EPFL CCTC",
            "link": "https://www.epfl.ch/education/educational-initiatives/educational-initiatives/transversal-skills-and-career-center/",
            "logo": logo_epfl_cctc
        },
        {
            "name": "SPH ETH",
            "link": "https://sph.ethz.ch/",
            "logo": logo_eth_sph
        }
    ]

    return (
        <>
            <section className="welcome-page">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <article>
                    <h1>
                        EPFL<span className="special-char">'</span>s <br/>
                        Sustainable <br/>
                        Innovation <br/>
                        Challenge <br/>
                        (SIC)
                    </h1>
                    <p>
                        {INDEX_ELEMENTS_LOCALE["sic-presentation"][lang]}<br/>
                        <strong>{INDEX_ELEMENTS_LOCALE["date"][lang]}</strong><br/>
                        <strong>EPFL Rolex Learning Center - <a href="https://www.eventbrite.com/e/epfl-sustainable-innovation-challenge-tickets-1248211717849?aff=oddtdtcreator">{INDEX_ELEMENTS_LOCALE["schedule & tickets"][lang]} </a> </strong>
                    </p>
                </article>
            </section>
            <section className="sic-presentation">
                <div className="competition-presentation">
                    <div className="image"></div>
                    <div className="text">
                        <h2>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-1"][lang]}
                        </h2>
                        <p>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-2"][lang]}
                        </p>
                        <p>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-3"][lang]}
                        </p>
                        <Link className="our-charter" to="/our-engagement">{INDEX_ELEMENTS_LOCALE["our-chart"][lang]}</Link>
                        <p>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-4"][lang]} <br/>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-5"][lang]}
                        </p>
                        <Link className="reach-out" to="/contact">{INDEX_ELEMENTS_LOCALE["reach-out"][lang]}</Link>
                    </div>
                </div>
                <div className="competition-actor">
                    <img src={competition_actors} alt="competition actors"/>
                    <Link className="link-to-student" to="/competition">{INDEX_ELEMENTS_LOCALE["student-team"][lang]}</Link>
                    <Link className="link-to-lab" to="/labs">{INDEX_ELEMENTS_LOCALE["labs"][lang]}</Link>
                    <Link className="link-to-companies" to="/companies">{INDEX_ELEMENTS_LOCALE["compagnies"][lang]}</Link>
                    <p className="link-to-public">Public</p>
                </div>
            </section>
            <section className="partners">
                <hr/>
                <h2> {INDEX_ELEMENTS_LOCALE["sponsors-n-partners"][lang]} </h2> 
                <div className="gallery">
                    {sponsors.map(sponsor => (
                        <a key={"sponsor" + sponsor["name"]} href={sponsor["link"]}>
                            <img src={sponsor["logo"]} alt={sponsor["name"]} />
                        </a>
                    ))}
                </div>
            </section>
            <Footer saveAndChangeLang={saveAndChangeLang} lang={lang}/>
        </>
    )
}

export default Index;