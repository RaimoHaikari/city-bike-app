import { useSelector } from "react-redux"; 

import { useQuery } from '@apollo/client';

import StationList from '../../components/stationList';

import { ALL_STATIONS } from "../../graphql/queries"

const Stations = () => {

    const { searchStr } = useSelector(state => state.search)

    const result = useQuery(ALL_STATIONS, {
        variables: {
            searchStr: searchStr
        }
    });

    if(result.loading) {
        return <div>Loading....</div>
    }

    /*
     *<StationsTable values={result.data.stations.data} />
     */
    return (
        <div>
           <StationList 
                stations = { result.data.stations.data }
           />
        </div>
    );
};



export default Stations;