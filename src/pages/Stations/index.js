import { useQuery } from '@apollo/client';
import StationList from '../../components/stationList';

import { ALL_STATIONS } from "../../graphql/queries"


const Stations = () => {

    const result = useQuery(ALL_STATIONS);

    if(result.loading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <StationList stations={ result.data.stations }/>
        </div>
    );
};

export default Stations;