import { useNavigate } from "react-router-dom";

import { format, max, scaleBand, scaleLinear } from 'd3';

import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

import {
    Svg
} from "./barchartElements";


const width = 800;
const height = 600;

const margin = {
    top: 20,
    right: 100,
    bottom: 80,
    left: 250
};

const BarChart = ({data, linkObj, objName, stationName, xAxisLabel}) => {

    const navigate = useNavigate();

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

    
    const lblClickHandler = (id) => {

        let x = data.filter(d => d[objName] === id);

        if(x.length !== 1) return;

        x = x[0];
        //console.log(".", linkObj)
        
        navigate(`/stations/${x[linkObj]}`);
    }

    return (
        <Svg viewBox={`0 0 ${width} ${height}`}>
            <g transform={`translate(${margin.left},${margin.top})`}>

            <AxisLeft 
                yScale= { yScale } 
                stationName = { stationName }
                clickHandler = { lblClickHandler}
            />

            <AxisBottom 
                innerHeight = { innerHeight }
                xScale = { xScale }
            />

            <text
                className = "axisLabel"
                x={ innerWidth / 2 }
                y = { innerHeight + xAxisLabelOffset }
                textAnchor = "middle"
            >{xAxisLabel}</text>

            <Marks 
                activeName = { stationName }
                clickHandler = { lblClickHandler}
                data = { data }
                sourceObj = { objName }
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