import { useQuery } from '@apollo/client';

import Summary from "../../components/summary";
import WideSummary from '../../components/summary/WideSummary';
import HorizontalBarCharts from '../../components/summary/HorizontalBarCharts';

import BarchartContainer from "../../components/summary/BarchartContainer";
import CDDContainer from '../../components/summary/CDDContainer';
import CDDTitleRow from '../../components/summary/CDDTitleRow';
import LoadingAnimation from "../../components/loadingAnimation";

import { getWeekday } from "../../misc/helperFunctions";

import {
    GENERAL_SUMMARY
} from "../../graphql/queries";

const DAY_OF_WEEK = ["MA","TI","KE","TO","PE","LA","SU"];
const MONTH_NAME = ['Toukokuu', 'Kesäkuu', 'Heinäkuu']

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
    const yValue_month = d => MONTH_NAME[d.month - 5]

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
                    data = { result.data.summary.events_by_month } 
                    yValue = { yValue_month }
                />
                <BarchartContainer 
                    title = "Lainat viikonpäivittäin"
                    data = { result.data.summary.events_by_the_dayOfWeek } 
                    yValue = { yValue_dayOfWeek }
                />      

            </HorizontalBarCharts>

            <CDDTitleRow />

            <CDDContainer 
                popularTrips= { result.data.popularTrips }
            />

        </div>
    );
};

export default LandingPage;