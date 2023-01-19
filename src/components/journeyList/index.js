import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useQuery } from '@apollo/client';

import {
    GET_JOUNERYS
} from "../../graphql/queries";

import {
    activateControls
} from "../../reducers/searchReducer";

import {
    Container
} from "./journeyListElements";

//import JourneyListItem from "./JourneyListItem";

const JourneyList = () => {

    const dispatch = useDispatch();

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
        return <div>Loading....</div>
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

    return (
        <>
        {
            result.data.journeys.data.map((d, index) => {
                return(
                    <Container
                        key = {`jList-item-${index}`}
                        className = {index%2===0?"tbl-row even":"tbl-row odd"}
                    >
                        <div>{ d.departureStationName }</div>
                        <div>{ d.returnStationName }</div>
                        <div>{ metersToKm(d.coveredDistance) }</div>
                        <div>{ secondsToHms(d.duration) }</div>

                    </Container> 
                )
            })
        }
        </>
    );
};

export default JourneyList;
