import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/components/Header.css'
import ScrollableMenu from './ScrollableMenu';
import logo from '../assets/sic/logo.svg'

import is_event_happening from '../is_event_happening';

function Header({saveAndChangeLang, lang}) {
    const HEADER_ELEMENTS_LOCALE = {
        "scrollableElements": [
            {
                title: {
                    "FR": "Evenements",
                    "EN": "Events"
                },
                elements: (is_event_happening)? [
                    {
                        display: {
                            "FR": "Activités",
                            "EN": "Activities"
                        },
                        to: "/activities"
                    },
                    {
                        display: {
                            "FR": "Horaires",
                            "EN": "Schedule"
                        }, 
                        to: "/event-schedule"
                    },
                    {
                        display: {
                            "FR": "Le challenge",
                            "EN": "The challenge"
                        }, 
                        to: "/the-challenge"
                    },
                    {
                        display: {
                            "FR": "Le blog",
                            "EN": "The blog"
                        }, 
                        to: "/blog"
                    }
                ] : 
                [
                    {
                        display: {
                            "FR": "Entreprises",
                            "EN": "Companies"
                        }, 
                        to: "/companies"
                    },
                    {
                        display: {
                            "FR": "Laboratoires",
                            "EN": "Labs"
                        }, 
                        to: "/labs"
                    },
                    {
                        display: {
                            "FR": "Le challenge",
                            "EN": "The challenge"
                        }, 
                        to: "/challenge-inscription"
                    },
                    {
                        display: {
                            "FR": "Le blog",
                            "EN": "The blog"
                        }, 
                        to: "/blog"
                    }
                ]
            },  
            {
                title: {
                    "FR": "L'équipe",
                    "EN": "The Team"
                },
                elements: [
                    {
                        display: {
                            "FR": "Membres", 
                            "EN": "Members"
                        },
                        to: "/members"
                    },
                    {
                        display: {
                            "FR": "Notre engagement", 
                            "EN": "Our Engagement"
                        },
                        to: "/our-engagement"
                    },
                    {
                        display: {
                            "FR": "PV - status - AG", 
                            "EN": "PV - status - AG"
                        },
                        to: "/pv-status-ag"
                    }
                ]
            }
        ],
        "contact-button": {
            display: {
                "FR": "Nous Contacter", 
                "EN": "Contact Us"
            },
            to: "/contact"
        },
        "change-language": {
            "FR": "Modifier la langue",
            "EN": "Change language"
        }
    }

    let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        function closeMobileMenuOnResize() {
            console.log("closing mobile menu")
            setIsMobileMenuOpen(false)
        }

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('resize', closeMobileMenuOnResize);
        } else {
            document.body.style.overflow = '';
            window.removeEventListener('resize', closeMobileMenuOnResize);
        }
        return () => {
            // Reset on unmount
            document.body.style.overflow = ''; 
            window.removeEventListener('resize', closeMobileMenuOnResize);
        };
    }, [isMobileMenuOpen])

    return (
        <>
        <header className={(isMobileMenuOpen)? "mobile-menu-is-open" : "mobile-menu-is-closed"}>
            <Link className="logo" to="/"><img alt="sic logo" src={logo} /></Link>
            <nav className="desktop">
                {
                    HEADER_ELEMENTS_LOCALE['scrollableElements'].map(section => <ScrollableMenu key={section["title"][lang]} data={section} lang={lang} />)
                }
                <Link to={HEADER_ELEMENTS_LOCALE["contact-button"]["to"]}>{HEADER_ELEMENTS_LOCALE["contact-button"]["display"][lang]}</Link>
            </nav>
            <button id="hamburger-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{(isMobileMenuOpen)?"x":"☰"}</button>
        </header>
        <nav className={(isMobileMenuOpen)? "opened-mobile-menu" : "closed-mobile-menu"}>
            {
                HEADER_ELEMENTS_LOCALE['scrollableElements'].map(section => (<div key={`mobile-nav${section["title"][lang]}`}>
                    <h2 >{section["title"][lang]}</h2>
                    {section["elements"].map(elem => <Link to={elem["to"]} key={`mobile-nav${elem["display"][lang]}`}>{elem["display"][lang]}</Link>)}
                </div>))
            }
            <h2>{HEADER_ELEMENTS_LOCALE["change-language"][lang]}</h2>
            <button onClick={() => saveAndChangeLang('FR')}>FR</button>
            <button onClick={() => saveAndChangeLang('EN')}>EN</button>
            <Link className="contact-button" to={HEADER_ELEMENTS_LOCALE["contact-button"]["to"]}>{HEADER_ELEMENTS_LOCALE["contact-button"]["display"][lang]}</Link>
        </nav>
        </>
    )
}

export default Header