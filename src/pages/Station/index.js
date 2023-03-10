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
                                            durationData: 'departedDuration',
                                            distanceData: 'departedDistance',
                                            eventObj: 'returnStationNimi',
                                            linkObj: 'returnStationID',
                                            xAxisLabel: 'Lainauksia',
                                            eventHour: 'departuresByTheHour',
                                            evendWeekdayObj: 'departuresByTheDayOfWeek',
                                            evendWeekdayLbl: 'day_of_week',
                                            evendMonthObj: 'departuresByTheMonth',
                                            eventMonthLbl: 'month',
                                            distance: {
                                                title: 'Ajettu matka',
                                                description: 'Matkan pituus 500 m koreihin jaoteltuna. Graafissa alle 10 km mittaiset matkat. T??m?? k??sitt???? 98% tehdyist?? lainoista.'
                                            },
                                            duration: {
                                                title: 'Laina-aika',
                                                description: 'Lainan kesto 5 minuutin koreihin jaoteltuna. Graafissa on huomioitu matkat, jotka kestiv??t alle tunnin. T??m?? k??sitt???? 99% tehdyist?? lainoista.'
                                            },
                                            target: {
                                                title: 'Minne oltiin menossa',
                                                description: 'Yleisimm??t m????r??np????t asemalta suoritetuille lainoille.'
                                            },
                                            dayOfWeek: {
                                                title: 'Min?? viikonp??iv??n?? lainattiin',
                                                description: 'Kuinka lainat jakaantuivat eri viikonp??ivien mukaan.'
                                            },
                                            month: {
                                                title: 'Miss?? kuussa lainattiin',
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
                                            durationData: 'returnedDuration',
                                            distanceData: 'returnedDistance',
                                            eventObj: 'departureStationNimi',
                                            linkObj: 'departureStationID',
                                            xAxisLabel: 'Palautuksia',
                                            eventHour: 'returnsByTheHour',
                                            evendWeekdayObj: 'returnsByTheDayOfWeek',
                                            evendWeekdayLbl: 'day_of_week',
                                            evendMonthObj: 'returnsByTheMonth',
                                            eventMonthLbl: 'month',
                                            distance: {
                                                title: 'Ajettu matka',
                                                description: 'Matkan pituus 500 m koreihin jaoteltuna. Graafissa alle 10 km mittaiset matkat. T??m?? k??sitt???? 98% tehdyist?? lainoista.'
                                            },
                                            duration: {
                                                title: 'Matkat laina-ajan mukaan',
                                                description: 'Kuinka kauan py??r???? tyypillisesti lainattiin'
                                            },
                                            target: {
                                                title: 'Mist?? oltiin tulossa',
                                                description: 'Asemalle tapahtuneiden palautusten yleisimm??t l??ht??pisteet.'
                                            },
                                            dayOfWeek: {
                                                title: 'Min?? viikonp??iv??n?? palautettiin',
                                                description: 'Kuinka palautukset jakaantuivat eri viikonp??ivien mukaan.'
                                            },
                                            month: {
                                                title: 'Miss?? kuussa lainattiin',
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
                                            titleDayOfWeek: 'Min?? viikonp??iv??n?? palautettiin',
                                            titleEventHour: 'Mihin aikaan palautettiin',
                                            titleEventType: 'Mist?? oltiin tulossa'
                                         }}
                                    />
                    },


*/



export default Station;