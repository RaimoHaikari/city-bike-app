import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import LoansInfo from '../../components/station/LoansInfo';
import Home from '../../components/station';
import Map from "../../components/map";
import Tabs from '../../components/tabs';

import {
    GET_STATION_INFO
} from "../../graphql/queries";

const Station = () => {

    const id = parseInt(useParams().id);

    const result = useQuery(
        GET_STATION_INFO,
        {
            variables: {
                stationId: id
            },
            skip: !id
        }

    )

    if(result.loading) {
        return <div>Loading....</div>
    }

    /*
    const Home = () => {
        return (
            <div>
                <p>{result.data.station.osoite}</p>
                <p>{result.data.station.kaupunki}</p>
                <p>Lainoja: {result.data.departedTrips.length}</p>
                <p>Palautuksia: {result.data.returnedTrips.length}</p>
            </div>
        )
    }
    */

    /*



                                        {
                        header: "Kartta",
                        component: <Map lat = {result.data.station.y} lng = {result.data.station.x} />
                    },
    */
    return (
        <div className='container'>

            <Tabs 
                config = {[
                    {
                        header: "Yhteenveto",
                        component: <Home 
                            data = {result.data}
                        />
                    },
                    {
                        header: "Lainat",
                        component: <LoansInfo 
                                        data = {result.data} 
                                        settings = {{ 
                                            loansData: 'departedTrips',
                                            eventObj: 'returnStationNimi',
                                            linkObj: 'returnStationID',
                                            xAxisLabel: 'Lainauksia',
                                            eventHour: 'departuresByTheHour',
                                            evendWeekday: 'departuresByTheDayOfWeek',
                                            titleDayOfWeek: 'Minä viikonpäivänä lainattiin',
                                            titleEventHour: 'Mihin aikaan lainattiin',
                                            titleEventType: 'Minne oltiin menossa'
                                         }}
                                    />
                    },
                    {
                        header: "Palautukset",
                        component: <LoansInfo 
                                        data = {result.data} 
                                        settings = {{ 
                                            loansData: 'returnedTrips',
                                            eventObj: 'departureStationNimi',
                                            linkObj: 'departureStationID',
                                            xAxisLabel: 'Palautuksia',
                                            eventHour: 'returnsByTheHour',
                                            evendWeekday: 'returnsByTheDayOfWeek',
                                            titleDayOfWeek: 'Minä viikonpäivänä palautettiin',
                                            titleEventHour: 'Mihin aikaan palautettiin',
                                            titleEventType: 'Mistä oltiin tulossa'
                                         }}
                                    />
                    }
                ]}

                name = {result.data.station.nimi}
            />
            



        </div>
    );
};

/*

                    {
                        header: "Palautukset",
                        component: <LoansInfo 
                                        data = {result.data} 
                                        settings = {{ 
                                            loansData: 'returnedTrips',
                                            eventObj: 'departureStationNimi',
                                            xAxisLabel: 'Palautuksia',
                                            eventHour: 'returnsByTheHour',
                                            evendWeekday: 'returnsByTheDayOfWeek',
                                            titleDayOfWeek: 'Minä viikonpäivänä palautettiin',
                                            titleEventHour: 'Mihin aikaan palautettiin',
                                            titleEventType: 'Mistä oltiin tulossa'
                                         }}
                                    />
                    },


*/



export default Station;