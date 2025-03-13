const selected_teams = [
    {
        "name": "AEther Swiss Kite",
        "id": "aether-swiss-kite",
        "country": "Switzerland",
        "university": "EPFL",
        "short-description": "Autonomous kites to cut shipping emissions",
        "long-description": "Æther Swiss Kite is an EPFL association aiming to create an autonomous \
                                kite piloting system. Founded in 2024 by former members of the SP80 sailing \
                                speed record project, the team aims to use its expertise to generate electricity \
                                 by using the kite as a wind turbine, or to save energy by towing freight boats. \
                                To meet this challenge, the Æther team is made up of some fifteen EPFL students, all \
                                passionate about their work. Most of them even carry out their semester projects, \
                                which are credited and recognized towards their diploma. The research and development \
                                carried out at Æther gives students the opportunity to deepen their knowledge in an environment \
                                conducive to innovation.",
        "linkedin": "http://linkedin.com/company/%C3%A6ther-swiss-kite/",
        "instagram": "https://www.instagram.com/aether.swiss.kite/"
    },
    {
        "name": "EPFL Carbon Team",
        "id": "epfl-carbon-team",
        "country": "Switzerland",
        "university": "EPFL",
        "short-description": "Direct Air Capture",
        "long-description": "We are a student MAKE project supported by several renowned professors and laboratories at EPFL. \
                                We are developing a new durable, low-cost, scalable, and sustainable solution for Direct-Air-Capture \
                                Our prototype consists of three parts : Astérix, Pneumatix and Idéfix. Astérix contains adsorbants \
                                and works with a periodic air flow. It releases two air fluxes : one rich in CO2 and one poor in CO2 \
                                (since it has been removed) thanks to filtration via the adsorbants. Idéfix works continously as it \
                                contains graphene membranes that act like a filter trapping CO2 from the incoming air. Pneumatix connects \
                                both other parts whose combination allows for this CO2 capture process optimisation.",
        "linkedin": "https://www.linkedin.com/company/epfl-carbon-team/",
        "instagram": "https://www.instagram.com/epflcarbonteam/"
    },
    {
        "name": "Genorobotics",
        "id": "genorobotics",
        "country": "Switzerland",
        "university": "EPFL",
        "short-description": "Holistic technological innovation for botanical conservation",
        "long-description":  "Biodiversity preservation has become a major challenge of the XXIst century. Biodiversity identification \
                                and monitoring are the cornerstones for preservation actions. However, the classical conservation and \
                                taxonomy approaches no longer fit with the emergency of the situation. In response to these great upheavals \
                                and the opportunities given by the latest biotechnology advances conservationists have enlarged their toolbox.\
                                The use of DNA has deeply impacted taxonomy over the last decade, evolving from a species detection method to \
                                a tool for the identification and discovery of new species. However, the full exploitation of genomic technologies\
                                requires high sequencing costs and expensively equipped facilities only available in developed countries. \
                                Furthermore, exportation of biological samples between countries has been largely restricted by the NAGOYA \
                                protocol in order to protect the access to genetic resources and the sharing of their benefits. This creates \
                                an impasse for conservation efforts and scientific research, since both directly work with biological samples to \
                                study or reference them. The need for on-site genomic tools has become urgent ! In this way, to fill the gap\
                                between new genomic conservation approaches and DNA sequencing technologies, we are developing a miniaturized tool\
                                to automatically process botanical samples into the field and accelerate biodiversity identification.",
        "linkedin": "https://www.linkedin.com/company/genorobotics/",
        "instagram": "https://www.instagram.com/genorobotics/"
    },
    {
        "name": "GUST",
        "id": "gust",
        "country": "Poland",
        "university": "University of Lodz",
        "short-description": "Biocomposite wind turbines",
        "long-description":  "GUST (Generative Urban Small Turbine) is a student project launched in October 2015. The project is implemented by \
                                members of the Student Scientific Circle of Energy Scientists (SKNE) located at the Institute of Flow Machinery of the Faculty of Mechanical \
                                Engineering of the Technical University of Lodz. The project is designed to promote the harvesting of renewable energy from wind for prosumers. \
                                To this end, a prototype of a domestic wind turbine has been designed and constructed, It is intended to cover a significant portion of a \
                                household's daily electricity needs, as well as contribute to cost reduction and increased savings.",
        "linkedin": "https://www.linkedin.com/company/generative-urban-small-turbine/",
        "instagram": null
    },
    {
        "name": "NeoMineX",
        "id": "neominex",
        "country": "Belgium",
        "university": "KU Leuven",
        "short-description": "Biomining metals with engineered bacteria",
        "long-description":  "We engineered bacteria to take up metals from the environment by expressing proteins with a high affinity for specific metals. \
                              Our engineered bacteria are mixed with wastewater where they bind to their target metals. Our project encourages a circular \
                              economy and contributes to less metal pollution in the environment and more place for nature, by reducing the amount of mining \
                              cites needed. We highly value our sustainability collaborations as well. Synthetic biology will shape all of our futures, \
                              it is therefore important that everyone has the ability to learn about it. In order to have truly sustainable changes, \
                              science and industry need to be representative. We want to show that science is for everyone.",
        "linkedin": "https://www.linkedin.com/company/kuleuvenigem/",
        "instagram": "https://www.instagram.com/igemkuleuven/"
    },
    {
        "name": "RebuiLT",
        "id": "rebuilt",
        "country": "Switzerland",
        "university": "EPFL",
        "short-description": "Sustainable construction with reused materials",
        "long-description":  "RebuiLT is a MAKE EPFL project whose objective is to propose in a concrete way a new method of construction more respectful \
                                of the environment, in line with the circularity of materials and low-tech. Currently, rebuiLT is building a pavilion in \
                                Ecublens from reused concrete elements",
        "linkedin": "https://www.linkedin.com/company/rebuilt-epfl/",
        "instagram": "https://www.instagram.com/rebuilt_epfl/"
    },
    {
        "name": "Sailowtech",
        "id": "sailowtech",
        "country": "Switzerland",
        "university": "EPFL",
        "short-description": "Low-cost device for water analysis",
        "long-description":  "Sailowtech is a scientific sailing expedition program. Its mission is to combine low-tech and frugal innovations, \
                                Open Sciences, awareness and spirit of adventure to encourage current and future generations to understand and \
                                invest in the preservation of the oceans. DISCOVERY - PRESERVATION - TRANSMISSION. Composed of committed young people, \
                                Sailowtech is rooted in scientific and social solidarity. It encourages participatory science through free access to \
                                its resources. It cultivates a pragmatic and rigorous approach to ecological issues by benefiting from expert advice. \
                                Finally, it includes sustainability in all its actions to propose a model of scientific expedition with minimum environmental \
                                impact",
        "linkedin": "https://www.linkedin.com/company/sailowtech/ ",
        "instagram": "https://www.instagram.com/sailowtech/"
    },
    {
        "name": "Solar Team Eindhoven",
        "id": "solar-team-eindhoven",
        "country": "The Netherlands",
        "university": "TU Eindhoven",
        "short-description": "Solar powered off-road car",
        "long-description":  "Solar Team Eindhoven (STE) is a team of enthusiastic students who want to show the world that driving on solar energy is not just a \
                                pipe dream, but is already possible today. We are getting closer and closer to our sustainable future, and we are happy to contribute \
                                to this with the development of a practical passenger car. More than 20 students, many of them Honors students and coming from almost all \
                                faculties, are working full-time on the development of the car. The practical electric car, powered by solar energy, will be built from the \
                                ground up. The design of the car of the future meets the wishes of the normal consumer. The knowledge present at Eindhoven University of Technology \
                                combined with insights from the high-tech industry will be implemented in the design, in production and during testing. This cooperation makes the \
                                group of top students into a powerful team that will participate in the 'Cruiser class' of the World Solar Challenge. This is the beginning of a \
                                tradition in which Solar Team Eindhoven successfully participates in this race in Australia, leading to the car of the future. We like to share \
                                our enthusiasm for technology and a sustainable future with others by actively seeking contact with the general public. In this way we show the Netherlands\
                                the value and possibilities of renewable energy and want to inspire new innovations.",
        "linkedin": "https://www.linkedin.com/company/solar-team-eindhoven/",
        "instagram": "https://www.instagram.com/solarteameindh"
    },
    {
        "name": "Team Daedalus",
        "id": "team-deadalus",
        "country": "The Netherlands",
        "university": "TU Eindhoven",
        "short-description": "Solar-powered UAV for continuous wildfire monitoring",
        "long-description":  "Team Daedalus is developing a solar-powered unmanned aircraft to be used in the detection and monitoring of wildfires. Using solar-power, the aircraft has \
                                no need to land and refuel, and can therefore remain in the air for much longer time periods. The team is currently working on deploying a 3m wingspan \
                                prototype that will validate the key technologies, while simultaenously designing a 4m wingspan prototype that will aim for at least 12h of continuous flight.",
        "linkedin": "https://www.linkedin.com/company/team-daedalus-tue/",
        "instagram": null
    },
    {
        "name": "The SARA Project",
        "id": "the-sara-project",
        "country": "Switzerland",
        "university": "ETHZ",
        "short-description": "Smartphone-based river monitoring application utilizing computer vision to detect and track environmental waste.",
        "long-description":  "The proposed project focuses on developing a smartphone-based river monitoring application utilizing computer vision to detect and track environmental waste, \
                                particularly in river systems. This innovative solution offers an accessible, scalable and cost-effective approach to addressing river pollution, aiding in \
                                data collection, environmental awareness and decision-making for clean-up initiatives. The project's impact lies in its potential to significantly enhance \
                                environmental monitoring, promote sustainable practices and empower local communities and authorities with actionable insights to combat water pollution. \
                                By participating in this challenge, the project could gain visibility, foster collaborations and access critical resources to advance its development and \
                                implementation, driving global efforts toward cleaner waterways and improved environmental health.",
        "linkedin": "https://www.linkedin.com/company/autonomous-river-cleanup-project/",
        "instagram": "https://www.instagram.com/autonomousrivercleanup/"
    },
    {
        "name": "Trovador",
        "id": "trovador",
        "country": "Portugal",
        "university": "Técnico Lisboa",
        "short-description": "Autonomous robots for reforestation",
        "long-description":  "Trovador enables reforestation in hard-to-access areas through robotic platforms that guarantee high tree survival rates. Our planting methods rely on planning \
                                the plantation site, deploying the robot, and monitoring it from a distance. We deploy hexapod robots that not only offer stability, they also achieve a high \
                                efficiency and speed performance.",
        "linkedin": "https://www.linkedin.com/company/trovador-eu/",
        "instagram": "https://www.instagram.com/trovador.eu/"
    },
    {
        "name": "TUM Green Tech - Desalination",
        "id": "tum-green-tech-desalination",
        "country": "Germany",
        "university": "TU München",
        "short-description": "Energy-efficient desalination for remote areas",
        "long-description":  "The TUM Green Tech Initiative is developing a sustainable desalination system to provide clean water to water-scarce regions, particularly in Africa. \
                                The project aims to create an accessible, cost-effective, and solar-powered desalination system using Ion-Concentration Polarization (ICP) technology, \
                                which is energy-efficient and scalable. Unlike traditional desalination methods, ICP operates without high-pressure pumps, making it ideal for off-grid \
                                communities. The system will be designed for local maintenance and will include brine management solutions to minimize environmental impact. The team is \
                                competing in the Water Abundance XPRIZE and plans to build a 1000-liter/day prototype by August.",
        "linkedin": "https://www.linkedin.com/company/tum-green-tech-initiative/",
        "instagram": "https://www.instagram.com/tum_greentech/"
    }
]

export default selected_teams