import BarChart from "../graphs/BarChart";
import Histogram from "../graphs/Histogram";

const weekdays = ['Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai','Sunnuntai']

const LoansInfo = ({data, settings}) => {

    const getEventHours = () => {

        let hours = [];

        data[settings.eventHour].map((element, i) => {

            for(let x = 0; x < element; x++) {

                hours.push({
                    hour: i + '-' + (i+1),
                    value: i + 0.5
                })

            }
        });

        return hours;
    }

    const getEventWeekdays = () => {

        let dayOfWeek = [];

        data[settings.evendWeekday].map((element, i) => {

            for(let x = 0; x < element; x++) {

                dayOfWeek.push({
                    weekday: weekdays[i],
                    value: i + 0.5
                })

            }
        });

        return dayOfWeek;
    }

    //console.log(data)

    return (
        <>

            <div className='steven-columns'>

                <h3>{settings.titleEventType}</h3>

                <BarChart 
                    stationName = {data.station.nimi}
                    data= { data[settings.loansData].slice(0, 10) }
                    objName = { settings.eventObj }
                    linkObj = { settings.linkObj }
                    xAxisLabel = {settings.xAxisLabel}
                />

                <h3>{settings.titleDayOfWeek}</h3>

                <Histogram 
                    data={ getEventWeekdays() }
                    settings = {{
                        label: "weekday",
                        binCount: 7
                    }}
                />

                <h3>{settings.titleEventHour}</h3>

                <Histogram 
                    data={ getEventHours() }
                    settings = {{ 
                        label: "hour",
                        binCount: 24
                    }}
                />


            </div>
        </>
    );
};


export default LoansInfo;