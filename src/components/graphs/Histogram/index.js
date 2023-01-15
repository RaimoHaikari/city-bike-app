/*
 * Histogram
 * https://observablehq.com/@d3/histogram
 */
import {
    bin,
    max,
    scaleLinear
} from "d3";

import {
    Svg
} from "./histogramElements";

import { Bars } from "./Bars";
import { Values } from "./Values";
import { Labels } from "./Labels";

const width = 640;          // outer width of chart, in pixels
const height = 400;         // outer height of chart, in pixels
const marginTop = 60;       // top margin, in pixels
const marginRight = 10;     // right margin, in pixels
const marginBottom = 80;    // bottom margin, in pixels
const marginLeft = 10;      // left margin, in pixels

const barValueMarginal = 10;    // pylvään arvon ja pylvään väliin jättävä hajurako
const barLabelMarginal = 10;    // pylvään otsikon ja pylvään väliin jättävä hajurako
const barValueAdjust = 6;       // kuin paljon arvon kohtaa siirretään, jotta osuu suhten keskelle pylvästä

const Histogram = ({data, settings}) => {

    const binCount = settings.binCount;

    const x = scaleLinear()
        .range([0,width])
        .domain([0,binCount])

    const binValue = d => d.value;

    const histogramXValues = bin()
        .domain(x.domain())
        .thresholds(x.ticks(binCount))
        .value(binValue);

    
    const xBins = histogramXValues(data);

    const xy = scaleLinear()
        .domain([0, max(xBins, function(d){
            return d.length;
        })])
        .range([height, 0]);

    const tHWidth = x(xBins[0].x1) - x(xBins[0].x0) - 1;

    return (
        <Svg viewBox={`0 0 ${marginLeft + width + marginRight} ${marginTop + height + marginBottom }`}>

            <g transform={`translate(${marginLeft},${marginTop + height + barLabelMarginal})`}>
                <Labels 
                    barValueAdjust = { barValueAdjust }
                    data = { xBins.filter(d => d.length > 0) }
                    x = { x }
                    objName = { settings.label}
                />           
            </g>

            <g transform={`translate(${marginLeft},${marginTop - barValueMarginal})`}>
                <Values 
                    barValueAdjust = { barValueAdjust }
                    data = { xBins.filter(d => d.length > 0) } 
                    tHWidth = { tHWidth }
                    x = { x }
                    xy = { xy }
                />
            </g>

            <g transform={`translate(${marginLeft},${marginTop})`}>

                <Bars 
                    data = { xBins } 
                    height = { height } 
                    tHWidth = { tHWidth }
                    x = { x }
                    xy = { xy }
                />

            </g>
        </Svg>
    );
};


export default Histogram;