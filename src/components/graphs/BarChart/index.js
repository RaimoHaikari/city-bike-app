import { format, max, scaleBand, scaleLinear } from 'd3';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import {
    Svg
} from "./barchartElements";


const width = 960;
const height = 800;

const margin = {
    top: 20,
    right: 20,
    bottom: 80,
    left: 200
};

const BarChart = ({data, objName}) => {

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const xValue = d => d.lkm;
    const yValue = d => d[objName];

    const xAxisLabelOffset = 60;

    const siFormat = format('.2s');
    const xAxisTickFormat = n => siFormat(n).replace('G','B');


    const xScale =  scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth]);

    const yScale = scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.1);


    /*
<svg width={width} height={height}>
<Svg viewBox="0 0 194.36 12.64" >
<svg  viewBox=`0 0 ${width} ${height}`>
    */
    return (
        <Svg  viewBox={`0 0 ${width} ${height}`}>
            <g transform={`translate(${margin.left},${margin.top})`}>

            <AxisLeft 
                yScale={ yScale }
            />

            <AxisBottom 
                innerHeight = { innerHeight }
                xScale = { xScale }
                tickFormat = {xAxisTickFormat}
            />

            <text
                className = "axisLabel"
                x={ innerWidth / 2 }
                y = { innerHeight + xAxisLabelOffset }
                textAnchor = "middle"
            >Population</text>

            <Marks 
                data = { data }
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

export default BarChart;