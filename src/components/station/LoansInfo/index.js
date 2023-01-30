import BarChart from "../../graphs/BarChart";
import Histogram from "../../graphs/Histogram";
import VerticalBarChart from "../../graphs/VerticalBarchart";

// Pystysuuntaisilla teksteillä varustettu histogrammi
import BCVerticalLabels from "../../graphs/VerticalBarchartLbls";

import { Container } from "./loansinfoElements";

const weekdays = ['Ma','Ti','Ke','To','Pe','La','Su'];
const MONTH_NAME = ['Toukokuu', 'Kesäkuu', 'Heinäkuu'];

/* Kuinka kauan kestäneet matkat huomioidaan laina-aikoja kuvaavassa graafissa */
const MAX_TRIP_DURATION = 60;
/* Kuinka pitkät matkat huomioidaan lainamatkoija kuvaavassa graafissa */
const MAX_TRIP_DISTANCE = 10000;


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


    const yValue_dayOfWeek = d => {
        return weekdays[d[settings.evendWeekdayLbl]-1];
    };

    const yValue_month = d => MONTH_NAME[d[settings.eventMonthLbl] - 5];

    // Matkojen keston graafissa esitettävien pylväiden otsikot
    const yValue_tripDur = d => `~ ${d.bin} min`;

    // Matkan pituuksien graafissa esitettävien pylväiden otsikot
    const yValue_tripLen = d => `~ ${d.bin} m`;

    return (
        <Container>

            <div>
                <h3 className="title">{settings.distance.title}</h3>
                <p className="description">{settings.distance.description}</p>
            </div>

            <BCVerticalLabels 
                dispWidth="600"
                data = { data[settings.distanceData].filter(t => t.bin < MAX_TRIP_DISTANCE) } 
                yValue = { yValue_tripLen }
            />

            <div>
                <h3 className="title">{settings.target.title}</h3>
                <p className="description">{settings.target.description}</p>
            </div>

            <BarChart 
                stationName = {data.station.nimi}
                data= { data[settings.loansData].slice(0, 10) }
                objName = { settings.eventObj }
                linkObj = { settings.linkObj }
                xAxisLabel = {settings.xAxisLabel}
            />

            <div>
                <h3 className="title">{settings.dayOfWeek.title}</h3>
                <p className="description">{settings.dayOfWeek.description}</p>
            </div>

            <VerticalBarChart 
                dispWidth="500" 
                data= { data[settings.evendWeekdayObj] } 
                yValue = { yValue_dayOfWeek }
            />

            <div>
                <h3 className="title">{settings.month.title}</h3>
                <p className="description">{settings.month.description}</p>
            </div>

            <VerticalBarChart 
                dispWidth="500" 
                data= { data[settings.evendMonthObj] } 
                yValue = { yValue_month }
            />


            <div>
                <h3 className="title">{settings.hour.title}</h3>
                <p className="description">{settings.hour.description}</p>
            </div>

            <Histogram 
                data={ getEventHours() }
                settings = {{ 
                    label: "hour",
                    binCount: 24
                }}
            />

            <div>
                <h3 className="title">{settings.duration.title}</h3>
                <p className="description">{settings.duration.description}</p>
            </div>

            <BCVerticalLabels 
                dispWidth="500"
                data = { data[settings.durationData].filter(t => t.bin < MAX_TRIP_DURATION) } 
                yValue = { yValue_tripDur }
            />


        </Container>
    );
};


export default LoansInfo;