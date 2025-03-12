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
        "jury": {
            "EN": "The Jury",
            "FR": "Le jury"
        },
        "selected-teams": {
            "EN": "Selected Teams",
            "FR": "Équipes sélectionnées"
        },
        "honorary-teams": {
            "EN": "Honorary teams",
            "FR": "Sélections honorifiques"
        },
        "introduction-to-jury-1": {
            "EN": "A huge thank you to our esteemed jury members, whose expertise and dedication have helped select the 12 winning teams for this year's Sustainable Innovation Challenge.",
            "FR": "Un immense merci à nos éminents membres du jury, dont l’expertise et le dévouement ont permis de sélectionner les 12 équipes lauréates de cette édition du Sustainable Innovation Challenge."
        },
        "introduction-to-jury-2": {
            "EN": "Their insights are shaping the future of sustainability-driven innovation, ensuring that each project stays true to its mission of making a positive impact.",
            "FR": "Leurs perspectives façonnent l'avenir de l'innovation axée sur la durabilité, garantissant que chaque projet reste fidèle à sa mission d'avoir un impact positif."
        },
        "introduction-to-jury-3": {
            "EN": "We are proud to have such an incredible lineup of professionals guiding the next generation of innovators.",
            "FR": "Nous sommes fiers de pouvoir compter sur un groupe aussi exceptionnel de professionnels pour guider la prochaine génération d'innovateurs."
        }
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["selected-teams"][lang]}</h2>
                    <div>

                    </div>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["honorary-teams"][lang]}</h2>
                    <div>

                    </div>
                    <h2>{CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["jury"][lang]}</h2>
                    <p>
                        {CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["introduction-to-jury-1"][lang]}<br/>
                        {CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["introduction-to-jury-2"][lang]}<br/>
                        {CURRENT_EDITION_INFORMATIONS_ELEMENTS_LOCALE["introduction-to-jury-3"][lang]}<br/>
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