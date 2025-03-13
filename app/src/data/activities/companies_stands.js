import logo_wasteflow from '../../assets/logo/logo_wasteflow.png'
import logo_volt_control from  '../../assets/logo/logo_volt_control.png'
import logo_urbasolar_axpo_group from  '../../assets/logo/logo_urbasolar_axpo_group.png'
import logo_texup from  '../../assets/logo/logo_texup.png'
import logo_resilio from '../../assets/logo/logo_resilio.png'
import logo_perovskia from '../../assets/logo/logo_perovskia.png'
import logo_kuori from '../../assets/logo/logo_kuori.png'
import logo_gramitherm from '../../assets/logo/logo_gramitherm.png'
import logo_arcalignum from '../../assets/logo/logo_arcalignum.png'
import logo_arbio from '../../assets/logo/logo_arbio.png'
import logo_aeternum from '../../assets/logo/logo_aeternum.png'

const companies_stands = [
    {
        "name": "Wasteflow",
        "id" : "wasteflow",
        "logo": logo_wasteflow,
        "short-description": "WasteFlow is a Swiss startup revolutionizing recycling facilities with AI-powered \
                                vision systems that enhance operational efficiency and safety.",
        "long-description": "WasteFlow addresses the global challenge of low recycling rates by integrating advanced \
                            AI vision technology into existing recycling infrastructures. Their system employs strategically \
                            placed cameras to monitor waste streams in real-time, providing actionable insights that improve \
                            sorting accuracy, predict maintenance needs, and identify potential hazards. This innovative approach \
                            not only boosts recycling efficiency but also reduces operational costs and enhances workplace safety. \
                            With successful implementations in Swiss facilities and support from initiatives like Venture Kick, \
                            WasteFlow is poised to make a significant environmental impact by transforming waste management practices.",
        "link": "https://www.wasteflow.ai/"
    }, 
    {
        "name": "VoltControl",
        "id": "voltcontrol",
        "logo": logo_volt_control,
        "short-description": "VoltControl SA is a Swiss company specializing in innovative energy-saving solutions for large buildings, \
                                utilizing advanced voltage stabilization technology to reduce electricity consumption without compromising user comfort.",
        "long-description": "VoltControl SA focuses on enhancing energy efficiency in substantial infrastructures. Their \
                            cutting-edge voltage stabilizers not only lower electricity bills but also extend the lifespan of \
                            electrical equipment, offering a rapid return on investment, typically within three years. Committed to sustainability, \
                            VoltControl provides clients with real-time monitoring through their VoltPlus Dashboard, enabling \
                            continuous tracking of energy usage and savings. Recognized for their eco-friendly approach, VoltControl was awarded \
                            the Solar Impulse Efficient Solution Label in 2020, highlighting their dedication to profitable and environmentally \
                            conscious innovations.",
        "link": "https://www.voltcontrol.ch/"
    },
    {
        "name": "Urbasolar Axpo Group",
        "id": "urbasolar-axpo-group",
        "logo": logo_urbasolar_axpo_group,
        "short-description": "Urbasolar, a dynamic subsidiary of the Axpo Group, is at the forefront of Europe's solar energy revolution, \
                                offering innovative photovoltaic solutions that power a sustainable future.",
        "long-description": "Urbasolar has rapidly evolved into a leading force in the solar energy sector. Specializing in the development, \
                            construction, and operation of photovoltaic plants, the company boasts a diverse portfolio that includes rooftop \
                            installations, ground-mounted systems, parking canopies, and greenhouse integrations. With over 650 power plants \
                            generating more than 1 GW of clean energy, Urbasolar is committed to driving the energy transition across Europe. \
                            As part of the Axpo Group, Urbasolar offers employees the opportunity to engage in groundbreaking projects within \
                            an international framework, fostering innovation and sustainability.",
        "link": "https://www.urbasolar.com/"
    },
    {
        "name": "TexUp",
        "id": "texup",
        "logo": logo_texup,
        "short-description": "TexUp is a Swiss company that transforms textile waste into high-quality acoustic panels, offering sustainable \
                                and customizable soundproofing solutions for various interior spaces.",
        "long-description": "TexUp specializes in recycling textile waste into durable and aesthetically pleasing acoustic panels. \
                            These panels are locally manufactured, contributing to reduced carbon footprints and supporting the regional \
                            economy. Designed to enhance sound quality in environments such as offices and meeting rooms, TexUp's products \
                            combine sustainability with high acoustic performance, providing effective noise reduction while promoting environmental responsibility",
        "link": "https://www.texup.ch/"
    },
    {
        "name": "Resilio",
        "id": "resilio",
        "logo": logo_resilio,
        "short-description": "Resilio is a Swiss company specializing in sustainable IT solutions, offering services such as environmental \
                                impact assessments, training, and strategy development to help organizations reduce their digital environmental footprint.",
        "long-description": "The company provides a range of services, including Life Cycle Assessments (LCA) compliant with the latest European \
                            Union recommendations, certified training courses, and workshops aimed at guiding organizations toward more ethical and \
                            sustainable digital practices. Resilio collaborates with both public and private entities to develop actionable strategies \
                            that reduce the environmental impact of operations.",
        "link": "https://resilio-solutions.com/fr/about"
    },
    {
        "name": "Perovskia Solar",
        "id": "perovskia-solar",
        "logo": logo_perovskia,
        "short-description": "Swiss cleantech startup specializing in digitally printed, customizable perovskite solar cells designed to seamlessly \
                                integrate into electronic devices, enhancing their energy efficiency.",
        "long-description": "Perovskia Solar AG pioneers the next generation of photovoltaics by offering high-performance, \
                            lightweight perovskite solar solutions tailored for IoT devices and sensors. Their innovative \
                            technology enables solar cells to be printed directly onto various substrates, allowing for seamless \
                            integration into electronic devices and extending battery life or even eliminating the need for batteries \
                            in low-power applications.",
        "link": "https://perovskia.solar/"
    },
    {
        "name": "Kuori",
        "id": "kuori",
        "logo": logo_kuori,
        "short-description": "Kuori is a Swiss cleantech company pioneering circular materials to combat plastic pollution and promote a sustainable, post-oil economy.",
        "long-description": "Kuori is an innovative Swiss cleantech company committed to transitioning towards a post-oil economy by transforming consumer goods \
                            through sustainable materials. Their mission focuses on creating circular solutions that minimize plastic pollution, contributing \
                            to a cleaner environment. Kuori collaborates with various partners to develop and implement eco-friendly alternatives, aiming \
                            to revolutionize the materials industry for a more sustainable future.",
        "link": "https://kuori.ch/about"
    },
    {
        "name": "Gramitherm",
        "id": "gramitherm",
        "logo": logo_gramitherm,
        "short-description": "Gramitherm is a Belgian company producing eco-friendly insulation panels made from natural grass fibers, offering sustainable \
                                solutions for both new constructions and renovations.",
        "long-description": "Gramitherm utilizes a patented Swiss technology to manufacture insulation boards from natural grass fibers. These panels provide \
                            effective thermal and acoustic insulation, contributing to energy efficiency in buildings. Notably, each kilogram of Gramitherm \
                            captures 1.5 kg of CO₂ equivalent, underscoring its negative carbon footprint. The company emphasizes sustainability by transforming \
                            an abundant and rapidly renewable resource into high-performance, recyclable insulation materials suitable for various building projects.",
        "link": "https://gramitherm.eu/produits/"
    },    
    {
        "name": "Arcalignum",
        "id": "arcalignum",
        "logo": logo_arcalignum,
        "short-description": "Arcalignum is a Swiss company specializing in modular, hand-portable wooden construction elements, featuring an innovative \
                                fastening system for rapid and sustainable building assembly.",
        "long-description": "Arcalignum offers a novel construction process that enables quick assembly of durable, high-performance, and low-carbon \
                            buildings, making sustainable construction more accessible to professionals across the industry. Their eco-designed modules \
                            are prefabricated off-site, ensuring efficient on-site assembly with minimal tools and labor, while reducing environmental \
                            impact by using natural and bio-sourced materials.",
        "link": "https://arcalignum.ch/"
    },
    {
        "name": "Arbio",
        "id": "arbio",
        "logo": logo_arbio,
        "short-description": "Arbio is a Swiss company specializing in ecological solutions for the maintenance and care of green spaces, \
                                offering a range of organic products and services tailored to sustainable landscaping needs.",
        "long-description": "Arbio provides environmentally friendly products and services focused on the upkeep of parks, gardens, and other green \
                            areas. Their offerings include organic fertilizers, natural pest control solutions, and consulting services aimed \
                            at promoting biodiversity and ecological balance in managed landscapes.",
        "link": "https://arbio.ch/"
    },
    {
        "name": "Aeternum",
        "id": "aeternum",
        "logo": logo_aeternum,
        "short-description": "Aeternum is a Swiss startup specializing in the development of reusable and re-adaptable low-carbon buildings for \
                                real estate owners and investors.",
        "long-description": "Aeternum offers sustainable building solutions utilizing a standardized kit of components. Their approach enables \
                            the creation of high-quality spaces that can be reconfigured over multiple life cycles to meet evolving needs, \
                            promoting zero waste and net-zero carbon emissions. Aeternum's mission is to help cities become more dynamic \
                            and responsive by providing buildings that can quickly and cost-effectively adapt or relocate without \
                            negatively impacting the environment.",
        "link": "https://www.aeternum-tech.com/"
    },
]

export default companies_stands