import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileCard from '../components/ProfileCard'
import '../styles/pages/Members.css'

import Ecenaz from '../assets/sic/members/ecenaz.png'
import Leo from '../assets/sic/members/leo.png'
import Selin from '../assets/sic/members/selin.png'
import Isaure from '../assets/sic/members/isaure.png'
import Hadrien from '../assets/sic/members/hadrien.png'
import Cyril from '../assets/sic/members/cyril.png'
import Basile from '../assets/sic/members/basile.png'
import Stelios from '../assets/sic/members/stelios.png'
import Victor from '../assets/sic/members/victor.png'
import Laurene from '../assets/sic/members/laurene.png'


function Members() {
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

    let members = [
        {
            "category-name": {
                "FR": "Présidence",
                "EN": "Presidency"
            },
            "category-members": [
                {
                    "name": "Victor Pennacino",
                    "profile-picture": Victor,
                    "role": {
                        "FR": "Président",
                        "EN": "President"
                    },
                    "linkedin": "https://www.linkedin.com/in/victor-pennacino/",
                    "people_epfl": "https://people.epfl.ch/victor.pennacino"
                }
            ]  
        },
        {
            "category-name": {
                "FR": "Equipe compétition",
                "EN": "Competition Team"
            },
            "category-members": [
                {
                    "name": "Cyril Barthelet",
                    "profile-picture": Cyril,
                    "role": {
                        "FR": "Chef d'équipe",
                        "EN": "Team Leader"
                    },
                    "linkedin": "https://www.linkedin.com/in/cyril-barthelet/",
                    "people_epfl": "https://people.epfl.ch/cyril.barthelet"
                },
                {
                    "name": "Hadrien Legros",
                    "profile-picture": Hadrien,
                    "role": {
                        "FR": "Chef d'équipe",
                        "EN": "Team Leader"
                    },
                    "linkedin": "https://www.linkedin.com/in/hadrien-legros/",
                    "people_epfl": "https://people.epfl.ch/hadrien.legros"
                },
                {
                    "name": "Nathan Heiniger",
                    "profile-picture": null,
                    "role": {
                        "FR": "Trésorier - Charte de durabilité",
                        "EN": "Treasurer - Sustainability charter"
                    },
                    "linkedin": "https://www.linkedin.com/in/nathan-heiniger-84298a330/",
                    "people_epfl": "https://people.epfl.ch/nathan.heiniger"
                },
                {
                    "name": "Isaure Imberton",
                    "profile-picture": Isaure,
                    "role": {
                        "FR": "Contact mentor",
                        "EN": "Mentor outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/isaure-imberton-6b45761bb/",
                    "people_epfl": "https://people.epfl.ch/isaure.imberton"
                },
                {
                    "name": "Selin Kandiyoti",
                    "profile-picture": Selin,
                    "role": {
                        "FR": "Charte de durabilité",
                        "EN": "Sustainability charter"
                    },
                    "linkedin": "https://www.linkedin.com/in/passiontomaketheworldabetterplace/",
                    "people_epfl": "https://people.epfl.ch/selin.kandiyotieskenazi"
                },
                {
                    "name": "Stelios Lemos",
                    "profile-picture": Stelios,
                    "role": {
                        "FR": "Contact université",
                        "EN": "University outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/stelioslemos/",
                    "people_epfl": "https://people.epfl.ch/stelios.lemos"
                }
            ]  
        },
        {
            "category-name": {
                "FR": "Equipe forum",
                "EN": "Forum Team"
            },
            "category-members": [
                {
                    "name": "Ilaria Rossinelli",
                    "profile-picture": null,
                    "role": {
                        "FR": "Cheffe d'équipe",
                        "EN": "Team Leader"
                    },
                    "linkedin": "",
                    "people_epfl": "https://people.epfl.ch/ilaria.rossinelli"
                },
                {
                    "name": "Aymeric De Chillaz",
                    "profile-picture": null,
                    "role": {
                        "FR": "Chef d'équipe",
                        "EN": "Team Leader"
                    },
                    "linkedin": "https://www.linkedin.com/in/aymeric-de-chillaz-7478801a5/",
                    "people_epfl": "https://people.epfl.ch/aymeric.dechillaz"
                },
                {
                    "name": "William Oh",
                    "profile-picture": null,
                    "role": {
                        "FR": "Contact entreprises",
                        "EN": "Company outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/william-oh-/",
                    "people_epfl": "https://people.epfl.ch/william.oh"
                },
                {
                    "name": "Alexander Odermatt",
                    "profile-picture": null,
                    "role": {
                        "FR": "Contact laboratoires",
                        "EN": "Laboratory outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/alexander-odermatt-87b450234/",
                    "people_epfl": "https://people.epfl.ch/alexander.odermatt"
                },
                {
                    "name": "Arthur Removille",
                    "profile-picture": null,
                    "role": {
                        "FR": "Secrétaire - Intervenants & tables rondes",
                        "EN": "Secretary - Speakers & panels"
                    },
                    "linkedin": "https://www.linkedin.com/in/arthur-removille-48688931a/",
                    "people_epfl": "https://people.epfl.ch/arthur.removille"
                },
                {
                    "name": "Pablo Palle",
                    "profile-picture": null,
                    "role": {
                        "FR": "Contact entreprises",
                        "EN": "Company outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/pablo-palle-b02835256/",
                    "people_epfl": "https://people.epfl.ch/pablo.palle"
                },
                {
                    "name": "Dimitri Wybaillie",
                    "profile-picture": null,
                    "role": {
                        "FR": "Contact entreprises",
                        "EN": "Company outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/dimitri-wybaillie-159ba2264/",
                    "people_epfl": "https://people.epfl.ch/dimitri.wybaillie"
                },
                {
                    "name": "Leo Meier",
                    "profile-picture": Leo,
                    "role": {
                        "FR": "Trésorier - Intervenants & tables rondes",
                        "EN": "Treasurer - Speakers & panels"
                    },
                    "linkedin": "",
                    "people_epfl": "https://people.epfl.ch/louise.meier"
                },
                {
                    "name": "Basile Costes",
                    "profile-picture": Basile,
                    "role": {
                        "FR": "Contact entreprises",
                        "EN": "Company outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/basile-costes-5087b2180/",
                    "people_epfl": "https://people.epfl.ch/basile.costes"
                },
                {
                    "name": "Laurène Tribolet",
                    "profile-picture": Laurene,
                    "role": {
                        "FR": "Contact jury",
                        "EN": "Jury outreach"
                    },
                    "linkedin": "https://www.linkedin.com/in/laurene-tribolet/?original_referer=https://www.google.com/&originalSubdomain=ch",
                    "people_epfl": "https://people.epfl.ch/laurene.tribolet"
                }
            ]  
        },
        {
            "category-name": {
                "FR": "Equipe communication",
                "EN": "Communication Team"
            },
            "category-members": [
                {
                    "name": "Ecenaz Ozkorkut",
                    "profile-picture": Ecenaz,
                    "role": {
                        "FR": "Cheffe d'équipe - Identité graphique",
                        "EN": "Team Leader - Graphical identity"
                    },
                    "linkedin": "https://www.linkedin.com/in/ecenaz-%C3%B6zkorkut-4ab507329/",
                    "people_epfl": "https://people.epfl.ch/ecenaz.ozkorkut"
                },
                {
                    "name": "Killian Hinard",
                    "profile-picture": null,
                    "role": {
                        "FR": "Webmaster",
                        "EN": "Webmaster"
                    },
                    "linkedin": "",
                    "people_epfl": "https://people.epfl.ch/killian.hinard"
                },
                {
                    "name": "Eloïse Pennacino",
                    "profile-picture": null,
                    "role": {
                        "FR": "Graphismes",
                        "EN": "Graphismes"
                    },
                    "linkedin": "",
                    "people_epfl": "https://people.epfl.ch/eloise.pennacino"
                },
            ]
        },
        {
            "category-name": {
                "FR": "Autre",
                "EN": "Other"
            },
            "category-members": [
                {
                    "name": "Joris Zufferey",
                    "profile-picture": null,
                    "role": {
                        "FR": "Contact Mediacom",
                        "EN": "Mediacom contact"
                    },
                    "linkedin": "https://www.linkedin.com/in/joriszufferey/",
                    "people_epfl": "https://people.epfl.ch/joris.zufferey"
                }
            ]
        }
    ]

    return (<>
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    {members.map(memberCategory => (
                        <div className="profile-per-category" key={`category-div-${memberCategory["category-name"][lang]}`}>
                            <div className="category-header">
                                <div className="stripes"></div>
                                <h2> {memberCategory["category-name"][lang]} </h2>
                                <div className="stripes"></div>
                            </div>
                            <div className="profile-gallery">
                                {memberCategory["category-members"].map((memberData, n) => (
                                    <ProfileCard key={`${n}${lang}`} lang={lang} profileData={memberData} />
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    </>)
}

export default Members