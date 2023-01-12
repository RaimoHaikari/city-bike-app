import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import BarChart from '../../components/graphs/BarChart';
import CDD from "../../components/graphs/CDD";
import Map from "../../components/map"

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

    console.log(result.data)
    //console.log(result.data.departedTrips.slice(0, 15))


    /*
            <CDD 
                loans={result.data.departedTrips.slice(0, 15)}
            />
    */

    return (
        <div className='container'>

            <h3>{`Asema: ${id}`}</h3>

            <div className='even-columns'>

                <div>

                    <Map />

                
                </div>

                <div>

                    <BarChart 
                        data= { result.data.departedTrips.slice(0, 15) }
                        objName = "returnStationNimi"
                    />

                    <BarChart 
                        data= { result.data.returnedTrips.slice(0, 15) }
                        objName = "departureStationNimi"
                    />

                </div>
            
            
            </div>
            
            



        </div>
    );
};

/*

                    <ul>
                        {
                            result.data.trips.data.map((t, i) => {
                                return (
                                    <li
                                        key ={i}
                                    >
                                    {`${t.departureStationID} - ${t.returnStationId} : ${t.coveredDistance}`}
                                    </li>
                                )
                            })
                        }
                    </ul>
*/



export default Station;