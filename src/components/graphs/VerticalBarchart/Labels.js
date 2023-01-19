export const Labels = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map((d,i) => {

    return(
        <g
            key= { `hsTop-${i}` }
            transform= { `translate(${yScale(yValue(d))},${innerHeight})` }
            className = "labels"
        >
            <text 
                x = { yScale.bandwidth() / 2 }
                y = { 35 }
                textAnchor="middle"
            >{yValue(d)}</text>
        </g>
    )

});
