import BarChart from "../graphs/BarChart";
import Histogram from "../graphs/Histogram";
import VerticalBarChart from "../graphs/VerticalBarchart";

const weekdays = ['Ma','Ti','Ke','To','Pe','La','Su'];
const MONTH_NAME = ['Toukokuu', 'Kesäkuu', 'Heinäkuu']

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

            console.log(element)

            for(let x = 0; x < element; x++) {

                dayOfWeek.push({
                    weekday: weekdays[i],
                    value: i + 0.5
                })

            }
        });

        return dayOfWeek;
    }



    const yValue_dayOfWeek = d => {
        return weekdays[d[settings.evendWeekdayLbl]-1];
    };

    const yValue_month = d => MONTH_NAME[d[settings.eventMonthLbl] - 5]

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

                <VerticalBarChart 
                  dispWidth="500" 
                  data= { data[settings.evendWeekdayObj] } 
                  yValue = { yValue_dayOfWeek }
                />

                <h3>{settings.titleEventMonth}</h3>

                <VerticalBarChart 
                  dispWidth="500" 
                  data= { data[settings.evendMonthObj] } 
                  yValue = { yValue_month }
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