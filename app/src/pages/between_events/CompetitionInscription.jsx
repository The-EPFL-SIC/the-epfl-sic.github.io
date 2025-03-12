import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import student_timeline_fr from '../../assets/sic/informations/timeline_white_fr.svg'
import student_timeline_en from '../../assets/sic/informations/timeline_white_en.svg'
import '../../styles/pages/Competition.css'
import '../../styles/pages/Informations.css'
import exhibition_icon from '../../assets/icons/exhibition.png'
import networks_icon from '../../assets/icons/networks.png'
import awards_icon from '../../assets/icons/awards.png'

function Competition() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "la compétition" : "the competition"} | EPFL Sustainable Innovation Challenge`;
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

    const STUDENTS_ELEMENTS_LOCALE = {
        "title": {
            "FR": "Vous êtes une équipe d'étudiants en Europe à la recherche d'un nouveau challenge ?",
            "EN": "You are a student team in Europe and looking for a new challenge?"
        },
        "student-form-text": {
            "FR": "Rejoindre maintenant avec",
            "EN": "Register now through"
        },
        "student-form-link": {
            "display": {
                "FR": "ce formulaire",
                "EN": "this form"
            },
            "to": "https://forms.gle/CWgb5uaqsQasFxQ76"
        },
        "deadline": {
            "FR": "Deadline le 31 Decembre 2024",
            "EN": "Deadline December 31, 2024"
        },
        "participation-benefits": [
            {
                "title": {
                    "FR": "Mise en valeur",
                    "EN": "Showcase"
                },
                "img": exhibition_icon,
                "points": [
                    {
                        "FR": "Présentez votre travail et votre équipe devant un jury d'experts ainsi qu'un public composé d'entreprises, de laboratoires, des acteurs politiques locaux et d'autres étudiants.",
                        "EN": "Present your work and team in front of an expert jury and an audience of companies, labs, policymakers and other students"
                    },
                    {
                        "FR": "Exposez votre prototype - les frais de transport sont pris en charge.",
                        "EN": "Exhibit your prototype - we cover transportation costs"
                    },
                    {
                        "FR": "Gagnez en visibilité et établissez des connexions avec des collaborateurs et employeurs issus de l'industrie et du monde académique.",
                        "EN": "Gain visibility and connect with collaborators and employers from industry and academia"
                    }
                ]
            },
            {
                "title": {
                    "FR": "Réseautage",
                    "EN": "Network"
                },
                "img": networks_icon,
                "points": [
                    {
                        "FR": "Tenez un stand pendant 2 jours aux côtés d'entreprises et de laboratoires.",
                        "EN": "Have a stand during 2 days next to companies and labs"
                    },
                    {
                        "FR": "Rencontrez des experts et d'autres équipes étudiantes dans votre domaine.",
                        "EN": "Meet experts and other student teams in your field"
                    },
                    {
                        "FR": "Participez à des ateliers pour apprendre et échanger.",
                        "EN": "Take part in workshops to learn and exchange"
                    }
                ]
            },
            {
                "title": {
                    "FR": "Prix",
                    "EN": "Awards"
                },
                "img": awards_icon,
                "points": [
                    {
                        "FR": "30'000 CHF de récompense pour les gagnants.",
                        "EN": "30'000 CHF total cash prize"
                    },
                    {
                        "FR": "Répartis entre toutes les équipes à travers différents prix.",
                        "EN": "Split between all teams through different awards"
                    }
                ]
            }
        ]
    }

    return (
        <>
            <div className="flexer">
                <section className="main">
                    <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                    <main>
                        <h1>{STUDENTS_ELEMENTS_LOCALE["title"][lang]}</h1>
                        <h2>
                            {STUDENTS_ELEMENTS_LOCALE["student-form-text"][lang]} <a href={STUDENTS_ELEMENTS_LOCALE["student-form-link"]["to"]}>{STUDENTS_ELEMENTS_LOCALE["student-form-link"]["display"][lang]}</a>
                            <br/>
                            {STUDENTS_ELEMENTS_LOCALE["deadline"][lang]}
                        </h2>
                        {STUDENTS_ELEMENTS_LOCALE["participation-benefits"].map((benefitKeyPoint, n1) => (
                            <div key={`${n1}-${lang}`}>
                                <div className="benefits-header">
                                    <img src={benefitKeyPoint["img"]} alt={benefitKeyPoint["title"][lang]}/>
                                    <h2>{benefitKeyPoint["title"][lang]}</h2>
                                </div>
                                <ul>
                                    {benefitKeyPoint["points"].map((point, n2) => (
                                        <li key={`${benefitKeyPoint['title'][lang]}-${n2}`}>{point[lang]}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <img className="timeline" alt="timeline" src={(lang === "FR")? student_timeline_fr : ((lang === "EN")? student_timeline_en : student_timeline_en)}/>
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default Competition