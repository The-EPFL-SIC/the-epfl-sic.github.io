import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/pages/Informations.css'

import goal_icon from '../assets/icons/goal.png'
import commitment_icon from '../assets/icons/commitment.png'
import offer_icon from '../assets/icons/offer.png'

function Companies() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

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

    const COMPANIES_ELEMENTS_LOCALE = {
        "title": {
            "FR": "Chez SIC, nous sommes inspirés par celles et ceux qui s'attaquent à des problèmes environnementaux critiques et complexes avec des solutions durables et innovantes. Nous croyons que davantage de personnes doivent s'engager dans de tels projets à fort impact et qu'en unissant nos efforts, nous pouvons avoir un impact encore plus grand. C'est pourquoi nous voulons collaborer avec VOUS.",
            "EN": "At SIC, we are inspired by those who tackle critical, challenging environmental problems with sustainable and innovative solutions. We believe more people need to engage in such impactful projects, and by uniting our efforts we can achieve far greater impact. That is why we want to partner with YOU."
        },
        "information-sections": [
            {
                "title": {
                    "FR": "Nos objectifs",
                    "EN": "Our Goals"
                },
                "img": goal_icon,
                "introductory-paragraph": {
                    "FR": " La Sustainable Innovation Challenge (SIC) a pour mission de promouvoir des solutions durables, efficaces, évolutives et ayant un impact, afin de résoudre des problèmes dans divers secteurs du développement durable. Nous visons à :",
                    "EN": "The mission of the Sustainable Innovation Challenge (SIC), is to drive/foster impactful, scalable, effective, sustainable solutions to address problems across various sectors of sustainability. We aim to:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Favoriser l'innovation pour l'action climatique :",
                            "EN": "Foster innovation for climate action:"
                        },
                        "text": {
                            "FR": "Soutenir le développement de solutions technologiques, sociales et économiques qui répondent directement aux défis environnementaux urgents. En responsabilisant les équipes d'étudiants et en favorisant la collaboration directe avec les entreprises, les startups et les ONG, nous suscitons l'émergence de nouvelles idées et de nouveaux partenariats.",
                            "EN": "Support the development of technological, social, and economic solutions that directly address pressing environmental challenges. By empowering student teams and fostering direct collaboration with companies, startups, and NGOs, we inspire new ideas and partnerships to emerge."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Construire des liens entre domaines:",
                            "EN": "Build bridges between sectors:"
                        },
                        "text": {
                            "FR": "Créer une plateforme où les entreprises, les startups, les ONG et les étudiants peuvent collaborer de manière significative, en échangeant des connaissances et des ressources pour faire avancer l'innovation durable.",
                            "EN": "Create a platform where companies, startups, NGOs, and students can collaborate meaningfully, exchanging knowledge and resources to drive sustainable innovation forward."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Sensibiliser et contextualiser l'impact de la technologie sur les objectifs de développement durable :",
                            "EN": "Raise awareness and contextualize technologies and their impact on sustainability goals:"
                        },
                        "text": {
                            "FR": "Aider les participants et les partenaires à comprendre le rôle essentiel de l'innovation dans la réalisation des objectifs climatiques mondiaux et la réduction des émissions.",
                            "EN": "Help participants and partners understand the critical role of innovation in achieving global climate targets and reducing emissions."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Présenter diverses approches de la durabilité :",
                            "EN": "Showcase diverse approaches to sustainability:"
                        },
                        "text": {
                            "FR": "Mettre en évidence un éventail de solutions allant d'initiatives locales de faible technicité -dites Low Tech- à des innovations de pointe en matière de haute technologie, démontrant ainsi la valeur de la collaboration entre différentes méthodes et différents secteurs.",
                            "EN": "Highlight a spectrum of solutions from grassroots low-tech initiatives to cutting-edge high-tech innovations, demonstrating the value of collaboration between different methods and sectors."
                        }
                    }
                ]
            },
            {
                "title": {
                    "FR": "Nos engagements",
                    "EN": "Our Commitment"
                },
                "img": commitment_icon,
                "introductory-paragraph": {
                    "FR": "Nous reconnaissons les besoins et les contributions uniques des entreprises, des startups et des ONG. En tant que partenaire de SIC, nous nous engageons à.. :",
                    "EN": "We recognize the unique needs and contributions of companies, startups, and NGOs. As a partner in SIC, we are dedicated to:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Offrir des possibilités de collaboration significatives :",
                            "EN": "Deliver meaningful collaboration opportunities:"
                        },
                        "text": {
                            "FR": "Facilitez les connexions entre votre organisation, les meilleurs talents de l'EPFL et de l'ETH, les leaders de la recherche académique et les experts de l'industrie. Que ce soit par le biais du mentorat, d'ateliers ou d'événements de réseautage, nous nous assurons que vous jouez un rôle essentiel dans l'élaboration des innovations futures.",
                            "EN": "Facilitate connections between your organization, top EPFL and ETH talents, academic research leaders and industry experts. Whether through mentorship, workshops, or networking events, we ensure you play a vital role in shaping future innovations."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Mettez en avant votre engagement en faveur du développement durable :",
                            "EN": "Showcase your commitment to sustainability:"
                        },
                        "text": {
                            "FR": "Offrez à votre organisation une plateforme pour démontrer son leadership en matière de responsabilité environnementale, d'inclusion et d'innovation à un large public d'étudiants, d'universitaires et de pairs de l'industrie.",
                            "EN": "Give your organization a platform to demonstrate leadership in environmental responsibility, inclusion, and impactful innovation to a broad audience of students, academics, and industry peers."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Veiller à l'alignement sur des valeurs communes :",
                            "EN": "Ensure alignment with shared values:"
                        },
                        "text": {
                            "FR": "Nous ne nous associons qu'avec des organisations qui partagent notre engagement en faveur de la durabilité, en veillant à ce que les collaborations soient fondées sur la confiance, l'intégrité et une vision commune.",
                            "EN": "We only partner with organizations that share our commitment to sustainability, ensuring collaborations are built on trust, integrity, and a shared vision."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Soutenir votre démarche d'innovation :",
                            "EN": "Support your innovation journey:"
                        },
                        "text": {
                            "FR": "Que vous soyez à la recherche d'inspiration, de talents ou d'opportunités de partenariat, SIC est conçu pour créer des liens durables qui vont au-delà de l'événement lui-même.",
                            "EN": "Whether you're seeking inspiration, talent, or partnership opportunities, SIC is designed to create lasting connections that go beyond the event itself."
                        }
                    }
                ]
            },
            {
                "title": {
                    "FR": "Notre offre",
                    "EN": "Our Offer"
                },
                "img": offer_icon,
                "introductory-paragraph": {
                    "FR": "Le partenariat avec SIC permet aux entreprises, aux startups et aux ONG de façonner activement l'avenir du développement durable :",
                    "EN": "Partnering with SIC opens doors for companies, startups, and NGOs to actively shape the future of sustainability:"
                },
                "points": [
                    {
                        "bold-text": {
                            "FR": "Recrutement : ",
                            "EN": "Find talent :"
                        },
                        "text": {
                            "FR": "Rencontrez et recrutez des étudiants engagés et experimentés dans le domaine des technologies durable.",
                            "EN": "Meet and recruit committed and experienced students in the field of sustainable technologies."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Accéder à de nouvelles perspectives : ",
                            "EN": "Access fresh perspectives:"
                        },
                        "text": {
                            "FR": "Travaillez avec des équipes d'étudiants motivés qui s'attaquent à des défis concrets en faisant preuve d'innovation et en adoptant des approches pluridisciplinaires.",
                            "EN": "Work with motivated student teams tackling real-world challenges using innovative thinking and multidisciplinary approaches."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Montrez l'exemple:",
                            "EN": "Drive thought leadership:"
                        },
                        "text": {
                            "FR": "Animez des ateliers, participez à des panels ou encadrez des équipes afin de positionner votre organisation comme pionnière en matière de durabilité et d'action climatique.",
                            "EN": "Lead workshops, participate in panels, or mentor teams to position your organization as a pioneer in sustainability and climate action."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Développez votre réseau :",
                            "EN": "Expand your network:"
                        },
                        "text": {
                            "FR": "S'engager avec d'autres organisations tournées vers l'avenir, des leaders de l'industrie et des acteurs du changement pour établir des partenariats durables.",
                            "EN": "Engage with other forward-thinking organizations, industry leaders, and changemakers to build partnerships that last."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Améliorez votre visibilité :",
                            "EN": "Enhance your visibility:"
                        },
                        "text": {
                            "FR": "Présentez votre marque comme un champion des pratiques durables et un moteur de changement à l'EPFL et au-delà.",
                            "EN": "Showcase your brand as a champion of sustainable practices and a driver of impactful change at EPFL and beyond."
                        }
                    },
                    {
                        "bold-text": {
                            "FR": "Découvrez des solutions concrètes :",
                            "EN": "Discover actionable solutions:"
                        },
                        "text": {
                            "FR": "Explorez les idées et les concepts émergents qui peuvent s'intégrer dans les objectifs de durabilité de votre organisation ou dans le pipeline.",
                            "EN": "Explore emerging ideas and concepts that can integrate into your organization's sustainability goals or pipeline."
                        }
                    }
                ]
            }
        ],
        "timeline": {
            "title": {
                "FR": "Timeline",
                "EN": "Timeline"
            },
            "introductory-paragraph": {
                "FR": "C'est ainsi que SIC se déroule pour votre entreprise :",
                "EN": "This is how SIC unfolds for your company:"
            },
            "steps": [
                {
                    "bold-text": {
                        "FR": "Inscription au partenariat (en cours)",
                        "EN": "Partnership Enrollment (Ongoing)"
                    },
                    "text": {
                        "FR": "N'hésitez pas à nous rejoindre en tant que partenaire, en partageant notre mission pour un avenir durable.",
                        "EN": "Reach out to join us as a partner, sharing our mission for a sustainable future."
                    }   
                },
                {
                    "bold-text": {
                        "FR": "Discussions préalables à l'événement",
                        "EN": "Pre-Event Discussions"
                    },
                    "text": {
                        "FR": "Participez aux premières conversations pour comprendre vos besoins et vos objectifs concernant cet événement et le développement durable au sens large. Nous adapterons les possibilités de collaboration avec les étudiants, les chercheurs, les laboratoires, les entreprises et les ONG, afin que votre participation ait un impact et que vos efforts soient partagés.",
                        "EN": "Take part in early conversations to understand your needs and goals, regarding this event and sustainability in a broader sense. We will tailor opportunities to collaborate with students, researchers, labs, companies, and NGOs, ensuring your involvement is impactful and your efforts are shared."
                    }   
                },
                {
                    "bold-text": {
                        "FR": "Participation à l'événement :",
                        "EN": "Event Participation: "
                    },
                    "text": {
                        "FR": "Rejoignez-nous les 13 et 14 mars sur le campus de l'EPFL à Lausanne, en Suisse - obtenez votre stand et présentez vos recherches, tout en réseautant avec des étudiants talentueux, des partenaires industriels, des chercheurs et des experts, et acquérez de nouvelles perspectives lors du forum scientifique.",
                        "EN": "Join us on March 13-14th at EPFL Campus, Lausanne, Switzerland - get your stand and showcase your research, while networking with?/meeting? talented students, industry partners, researchers and experts, and gain new insights from the scientific forum."
                    }   
                },
            ],
        },
        "contact": {
            "title": {
                "FR": "Nous Contacter",
                "EN": "Contact Us"
            },
            "introductory-paragraph": {
                "FR": "Nous sommes impatients de travailler avec vous ! Que vous soyez une entreprise, une startup ou une ONG, nous sommes là pour discuter de toute opportunité de collaboration.",
                "EN": "We are eager to work together with you! Whether you are a company, a startup, or a NGO, we are here to discuss any opportunity to collaborate."
            },
            "contact-button": {
                "display": {
                    "FR": "formulaire de contact entreprises",
                    "EN": "companies contact form"
                },
                "to": "https://forms.gle/RG4b8yEoPtGN6QwJ9"
            }
        },
        "let-s-work-together": {
            "FR": "Travaillons ensemble pour façonner un avenir durable !",
            "EN": "Let's work together to shape a sustainable future!"
        }
    }

    return (
        <>
            <div className="flexer">
                <section className="main">
                    <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                    <main>
                        <h1>
                            {COMPANIES_ELEMENTS_LOCALE["title"][lang]}
                        </h1>
                        {COMPANIES_ELEMENTS_LOCALE["information-sections"].map((informationSection, n1) => (
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
                        <h2 className="margin-top-h2">{COMPANIES_ELEMENTS_LOCALE["timeline"]["title"][lang]}</h2>
                        <p>
                            {COMPANIES_ELEMENTS_LOCALE["timeline"]["introductory-paragraph"][lang]}
                        </p>
                        <ol>
                            {COMPANIES_ELEMENTS_LOCALE["timeline"]["steps"].map((step, n) => (
                                <li key={`${COMPANIES_ELEMENTS_LOCALE["timeline"][lang]}-${n}`}><strong>{step["bold-text"][lang]}</strong> {step["text"][lang]}</li>
                            ))}
                        </ol>
                        <h2 className="margin-top-h2">{COMPANIES_ELEMENTS_LOCALE["contact"]["title"][lang]}</h2>
                        <p>
                            {COMPANIES_ELEMENTS_LOCALE["contact"]["introductory-paragraph"][lang]}
                        </p>
                        <a className="contact-form-button" href={COMPANIES_ELEMENTS_LOCALE["contact"]["contact-button"]["to"]}>{COMPANIES_ELEMENTS_LOCALE["contact"]["contact-button"]["display"][lang]}</a>
                        <p>
                            {COMPANIES_ELEMENTS_LOCALE["let-s-work-together"][lang]}
                        </p>
                    </main>
                </section>
                <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
            </div>
        </>
    )
}

export default Companies