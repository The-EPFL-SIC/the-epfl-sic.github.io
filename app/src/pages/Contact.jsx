import { useState, useEffect } from 'react'
import '../styles/pages/Contact.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "nous contacter" : "contact us"} | EPFL Sustainable Innovation Challenge`;
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

    const CONTACT_ELEMENTS_LOCALE = {
        "title": {
            "FR": "Nous Contacter",
            "EN": "Contact Us"
        },
        "object": {
            "FR": "objet",
            "EN": "object"
        },
        "your-message": {
            "FR": "votre message ici *",
            "EN": "your message here *"
        }
    }

    return (
        <>
            <div className="flexer">
                <section className="main">
                    <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                    <main>
                        <form action="https://formsubmit.co/sic@epfl.ch" method="POST">
                            <h1>{CONTACT_ELEMENTS_LOCALE["title"][lang]}</h1>
                            <input type="email" name="email" placeholder="email *" required />
                            <input type="text" name="objet" placeholder={CONTACT_ELEMENTS_LOCALE["object"][lang]} />
                            <textarea name="message" rows="7" placeholder={CONTACT_ELEMENTS_LOCALE["your-message"][lang]} required>
                            </textarea>
                            <input type="submit" value="submit"/>
                        </form>
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default Contact