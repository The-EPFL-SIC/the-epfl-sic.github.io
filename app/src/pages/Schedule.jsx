/* 
    This is the minimal base template
    for a new page on the website 

    To start with a new page duplicate this file and rename it with the new page name
*/
import { useState, useEffect } from 'react'
import '../styles/pages/Contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SwitchButton from '../components/SwitchButton'

function Schedule() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "EMPTY_PAGE_TITLE_FR" : "EMPTY_PAGE_TITLE_EN"} | EPFL Sustainable Innovation Challenge`;
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

    // the page content
    const SCHEDULE_ELEMENTS_LOCALE = {
        "one-text": {
            "FR": "french version of the text",
            "EN": "english version of the text"
        }
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    this is the schedule, coming soon
                    <SwitchButton />
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}

export default Schedule