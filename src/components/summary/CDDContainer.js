import { useState } from "react";

import {
    OuterContainer,
    InnerContainer,
    CCDWrapper,
    CCDValues
} from "./summaryElements";

import CDD from "../graphs/CDD";

/*
 *
 */
const CDDContainer = ({ popularTrips }) => {

    const [ activeIndex, setActiveIndex] = useState(-1);
    const [ departed, setDeparted ] = useState([]);
    const [ returned, setReturned ] = useState([]);
    const [ activeStd, setActiveStd] = useState("");
    
    const sortByLkm = (a,b) => {

        if(a.lkm < b.lkm) return 1;

        if(a.lkm > b.lkm) return -1;

        return 0;
    }

    /*
     * Asemaa edustavan sektorin klikkaukseen reagointi
     *
     * @param stationName Kehältä valitun aseman nimi
     * @param stationIndex Kehältä valitun aseman indeksi matkat kokoavassa matriisissa
     */
    const arcHandler = (stationIndex, stationName) => {

        const _departed = [];
        const _returned = [];

        if(stationIndex === activeIndex) {
            setDeparted([]);
            setReturned([]);
            setActiveStd("");
            setActiveIndex(-1);

            return
        }

        /* Kerätään tehdyt ja palautetut lainat */
        popularTrips.forEach(element => {
            if(element.departureStationName === stationName)
                _departed.push(element);
            else if(element.returnStationName === stationName)
                _returned.push(element)
        });

        /* Lajitellaan taulukon matkojen määrän perusteella */
        _departed.sort(sortByLkm);
        _returned.sort(sortByLkm);

        setDeparted(_departed);
        setReturned(_returned);
        setActiveStd(stationName);
        setActiveIndex(stationIndex);

    }

    return (
        <OuterContainer>
            <InnerContainer className="CDD">

                <CCDValues>

                    <h3>{activeStd}</h3>
                    <div className="cddValueClass">{activeStd !== "" ? "Lainat" : ""}</div>
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

                <CCDWrapper>
                    <CDD 
                        loans = { popularTrips }
                        arcHandler = { arcHandler }
                        activeIndex = { activeIndex }
                    />   
                </CCDWrapper>

                <CCDValues>

                    <h3>{activeStd}</h3>
                    <div className="cddValueClass">{activeStd !== "" ? "Palautukset" : ""}</div>
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

     

            </InnerContainer>
        </OuterContainer>
    );


};

/*


*/

export default CDDContainer;