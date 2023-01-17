export const Labels = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map((d,i) => {

    return(
        <g
            key={`hsTop-${i}`}
            transform={`translate(${yScale(yValue(d))},${innerHeight})`}
        >
            <text 
                x = { yScale.bandwidth() / 2 }
                y = { 20 }
                text-anchor="middle"
            >{yValue(d)}</text>
        </g>
    )

});
