import { gql, useQuery } from '@apollo/client';
import StationList from '../../components/stationList';

const ALL_STATIONS = gql`
  query {
    stations {
        stationID
        nimi
        palautuksia
        lainoja
        kapasiteetti
    }
  }
`;

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