import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Blog() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "le blog" : "the blog"} | EPFL Sustainable Innovation Challenge`;
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

    const BLOG_ELEMENTS_LOCALE = {
        "introduction-to-blog": {
            "EN": "Welcome to our blog gallery — a curated collection of inspiring moments, stories, and visuals that capture the essence of our journey.",
            "FR": "Bienvenue dans notre galerie de blog — une collection soigneusement sélectionnée de moments inspirants, d'histoires et de visuels qui capturent l'essence de notre parcours."
        }
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    <p>
                        {BLOG_ELEMENTS_LOCALE["introduction-to-blog"][lang]}
                    </p>
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}

export default Blog