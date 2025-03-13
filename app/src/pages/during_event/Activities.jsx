import { useState, useEffect } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SpeakerCard from '../../components/SpeakerCard'
import CompanyStandCard from '../../components/CompanyStandCard'

import speakers from '../../data/activities/speakers'
import companies_stands from '../../data/activities/companies_stands'
import workshops from '../../data/activities/workshops'
import WorkshopCard from '../../components/WorkshopCard'

function Activities() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "activités" : "activities"} | EPFL Sustainable Innovation Challenge`;
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

    const ACTIVITIES_PAGE_ELEMENTS_LOCALE = {
        "speakers": {
            "EN": "Speakers",
            "FR": "Intervernants"
        },
        "workshops": {
            "EN": "Workshops",
            "FR": "Ateliers"
        },
        "stands": {
            "EN": "Stands",
            "FR": "Stands"
        }
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    <h2>{ACTIVITIES_PAGE_ELEMENTS_LOCALE["speakers"][lang]}</h2>
                    <div className="gallery">
                        {speakers.map(speaker => <SpeakerCard speaker_data={speaker} />)}
                    </div>
                    <h2>{ACTIVITIES_PAGE_ELEMENTS_LOCALE["workshops"][lang]}</h2>
                    <div className="gallery">
                        {workshops.map(workshop => <WorkshopCard workshop_data={workshop} />) }
                    </div>
                    <h2>{ACTIVITIES_PAGE_ELEMENTS_LOCALE["stands"][lang]}</h2>
                    <div className="gallery">
                        {companies_stands.map(company_stand => <CompanyStandCard company_stand_data={company_stand} />)}
                    </div>
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}

export default Activities