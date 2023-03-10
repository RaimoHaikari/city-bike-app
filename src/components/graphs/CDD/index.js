/*
 * https://observablehq.com/@d3/directed-chord-diagram
 *
 * https://observablehq.com/@d3/directed-chord-diagram
 * https://stackoverflow.com/questions/21813723/change-and-transition-dataset-in-chord-diagram-with-d3/21923560#21923560
 * http://jsfiddle.net/KjrGF/12/
 *
 */

import { useEffect } from "react";
import { useTimer } from "../../../hooks/useTimer";

import {
    arc as d3Arc,
    chordDirected,
    descending,
    ribbonArrow,
    scaleOrdinal,
    schemeCategory10
} from "d3";

import {
    Svg
} from "./cddElements";

import { useMatrix } from "../../../hooks/useMatrix";

import LabelRing from "./LabelRing";
import Stations from "./Stations";
import Trips from "./Trips";

const labelRingID = "labelRing";

/*
 * @activeIndex: kehätä aktivoidun aseman indeksi matkat kokoavassa matriisissa
 */
const CDD = ({loans, arcHandler, activeIndex}) => {

    const { matrix, names } = useMatrix(loans);

    const { 
        index,
        startTimer,
        stopTimer,
        setLength
    } = useTimer();

    useEffect(() => {
        setLength(names.length);
        startTimer();
    }, [names])

    useEffect(() => {

        if(typeof(names[index]) !== 'undefined'){
            arcHandler(index, names[index]);
        }
        
    }, [index])

    const width = 840;
    const height = 840;

    const margins = {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50
    }

    const innerWidth = width - margins.left - margins.right;
    const innerHeight = height - margins.top - margins.bottom;

    const innerRadius = Math.min(innerWidth, innerHeight) * 0.5 - 20;
    const outerRadius = innerRadius + 25;

    if(matrix.length === 0) return null;

    const chord = chordDirected()
        .padAngle(20 / innerRadius)
        .sortSubgroups(descending)
        .sortChords(descending);

    const arc = d3Arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    const ribbon = ribbonArrow()
        .radius(innerRadius - 0.5)
        .padAngle(2 / innerRadius);

    const chords = chord(matrix);

    const color = scaleOrdinal(names, schemeCategory10);

    /*
     * Mikäli otsikkokaarta on klikattu, pysäytetään automaattinen toisto
     * ja välitetään aktiivisen valinnan tiedot eteenpäin.
     */  
    const arcHandlerMiddleWare = (stationIndex, stationName) => {
        stopTimer();
        arcHandler(stationIndex, stationName);
    }

    return (

        <Svg width = "500" viewBox={`${width/-2} ${height/-2} ${width} ${height}`}>

            <LabelRing 
                id = { labelRingID }
                outerRadius = {outerRadius}
            />
            <Trips 
                color = { color }
                chords = { chords } 
                ribbon = { ribbon }
                Names = { names }
                activeIndex = {activeIndex}
            />
            <Stations
                arc = { arc } 
                chords = { chords }
                color = { color } 
                lblRingId = { labelRingID }
                Names = { names } 
                outerRadius = { outerRadius }
                arcHandler = { arcHandlerMiddleWare }
                activeIndex = {activeIndex}
            />           

        </Svg>

    );
};

export default CDD;

