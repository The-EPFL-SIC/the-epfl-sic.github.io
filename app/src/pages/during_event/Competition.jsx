import { useState, useEffect } from 'react'
import '../../styles/pages/Contact.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Competition() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "la compétition" : "the challenge"} | EPFL Sustainable Innovation Challenge`;
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

    const CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE = {
        "page-presentation": {
            "EN": "Here you will find all the key information about the event, including the speakers, the selected teams, and the jury members.",
            "FR": "Vous trouverez ici toutes les informations essentielles sur l'événement, notamment les intervenants, les équipes sélectionnées et les membres du jury."
        },
        "jury": {
            "EN": "The Jury",
            "FR": "Le jury"
        },
        "selected-teams": {
            "EN": "Selected Teams",
            "FR": "Équipes sélectionnées"
        },
        "speakers": {
            "EN": "Speakers",
            "FR": "Intervenants"
        }
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["speakers"][lang]}</h2>
                    <div>
                        
                    </div>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["selected-teams"][lang]}</h2>
                    <div>

                    </div>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["jury"][lang]}</h2>
                    <p>
                        A huge thank you to our esteemed jury members, whose expertise and dedication have helped select the 12 winning teams 
                        for this year's Sustainable Innovation Challenge.<br/>
                        Their insights are shaping the future of sustainability-driven innovation, ensuring that each project stays true to its 
                        mission of making a positive impact. 🌍✨<br/>
                        We are proud to have such an incredible lineup of professionals guiding the next generation of innovators. 🙌
                    </p>
                    <div>

                    </div>
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}

export default Competition