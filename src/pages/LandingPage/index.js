import { useQuery } from '@apollo/client';

import Summary from "../../components/summary";
import WideSummary from '../../components/summary/WideSummary';
import HorizontalBarCharts from '../../components/summary/HorizontalBarCharts';

// Pystysuuntaisilla teksteillä varustettu histogrammi
import BCVerticalLabels from "../../components/graphs/VerticalBarchartLbls";

// Vaakasuuntaisilla teksteillä varustettu histogrammi
import BCHorizontalLabels from "../../components/graphs/VerticalBarchart";

import BarchartContainer from "../../components/summary/BarchartContainer";
import CDDContainer from '../../components/summary/CDDContainer';
import CDDTitleRow from '../../components/summary/CDDTitleRow';
import LoadingAnimation from "../../components/loadingAnimation";

import { getWeekday } from "../../misc/helperFunctions";

import {
    GENERAL_SUMMARY
} from "../../graphql/queries";

const DAY_OF_WEEK = ["MA","TI","KE","TO","PE","LA","SU"];
const MONTH_NAME = ['Toukokuu', 'Kesäkuu', 'Heinäkuu'];

/* Kuinka kauan kestäneet matkat huomioidaan laina-aikoja kuvaavassa graafissa */
const MAX_TRIP_DURATION = 60;
/* Kuinka pitkät matkat huomioidaan lainamatkoija kuvaavassa graafissa */
const MAX_TRIP_DISTANCE = 10000;

const LandingPage = () => {

    const result = useQuery(GENERAL_SUMMARY);

    if(result.loading) {
        return (
            <LoadingAnimation 
                msg='Luetaan toiminnan yleistiedot'
            />
        )
    }

    const getTotalNumberOfEvents = () => {

        let sum = 0;

        result.data.summary.events_in_day.forEach(element => {
            sum = sum + element.number_of_events;
        });

        return sum;
    }

   /*
     * Lasketaan kuinka monta prosenttia matkoista lukeutuu
     * matkan kestoa kuvaavan graafin aikavälille
     */
   const getDistancePercentage = () => {

    let total = 0;
    let selected = 0;

    result.data.tripsByDuration.forEach(t => {

        if(t.bin < MAX_TRIP_DISTANCE)
            selected = selected + t.number_of_events

            total = total + t.number_of_events

    })

    return (Math.floor((selected / total) * 100)); 

}

   /*
     * Lasketaan kuinka monta prosenttia matkoista lukeutuu
     * matkan kestoa kuvaavan graafin aikavälille
     */
   const getDurationPercentage = () => {

        let total = 0;
        let selected = 0;

        result.data.tripsByDuration.forEach(t => {

            if(t.bin < MAX_TRIP_DURATION)
                selected = selected + t.number_of_events

                total = total + t.number_of_events

        })

        return (Math.floor((selected / total) * 100)); 

    }

    const getEventCountSummary = () => {

        const nOfRows = result.data.summary.events_in_day.length;

        /* Tapahtumarikkaimman päivän päiväys */
        const topDay = getWeekday(
            result.data.summary.events_in_day[0].day,
            result.data.summary.events_in_day[0].month - 1,
        )
        
        const topDayStr = `${topDay} ${result.data.summary.events_in_day[0].day}.${result.data.summary.events_in_day[0].month}`

        /* Hiljaisin päivä */
        const slowDay = getWeekday(
            result.data.summary.events_in_day[nOfRows-1].day,
            result.data.summary.events_in_day[nOfRows-1].month - 1,
        )
        
        const slowDayStr = `${slowDay} ${result.data.summary.events_in_day[nOfRows-1].day}.${result.data.summary.events_in_day[nOfRows-1].month}`

        return [
            {
                title: "Kiireisin päivä",
                value: topDayStr,
                label: `${result.data.summary.events_in_day[0].number_of_events} lainausta`
            },
            {
                title: "Hiljaisin päivä",
                value: slowDayStr,
                label: `${result.data.summary.events_in_day[nOfRows-1].number_of_events} lainausta`
            }
        ];
    
    }

    // Viikonpäivien graafissa esitettävä pylvään otsikko
    const yValue_dayOfWeek = d => DAY_OF_WEEK[d.day_of_week-1];
    // Kuukausien graafissa esitettävä pylvään otsikko.
    const yValue_month = d => MONTH_NAME[d.month - 5];

    // Matkan pituuksien graafissa esitettävien pylväiden otsikot
    const yValue_tripLen = d => `~ ${d.bin} m`;

    // Matkojen keston graafissa esitettävien pylväiden otsikot
    const yValue_tripDur = d => `~ ${d.bin} min`;

 

    console.log(getDurationPercentage())

    return (
        <div className='container'>

            <Summary 
                nOfStations = {result.data.summary.number_of_stations}
                nOfBicycles = {result.data.summary.number_of_bikes}
                nOfEvents = {getTotalNumberOfEvents()}
            />

            <WideSummary 
                values = { getEventCountSummary() }
            />

            <HorizontalBarCharts>

                <BarchartContainer 
                    title = "Lainat kuukauden mukaan"
                    caption = ""
                >
                    <BCHorizontalLabels 
                        data = { result.data.summary.events_by_month } 
                        yValue = { yValue_month }
                    />
                </BarchartContainer>

                <BarchartContainer 
                    title = "Lainat viikonpäivittäin"
                    caption = ""
                >   
                    <BCHorizontalLabels 
                        data = { result.data.summary.events_by_the_dayOfWeek } 
                        yValue = { yValue_dayOfWeek }
                    />
                </BarchartContainer>   

            </HorizontalBarCharts>



            <HorizontalBarCharts>

                <BarchartContainer 
                    title = "Lainat matkan pituuden mukaan"
                    caption = {`${getDistancePercentage()} %:a matkoista oli enintään 10 km pituisia`}
                >
                    <BCVerticalLabels 
                        data = { result.data.tripsByDistance.filter(t => t.bin < 10000) } 
                        yValue = { yValue_tripLen }
                    />
                </BarchartContainer>

                <BarchartContainer 
                    title = "Matkat laina-ajan mukaan"
                    caption = {`${getDurationPercentage()} %:a matkoista kesti korkeintaan tunnin`}
                >   
                    <BCVerticalLabels 
                        data = { result.data.tripsByDuration.filter(t => t.bin < MAX_TRIP_DURATION) } 
                        yValue = { yValue_tripDur }
                    />
                </BarchartContainer>   

            </HorizontalBarCharts>



            <CDDTitleRow />

            <CDDContainer 
                popularTrips= { result.data.popularTrips }
            />



        </div>
    );
};

export default LandingPage;
