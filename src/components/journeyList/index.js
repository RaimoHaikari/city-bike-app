import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";

import {
    GET_JOUNERYS
} from "../../graphql/queries";

import {
    activateControls
} from "../../reducers/searchReducer";

import {
    Container
} from "./journeyListElements";

import LoadingAnimation from "../loadingAnimation";

//import JourneyListItem from "./JourneyListItem";

const JourneyList = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { page, first } = useSelector(state => state.search);

    const result = useQuery(GET_JOUNERYS, {
        variables: {
            first: first, 
            page: page
        }
    });
    
    useEffect(() => {

        if(result.data) {
            dispatch(activateControls({
                lastPage: result.data.journeys.paginatorInfo.lastPage,
                count: result.data.journeys.paginatorInfo.count
            }))
        }

        
    }, [result])
    

    if(result.loading) {
        return (
            <LoadingAnimation
                msg="Haetaan matkalistausta"
            />
        )
    }


    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " min " : " min ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
        return hDisplay + mDisplay + sDisplay; 
    }

    function metersToKm(d){
        var km = d / 1000;
        return `${km.toFixed(1)} km`;
    }

    const rowClicked = (id) => {
        navigate(`/stations/${id}`);
    }

    return (
        <>
        {
            result.data.journeys.data.map((d, index) => {
                return(
                    <Container
                        key = {`jList-item-${index}`}
                        className = {index%2===0?"tbl-row even":"tbl-row odd"}
                    >
                        <div className="hasLink" onClick = {() => rowClicked(d.departureStationID)}>
                            <span className="label">Lainausasema</span>{ d.departureStationName }
                        </div>
                        <div className="hasLink" onClick = {() => rowClicked(d.returnStationId)}>
                            <span className="label">Palautusasema</span>{ d.returnStationName }
                        </div>
                        <div><span className="label">Matkan pituus</span>{ metersToKm(d.coveredDistance) }</div>
                        <div><span className="label">Matkan kesto</span>{ secondsToHms(d.duration) }</div>

                    </Container> 
                )
            })
        }
        </>
    );
};

export default JourneyList;
