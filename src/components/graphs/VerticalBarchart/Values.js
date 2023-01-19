export const Values = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map((d,i) => {

    return(
        <g
            key = {`hsTop-${i}`}
            transform = {`translate(${yScale(yValue(d))},${0})`}
            className = "values"
        >
            <text 
                x = { yScale.bandwidth() / 2 }
                y = { innerHeight - xScale(xValue(d)) - 20 }
                text-anchor="middle"
            >{xValue(d)}</text>
        </g>
    )

});
