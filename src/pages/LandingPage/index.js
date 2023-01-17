import { useQuery } from '@apollo/client';

import Summary from "../../components/summary";
import WideSummary from '../../components/summary/WideSummary';
import VerticalBarchart from "../../components/graphs/VerticalBarchart"

import { getWeekday } from "../../misc/helperFunctions";

import {
    GENERAL_SUMMARY
} from "../../graphql/queries";

const LandingPage = () => {

    const result = useQuery(GENERAL_SUMMARY);

    if(result.loading) {
        return <div>Loading....</div>
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

    return (
        <div className='container'>
            <VerticalBarchart 
                data = { result.data.summary.events_by_the_dayOfWeek }
            />
            <Summary 
                nOfStations = {result.data.summary.number_of_stations}
                nOfBicycles = {result.data.summary.number_of_bikes}
                nOfEvents = {getTotalNumberOfEvents()}
            />
            <WideSummary 
                values = { getEventCountSummary() }
            />
        </div>
    );
};

export default LandingPage;