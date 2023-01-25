import { useSelector } from "react-redux"; 
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import { ALL_STATIONS } from "../../graphql/queries"

import { Container } from "./stationListElements";

import LoadingAnimation from "../../components/loadingAnimation"

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
        return (
            <LoadingAnimation 
                msg = {`Haetaan ${searchStr} alkuiset asemat`}
            />
        )
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
                        <div className="infoContainer"><span>Nimi</span>{v.nimi}</div>
                        <div className="infoContainer"><span>Kaupunki</span>{v.kaupunki}</div>
                        <div className="infoContainer"><span>Kapasiteetti</span>{v.kapasiteetti}</div>
                    </Container>
                )
            })
        }
        </>
    );
};



export default StationList;