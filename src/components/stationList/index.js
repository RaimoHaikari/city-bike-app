import { useSelector } from "react-redux"; 
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { ALL_STATIONS } from "../../graphql/queries"

import { Container } from "./stationListElements";

/* 
 *
 */
const StationList = ({alphabets, stations}) => {

    const navigate = useNavigate();
    const { searchStr } = useSelector(state => state.search);

    const result = useQuery(ALL_STATIONS, {
        variables: {
            searchStr: searchStr
        }
    });

    if(result.loading) {
        return <div>Loading....</div>
    }

    const rowCliked = (d) => {
        navigate(`/stations/${d.stationID}`);
    }

    return (
        <>
        {
            result.data.stations.data.map((v,i) => {
                
                return (
                    <Container
                        key = {`station-listing-${i}`}
                        className = {i%2===0?"tbl-row even":"tbl-row odd"}
                        onClick = {() => rowCliked(v)}
                    >
                        <div>{v.nimi}</div>
                        <div>{v.kaupunki}</div>
                        <div>{v.kapasiteetti}</div>
                    </Container>
                )
            })
        }
        </>
    );
};



export default StationList;