import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function SelectedTeam() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "équipe sélectionnée" : "selected team"} | EPFL Sustainable Innovation Challenge`;
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

    // page content
    const SELECTED_TEAM_ELEMENTS_LOCALE = {
        "one-text": {
            "FR": "french version of the text",
            "EN": "english version of the text"
        }
    }

    const { teamId } = useParams()

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    this is the selected team page with id '{teamId}'
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}

export default SelectedTeam