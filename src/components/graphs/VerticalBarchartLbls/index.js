import { format, max, scaleBand, scaleLinear } from 'd3';

import { Marks } from './Marks';
import { Values } from './Values';
import { Labels } from './Labels';

import { Svg } from "./barchartElements";


const width = 800;
const height = 800;

const margin = {
    top: 150,
    right: 10,
    bottom: 150,
    left: 10
};

/*
 * Pystysuuntainen pylväsdiagrammi.
 *
 * Eroaa histogrammista sikäli, että esitettävä aineisto sisältää valmiina pylväiden määrän ja korkeudet.
 * Histogrammissa pylväiden korkeus lasketaan aineiston ja halutun pylväsmäärän perusteella.
 */
const D3BarChart = ({data, yValue, dispWidth=800}) => {

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xValue = d => d.number_of_events;

    const xAxisLabelOffset = 60;

    const siFormat = format('.2s');
    const xAxisTickFormat = n => siFormat(n).replace('G','B');


    const xScale =  scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerHeight]);

    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerWidth])
        .padding(0.1);


    /*
     */
    return (
        <Svg width = {dispWidth} viewBox={`0 0 ${width} ${height}`}>
            <g transform={`translate(${margin.left},${margin.top})`}>

                <Labels 
                    data = { data }
                    innerHeight = { innerHeight }
                    margin = { margin}
                    yScale = { yScale }
                    yValue = { yValue }
                    xScale = { xScale }
                    xValue = { xValue }
                    tooltipFormatValue = {xAxisTickFormat}                
                />

                <Values 
                    data = { data }
                    innerHeight = { innerHeight }
                    yScale = { yScale }
                    yValue = { yValue }
                    xScale = { xScale }
                    xValue = { xValue }
                    tooltipFormatValue = {xAxisTickFormat}                
                />
           
                <Marks 
                    data = { data }
                    innerHeight = { innerHeight }
                    yScale = { yScale }
                    yValue = { yValue }
                    xScale = { xScale }
                    xValue = { xValue }
                    tooltipFormatValue = {xAxisTickFormat}
                />
                   
            </g>
        </Svg>
    );
};

export default D3BarChart;

