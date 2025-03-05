import { useState, useEffect } from 'react'
import '../styles/pages/Schedule.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SwitchButton from '../components/SwitchButton'
import ScheduleTable from '../components/ScheduleTable'
import schedule_data from '../data/schedule_data.json'

function Schedule() {
    // the default language of the website is english
    let storedLang = localStorage.getItem('prefered-language') ?? "EN"; 
    let [lang, changeLang] = useState(storedLang);

    useEffect(function() {
        window.scrollTo(0, 0);
        document.title = `${(lang === "FR")? "horaires & billets" : "schedule & tickets"} | EPFL Sustainable Innovation Challenge`;
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
        },
        "first-day": "13/03",
        "second-day": "14/03"
    }

    let [whichDayToVisualize, setWhichDayScheduleToVisualize] = useState(0)
    function handleOptionSwitchCallBack(optionIndex) {
        setWhichDayScheduleToVisualize(optionIndex)
    }

    return (
        <div className="flexer">
            <section className="main">
                <Header lang={lang} saveAndChangeLang={saveAndChangeLang} />
                <main>
                    <SwitchButton 
                        option1={SCHEDULE_ELEMENTS_LOCALE["first-day"]}
                        option2={SCHEDULE_ELEMENTS_LOCALE["second-day"]}
                        selectedOption={whichDayToVisualize}
                        handleOptionSwitchCallBack={handleOptionSwitchCallBack} />
                    <ScheduleTable 
                        scheduleData={schedule_data["days"][whichDayToVisualize]} />
                    <div className="schedule-legend">
                        <div>
                            <div className="marked-as-speakers"></div>
                            <p>Speakers</p>
                        </div>
                        <div>
                            <div className="marked-as-showcase"></div>
                            <p>Showcase</p>
                        </div>
                        <div>
                            <div className="marked-as-special-format-event"></div>
                            <p>Special format event</p>
                        </div>
                        <div>
                            <div className="marked-as-workshops"></div>
                            <p>Workshops</p>
                        </div>
                    </div>
                </main>
            </section>
            <Footer lang={lang} saveAndChangeLang={saveAndChangeLang} />
        </div>
    )
}
 
export default Schedule