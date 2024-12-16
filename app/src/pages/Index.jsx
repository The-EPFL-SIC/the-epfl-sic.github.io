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
            "FR": "(à traduire)",
            "EN": "Join us at the RLC in Lausanne (EPFL) for a two-day event dedicated to sustainability, featuring a company and academia forum alongside a student challenge."
        },
        "sic-presentation-2": {
            "FR": "(à traduire)",
            "EN": "Our focus: emission reductions, bioodiversity restoration, and solutions aligned with the SDGs."
        },
        "sic-presentation-3": {
            "FR": "(à traduire)",
            "EN": "We promote social, economic and technological innovation, showcasing diverse approaches that emphasize reduced consumption and sustainable progress."
        },
        "our-chart": {
            "FR": "Notre charte",
            "EN": "Our charter"
        },
        "sic-presentation-4": {
            "FR": "(à traduire)",
            "EN": "This is a new event."
        },
        "sic-presentation-5": {
            "FR": "(à traduire)",
            "EN": "We want to build it with you."
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
                        <strong>EPFL Rolex Learning Center</strong>
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
                        <Link to="/our-engagement">{INDEX_ELEMENTS_LOCALE["our-chart"][lang]}</Link>
                        <p>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-4"][lang]} <br/>
                            {INDEX_ELEMENTS_LOCALE["sic-presentation-5"][lang]}
                        </p>
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