import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/global.css'
import '../styles/pages/Index.css'
import ticket_icon from '../assets/icons/ticket.png'
import logo_white_sic from '../assets/sic/logo_2_blanc.svg'
import logo_epfl from '../assets/logo/logo_epfl.png'

import competition_actors from '../assets/sic/informations/competition_actors_2.svg'
import event_poster_en from '../assets/sic/informations/event_poster_en.png'
import event_poster_fr from '../assets/sic/informations/event_poster_fr.png'

import partner_associations from '../data/partners_associations'
import partner_associations_and_commissions from '../data/partners_commissions'
import principal_partners from '../data/partners_principal'

import is_event_happening from '../is_event_happening';

function Index() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "bienvenue" : "welcome"} | EPFL Sustainable Innovation Challenge`;
    }, [])

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
        "schedule": {
            "FR": "Horaires",
            "EN": "Schedule"
        },
        "tickets": {
            "FR": "billets",
            "EN": "tickets"
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
        },
        "event-poster": {
            "FR": "poster de l'évènement",
            "EN": "the event poster"
        },
        "our-chart-link": {
            "FR": "Notre charte",
            "EN": "Our charter",
            to: "/our-engagement"
        },
        "event-schedule-link": {
            "FR": "Planning",
            "EN": "Schedule",
            to: "/event-schedule"
        },
        "current-edition-link": {
            "FR": "Édition 2024-2025",
            "EN": "2024-2025 edition",
            to: "/current-event-edition-information"
        },
        "principal-partners": {
            "FR": "Partenaires principaux",
            "EN": "Principal partners"
        },
        "partner-association": {
            "FR": "Associations partenaires",
            "EN": "Partner associations"
        },
        "partner-association-and-commission": {
            "FR": "Associations et commissions partenaires",
            "EN": "Partner associations & commissions"
        }
    }

    return (
        <>
            <section className="welcome-page">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <article>
                    {
                        (is_event_happening)? <a className="get-your-ticket" href="https://www.eventbrite.com/e/epfl-sustainable-innovation-challenge-tickets-1248211717849?aff=oddtdtcreator">
                            <img src={ticket_icon} alt="ticket"/>
                            <div>
                                {INDEX_ELEMENTS_LOCALE["schedule"][lang]}<br/>
                                <span className="special-char"> & </span>
                                {INDEX_ELEMENTS_LOCALE["tickets"][lang]}
                            </div>
                        </a> : null
                    }
                    <h1>
                        EPFL<span className="special-char">'</span>s <br/>
                        Sustainable <br/>
                        Innovation <br/>
                        Challenge <br/>
                        <img className="first-page-logo" src={logo_epfl} alt="epfl logo" />
                        <img className="first-page-logo" src={logo_white_sic} alt="logo sic" />
                    </h1>
                    <p>
                        {INDEX_ELEMENTS_LOCALE["sic-presentation"][lang]}<br/>
                        <strong>{INDEX_ELEMENTS_LOCALE["date"][lang]}</strong><br/>
                        <strong>EPFL Rolex Learning Center</strong>
                    </p>
                </article>
            </section>
            <section className="sic-presentation">
                {
                    (is_event_happening)? <div className="poster">
                        <img src={(lang === "EN")? event_poster_en : event_poster_fr} alt={INDEX_ELEMENTS_LOCALE["event-poster"][lang]} />
                        <Link className="our-chart-link" to={INDEX_ELEMENTS_LOCALE["our-chart-link"]["to"]}>
                            {INDEX_ELEMENTS_LOCALE["our-chart-link"][lang]}
                        </Link>
                        <Link className="event-schedule-link" to={INDEX_ELEMENTS_LOCALE["event-schedule-link"]["to"]}>
                            {INDEX_ELEMENTS_LOCALE["event-schedule-link"][lang]}
                        </Link>
                        <Link className="current-edition-link" to={INDEX_ELEMENTS_LOCALE["current-edition-link"]["to"]}>
                            {INDEX_ELEMENTS_LOCALE["current-edition-link"][lang]}
                        </Link>
                    </div> : <>
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
                    </>
                }
            </section>
            <section className="partners">
                <hr/>
                <h2> {INDEX_ELEMENTS_LOCALE["principal-partners"][lang]} </h2> 
                <div className="gallery">
                    {principal_partners.map(partner => (
                        <a key={"principal partner" + partner["name"]} href={partner["link"]}>
                            <img src={partner["logo"]} alt={partner["name"]} />
                        </a>
                    ))}
                </div>
                <h2> {INDEX_ELEMENTS_LOCALE["partner-association"][lang]} </h2> 
                <div className="gallery">
                    {partner_associations.map(partner => (
                        <a key={"partner" + partner["name"]} href={partner["link"]}>
                            <img src={partner["logo"]} alt={partner["name"]} />
                        </a>
                    ))}
                </div>
                <h2> {INDEX_ELEMENTS_LOCALE["partner-association-and-commission"][lang]} </h2> 
                <div className="gallery">
                    {partner_associations_and_commissions.map(partner => (
                        <a key={"sponsor" + partner["name"]} href={partner["link"]}>
                            <img src={partner["logo"]} alt={partner["name"]} />
                        </a>
                    ))}
                </div>
            </section>
            <Footer saveAndChangeLang={saveAndChangeLang} lang={lang}/>
        </>
    )
}

export default Index;