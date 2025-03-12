import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfileCard from '../../components/ProfileCard'
import '../../styles/pages/Members.css'

import sic_members from '../../data/sic_members'

function Members() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "membres" : "members"} | EPFL Sustainable Innovation Challenge`;
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

    return (<>
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    {sic_members.map(memberCategory => (
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