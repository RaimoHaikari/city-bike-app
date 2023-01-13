import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import BarChart from '../../components/graphs/BarChart';

import LoansInfo from '../../components/station/LoansInfo';
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

    console.log(result.data);
    console.log(result.data.station);
    //console.log(result.data.departedTrips.slice(0, 15))


    const Home = () => {
        return (
            <div>
                Aktiivinen juttu hei
            </div>
        )
    }

    const Contact = () => {
        return (
            <div>
            Voisit ottaa joskus yhteyttä
            </div>
        )
    }

    const Analyse = () => {
        return (
            <div>
            Analyysi on päivän san
            </div>
        )
    }

    const About = () => {
        return (
            <div>
                No täällä sit juttua siitä mitä tää nyt on
            </div>
        )
    }

    return (
        <div className='container'>

            <Tabs 
                config = {[
                    {
                        header: "Home",
                        component: <Home />
                    },
                    {
                        header: "Kartta",
                        component: <Map lat = {result.data.station.y} lng = {result.data.station.x} />
                    },
                    {
                        header: "Lainat",
                        component: <LoansInfo data = {result.data} />
                    },
                    {
                        header: "About",
                        component: <About />
                    }
                ]}

                name = {result.data.station.nimi}
            />
            



        </div>
    );
};





export default Station;