import { useState } from "react";

import {
    OuterContainer,
    InnerContainer,
    CCDValues
} from "./summaryElements";

import CDD from "../graphs/CDD";

/*
 *
 */
const CDDContainer = ({ popularTrips }) => {

    const [ departed, setDeparted ] = useState([]);
    const [ returned, setReturned ] = useState([]);
    const [ activeStd, setActiveStd] = useState("");

    /*
     * Asemaa edustavan sektorin klikkaukseen reagointi
     */
    const arcHandler = (stationName) => {

        const _departed = [];
        const _returned = [];

        popularTrips.forEach(element => {
            if(element.departureStationName === stationName)
                _departed.push(element);

            if(element.returnStationName === stationName)
                _returned.push(element)
        });

        setDeparted(_departed);
        setReturned(_returned);
        setActiveStd(stationName);
    }


    return (
        <OuterContainer>
            <InnerContainer className="CDD">

                <CCDValues>

                    <h3>{activeStd}</h3>
                    <div>{activeStd !== "" ? "Lainat" : ""}</div>
                    {
                        returned.map((d,i) => {
                            return (
                                <div
                                    key = {`dep-${i}`}
                                >
                                {`${d.departureStationName} ${d.lkm}`}
                                </div>
                            )
                        })
                    }

                </CCDValues>

                <div>
                    <CDD 
                        loans = { popularTrips }
                        arcHandler = { arcHandler }
                    />   
                </div>

                <CCDValues>

                    <h3>{activeStd}</h3>
                    <div>{activeStd !== "" ? "Palautukset" : ""}</div>
                    {
                        departed.map((d,i) => {
                            return (
                                <div
                                    key = {`dep-${i}`}
                                >
                                {`${d.returnStationName} ${d.lkm}`}
                                </div>
                            )
                        })
                    }

                </CCDValues>

     

            </InnerContainer>
        </OuterContainer>
    );


};

/*


*/

export default CDDContainer;