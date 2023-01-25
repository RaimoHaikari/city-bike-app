import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import LoansInfo from '../../components/station/LoansInfo';
import Home from '../../components/station';
import Tabs from '../../components/tabs';

import LoadingAnimation from '../../components/loadingAnimation';

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
        return (
            <LoadingAnimation 
                msg='Haetaan aseman tiedot'
            />
        )
    }

    /*
     *
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
                                            evendWeekdayObj: 'departuresByTheDayOfWeek',
                                            evendWeekdayLbl: 'day_of_week',
                                            evendMonthObj: 'departuresByTheMonth',
                                            eventMonthLbl: 'month',
                                            target: {
                                                title: 'Minne oltiin menossa',
                                                description: 'Yleisimmät määränpäät asemalta suoritetuille lainoille.'
                                            },
                                            dayOfWeek: {
                                                title: 'Minä viikonpäivänä lainattiin',
                                                description: 'Kuinka lainat jakaantuivat eri viikonpäivien mukaan.'
                                            },
                                            month: {
                                                title: 'Missä kuussa lainattiin',
                                                description: 'Kuinka lainat jakaantuivat eri kuukausien mukaan.'
                                            },
                                            hour: {
                                                title: 'Mihin aikaan lainattiin',
                                                description: 'Kuinka lainat jakaantuivat eri vuorokauden aikojen mukaan.'
                                            }
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
                                            evendWeekdayObj: 'returnsByTheDayOfWeek',
                                            evendWeekdayLbl: 'day_of_week',
                                            evendMonthObj: 'returnsByTheMonth',
                                            eventMonthLbl: 'month',
                                            target: {
                                                title: 'Mistä oltiin tulossa',
                                                description: 'Asemalle tapahtuneiden palautusten yleisimmät lähtöpisteet.'
                                            },
                                            dayOfWeek: {
                                                title: 'Minä viikonpäivänä palautettiin',
                                                description: 'Kuinka palautukset jakaantuivat eri viikonpäivien mukaan.'
                                            },
                                            month: {
                                                title: 'Missä kuussa lainattiin',
                                                description: 'Kuinka palautukset jakaantuivat eri kuukausien mukaan.'
                                            },
                                            hour: {
                                                title: 'Mihin aikaan palautettiin',
                                                description: 'Kuinka palautukset jakaantuivat eri vuorokauden aikojen mukaan.'
                                            }
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