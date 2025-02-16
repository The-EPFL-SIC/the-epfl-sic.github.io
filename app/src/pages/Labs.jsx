import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/Informations.css'

import goal_icon from '../assets/icons/goal.png'
import commitment_icon from '../assets/icons/commitment.png'
import offer_icon from '../assets/icons/offer.png'

function Labs() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "laboratoires" : "labs"} | EPFL Sustainable Innovation Challenge`;
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
    
    const LABS_ELEMENTS_LOCALE = {
        "title": {
            "FR": "Chez SIC, nous sommes inspirés par celles et ceux qui s'attaquent à des problèmes environnementaux critiques et complexes avec des solutions durables et innovantes. Nous croyons que davantage de personnes doivent s'engager dans de tels projets à fort impact et qu'en unissant nos efforts, nous pouvons avoir un impact encore plus grand. C'est pourquoi nous voulons collaborer avec VOUS.",
            "EN": "At SIC, we are inspired by those who tackle critical, challenging environmental problems with sustainable and innovative solutions. We believe more people need to engage in such impactful projects, and by uniting our efforts we can achieve far greater impact. That is why we want to partner with YOU. "
        },
        "information-sections": [
            {
                "title": {
                    "FR": "Nos Objectifs",
                    "EN": "Our Goals"
                },
                "img": goal_icon,
                "introductory-paragraph": {
                    "FR": "La mission du Sustainable Innovation Challenge (SIC) est de promouvoir des solutions durables, efficaces, impactantes et évolutives pour répondre aux problèmes dans divers secteurs de la durabilité. Nous visons à :",
                    "EN": "The mission of the Sustainable Innovation Challenge (SIC), is to foster impactful, scalable, effective, sustainable, solutions to address problems across various sectors of sustainability. We aim to:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Encourager l'innovation pour l'action environnementale :",
                            "EN": "Foster innovation for environmental action:"
                        },
                        "text": {
                            "FR": "Soutenir le développement de solutions technologiques qui répondent aux défis environnementaux pressants tels que le changement climatique, la perte de biodiversité, la gestion des déchets et l'efficacité des ressources. En responsabilisant les équipes de recherche et en favorisant une collaboration directe avec d'autres laboratoires, entreprises ambitieuses et ONG, nous inspirons l'émergence de nouvelles idées et partenariats impactants.",
                            "EN": "Support the development of technological solutions that address pressing environmental challenges such as climate change, biodiversity loss, waste management, and resource efficiency. By empowering research teams and fostering direct collaboration with other labs, ambitious companies, and NGOs, we inspire new ideas and impactful partnerships to emerge."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Construire des ponts entre les secteurs :",
                            "EN": "Build bridges between sectors:"
                        },
                        "text": {
                            "FR": "Créer une plateforme où les chercheurs, laboratoires, entreprises, ONG et étudiants peuvent collaborer de manière significative, échangeant connaissances et ressources pour faire avancer l'innovation durable.",
                            "EN": "Create a platform where researchers, labs, companies, NGOs, and students can collaborate meaningfully, exchanging knowledge and resources to drive sustainable innovation forward."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Sensibiliser à l'impact de la technologie sur les objectifs de durabilité :",
                            "EN": "Raise awareness of technology's impact on sustainability goals:"
                        },
                        "text": {
                            "FR": "Aider les participants et les partenaires à comprendre le rôle crucial de la recherche et de l'innovation technologique dans la résolution des enjeux environnementaux, notamment les objectifs climatiques, la conservation de la biodiversité et la réduction des déchets.",
                            "EN": "Help participants and partners understand the critical role of research and technological innovation in addressing environmental issues, including climate targets, biodiversity conservation, and waste reduction."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Mettre en valeur les approches diverses de la durabilité :",
                            "EN": "Showcase diverse approaches to sustainability:"
                        },
                        "text": {
                            "FR": "Mettre en avant un spectre de solutions allant des initiatives low-tech de base aux innovations high-tech de pointe, démontrant la valeur de la collaboration entre différentes méthodes et secteurs.",
                            "EN": "Highlight a spectrum of solutions from grassroots low-tech initiatives to cutting-edge high-tech innovations, demonstrating the value of collaboration between different methods and sectors."
                        }
                    }
                ]
            },
            {
                "title": {
                    "FR": "Notre Engagement",
                    "EN": "Our Commitment"
                },
                "img": commitment_icon,
                "introductory-paragraph": {
                    "FR": "Nous reconnaissons les besoins uniques et les contributions des chercheurs et laboratoires. En tant que partenaire, nous promettons de :",
                    "EN": "We recognize the unique needs and contributions of researchers and labs. As a partner, we promise to:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Offrir des opportunités de collaboration significatives :",
                            "EN": "Deliver meaningful collaboration opportunities:"
                        },
                        "text": {
                            "FR": "Faciliter les connexions entre votre laboratoire, d'autres groupes de recherche, les talents des universités européennes, et les experts industriels. Que ce soit par des échanges entre pairs, du mentorat, des ateliers ou des événements de réseautage, nous veillons à ce que vous jouiez un rôle vital dans la mise en forme des innovations futures.",
                            "EN": "Facilitate connections between your lab, other research groups, EPFL and ETH talent, and industry experts. Whether through peer-to-peer exchanges, mentorship, workshops, or networking events, we ensure you play a vital role in shaping future innovations."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Mettre en avant votre engagement envers la durabilité :",
                            "EN": "Showcase your commitment to sustainability:"
                        },
                        "text": {
                            "FR": "Offrir à votre laboratoire une plateforme pour démontrer son leadership en matière de recherche environnementale, d'inclusion et d'innovation impactante à un large public d'étudiants, d'académiques et de pairs industriels.",
                            "EN": "Provide a platform for your lab to demonstrate leadership in environmental research, inclusion, and impactful innovation to a broad audience of students, academics, and industry peers."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Garantir l'alignement avec des valeurs partagées :",
                            "EN": "Ensure alignment with shared values:"
                        },
                        "text": {
                            "FR": "Nous ne collaborons qu'avec des groupes partageant notre engagement pour la durabilité, garantissant que les collaborations reposent sur la confiance, l'intégrité et une vision commune.",
                            "EN": "We only partner with groups that share our commitment to sustainability, ensuring collaborations are built on trust, integrity, and a shared vision."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Soutenir votre parcours de recherche :",
                            "EN": "Support your research journey:"
                        },
                        "text": {
                            "FR": "Que vous recherchiez de l'inspiration, des talents ou des opportunités de partenariat, le SIC est conçu pour créer des connexions durables allant au-delà de l'événement lui-même.",
                            "EN": "Whether you're seeking inspiration, talent, or partnership opportunities, SIC is designed to create lasting connections that go beyond the event itself."
                        }
                    }
                ]
            },
            {
                "title": {
                    "FR": "Notre Offre",
                    "EN": "Our Offer"
                },
                "img": offer_icon,
                "introductory-paragraph": {
                    "FR": "Collaborer avec SIC ouvre des portes aux chercheurs et laboratoires pour façonner activement l'avenir de la durabilité :",
                    "EN": "Partnering with SIC opens doors for researchers and labs to actively shape the future of sustainability:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Accédez à de nouvelles perspectives :",
                            "EN": "Access fresh perspectives:"
                        },
                        "text": {
                            "FR": "Collaborez avec des équipes d'étudiants motivés et d'autres chercheurs qui abordent des défis réels avec une pensée innovante et des approches multidisciplinaires.",
                            "EN": "Collaborate with motivated student teams and other researchers tackling real-world challenges using innovative thinking and multidisciplinary approaches."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Stimulez le leadership intellectuel :",
                            "EN": "Drive thought leadership:"
                        },
                        "text": {
                            "FR": "Animez des ateliers, participez à des panels ou encadrez des équipes d'étudiants pour positionner votre laboratoire comme un pionnier en recherche environnementale et durabilité.",
                            "EN": "Lead workshops, participate in panels, or mentor student teams to position your lab as a pioneer in sustainability and environmental research."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Élargissez votre réseau :",
                            "EN": "Expand your network:"
                        },
                        "text": {
                            "FR": "Interagissez avec d'autres laboratoires de recherche à travers l'Europe, des entreprises ambitieuses, des ONG et des leaders industriels pour bâtir des partenariats durables.",
                            "EN": "Engage with other research labs across Europe, ambitious companies, NGOs, and industry leaders to build partnerships that last."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Améliorez votre visibilité :",
                            "EN": "Enhance your visibility:"
                        },
                        "text": {
                            "FR": "Mettez en valeur les recherches et contributions de votre laboratoire aux pratiques durables à l'EPFL et au-delà. Vous gérerez un stand lors de l'événement, vous permettant de présenter vos travaux, d'interagir avec les participants et de mettre en avant votre expertise.",
                            "EN": "Showcase your lab's research and contributions to sustainable practices at EPFL and beyond. You will manage a stand during the event, allowing you to display your work, interact with participants, and highlight your expertise."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Découvrez des solutions concrètes :",
                            "EN": "Discover actionable solutions:"
                        },
                        "text": {
                            "FR": "Explorez des idées émergentes et des concepts qui peuvent être intégrés à votre thématique de recherche ou aider à résoudre des défis en cours dans votre travail.",
                            "EN": "Explore emerging ideas and concepts that can integrate into your research focus or help solve ongoing challenges in your work."
                        }
                    }
                ]
            },
        ],
        "timeline": {
            "title": {
                "FR": "Chronologie",
                "EN": "Timeline"
            },
            "introductory-paragraph": {
                "FR": "Voici comment SIC se déroule pour votre laboratoire :",
                "EN": "This is how SIC unfolds for your lab:"
            },
            "steps": [
                {
                    "bold-text": {
                        "FR": "Inscription au Partenariat (En cours)",
                        "EN": "Partnership Enrollment (Ongoing)"
                    },
                    "text": {
                        "FR": "Contactez-nous pour rejoindre notre mission pour un avenir durable.",
                        "EN": "Reach out to join us as a partner, sharing our mission for a sustainable future."
                    }   
                },
                {
                    "bold-text": {
                        "FR": "Discussions Pré-Événement",
                        "EN": "Pre-Event Discussions"
                    },
                    "text": {
                        "FR": "Participez aux discussions préliminaires pour comprendre vos besoins et objectifs, concernant cet événement et la durabilité dans un sens plus large. Nous adapterons les opportunités de collaboration avec des étudiants, des chercheurs, des laboratoires, des entreprises et des ONG pour garantir que votre implication soit impactante et vos efforts partagés.",
                        "EN": "Take part in early conversations to understand your needs and goals, regarding this event and sustainability in a broader sense. We will tailor opportunities to collaborate with students, researchers, labs, companies, and NGOs, ensuring your involvement is impactful and your efforts are shared."
                    }   
                },
                {
                    "bold-text": {
                        "FR": "Participation à l'événement :",
                        "EN": "Event Participation: "
                    },
                    "text": {
                        "FR": "Rejoignez-nous les 13 et 14 mars sur le campus de l'EPFL à Lausanne, en Suisse - obtenez votre stand et présentez vos recherches, tout en réseautant avec des étudiants talentueux, des partenaires industriels, des chercheurs et des experts, et acquérez de nouvelles perspectives lors d'une expo scientifique.",
                        "EN": "Join us on March 13-14th at EPFL Campus, Lausanne, Switzerland - get your stand and showcase your research, while networking with?/meeting? talented students, industry partners, researchers and experts, and gain new insights from the scientific expo."
                    }   
                }
            ]
        },
        "contact": {
            "title": {
                "FR": "Nous Contacter",
                "EN": "Contact Us"
            },
            "introductory-paragraph": {
                "FR": "Nous sommes impatients de travailler avec vous ! Que vous soyez un laboratoire de recherche, un chercheur ou un groupe universitaire, nous sommes là pour discuter de toute opportunité de collaboration.",
                "EN": "We are eager to work together with you! Whether you are a research lab, a researcher, or an academic group, we are here to discuss any opportunity to collaborate."
            },
            "contact-button": {
                "display": {
                    "FR": "formulaire de contact laboratoires",
                    "EN": "labs contact form"
                },
                "to": "https://forms.gle/HYVjcZ8vYw9bY5GbA"
            }
        },
        "let-s-work-together": {
            "FR": "Travaillons ensemble pour façonner un avenir durable.",
            "EN": "Let's work together to shape a sustainable future."
        }
    }

    return (
        <>
            <div className="flexer">
                <section className="main">
                    <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                    <main>
                        <h1>
                            {LABS_ELEMENTS_LOCALE["title"][lang]}
                        </h1>
                        {LABS_ELEMENTS_LOCALE["information-sections"].map((informationSection, n1) => (
                            <div key={`${n1}-${lang}`}>
                                <div className="benefits-header">
                                    {informationSection["img"] && <img src={informationSection["img"]} alt={informationSection["title"][lang]}/>}
                                    <h2>{informationSection["title"][lang]}</h2>
                                </div>
                                <p>
                                    {informationSection["introductory-paragraph"][lang]}
                                </p>
                                <ul>
                                    {informationSection["points"].map((point, n2) => (
                                        <li key={`${informationSection['title'][lang]}-${n2}`}><strong>{point["bold-text"][lang]}</strong> {point["text"][lang]}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                        <h2 className="margin-top-h2">{LABS_ELEMENTS_LOCALE["timeline"]["title"][lang]}</h2>
                        <p>
                            {LABS_ELEMENTS_LOCALE["timeline"]["introductory-paragraph"][lang]}
                        </p>
                        <ol>
                            {LABS_ELEMENTS_LOCALE["timeline"]["steps"].map((step, n) => (
                                <li key={`${LABS_ELEMENTS_LOCALE["timeline"][lang]}-${n}`}><strong>{step["bold-text"][lang]}</strong> {step["text"][lang]}</li>
                            ))}
                        </ol>
                        <h2 className="margin-top-h2">{LABS_ELEMENTS_LOCALE["contact"]["title"][lang]}</h2>
                        <p>
                            {LABS_ELEMENTS_LOCALE["contact"]["introductory-paragraph"][lang]}
                        </p>
                        <a className="contact-form-button" href={LABS_ELEMENTS_LOCALE["contact"]["contact-button"]["to"]}>{LABS_ELEMENTS_LOCALE["contact"]["contact-button"]["display"][lang]}</a>
                        <p>
                            {LABS_ELEMENTS_LOCALE["let-s-work-together"][lang]}
                        </p>
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default Labs