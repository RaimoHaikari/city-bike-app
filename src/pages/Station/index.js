import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

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

    if(id && result.data) {
        console.log("Hyvin menee!")
        console.log(result.data.trips.data)
    }

    return (
        <div>
            {`Asema: ${id}`}

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

        </div>
    );
};

export default Station;