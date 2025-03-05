import '../styles/pages/Schedule.css'

function ScheduleTable({scheduleData}) {
    let listOfTimes = []
    for(let i = 8; i <= 20; i++) {
        listOfTimes.push(`${i}h00`)
        listOfTimes.push(`${i}h15`)
        listOfTimes.push(`${i}h30`)
        listOfTimes.push(`${i}h45`)
    }

    function checkIsHourStrictlySmaller(a, b) {
        let [hA, minA] = a.split("h")
        a = (+hA) * 60 + (+minA)

        let [hB, minB] = b.split("h")
        b = (+hB) * 60 + (+minB)

        return a < b
    }

    function checkIsHourSmallerOrEqual(a, b) {
        let [hA, minA] = a.split("h")
        a = (+hA) * 60 + (+minA)

        let [hB, minB] = b.split("h")
        b = (+hB) * 60 + (+minB)

        return a <= b
    }

    function getCellType(location, timeStart) {
        let eventStarts = location["events"].find(event => timeStart === event.start)
        if(eventStarts) {
            // if an event started, compute how many cells it will occupy and return the corresponding html cells
            let rowSpan = ((eventStarts.end === "onwards")? listOfTimes.length : listOfTimes.findIndex(timeSlot => timeSlot === eventStarts.end)) - listOfTimes.findIndex(timeSlot => timeSlot === eventStarts.start)
            return <td className={eventStarts["type"]} rowSpan={rowSpan}>
                {eventStarts.event} <br/>
                {eventStarts.start} - {eventStarts.end}
            </td> 
        } else {
            if(location["events"].find(event => (checkIsHourStrictlySmaller(event.start, timeStart) && (event.end === "onwards" || checkIsHourStrictlySmaller(timeStart, event.end))))) {
                // don't create an empty cell
                // when we already have an event that is occupying the cell but started earlier
                console.log("no cell at", timeStart, " for location: ", location.name)
                return null
            } else {
                // return an empty cell
                return <td></td>
            }
        }
    }

    function checkIsFullHour(timeStart) {
        let [h,min] = timeStart.split("h")
        return min === "00"
    }

    return <>
        <table>
            <thead>
                <tr>
                    <th></th>
                    {scheduleData["locations"].map(location => <th>{location["name"]}</th>)}
                </tr>
            </thead>
            <tbody>
            {
                listOfTimes.map(timeStart => 
                    <tr>
                        <td>{checkIsFullHour(timeStart)? timeStart : ""}</td>
                        {
                            scheduleData["locations"].map(location => getCellType(location, timeStart))
                        }
                    </tr>)
            }
            </tbody>
        </table>
    </>
}

export default ScheduleTable