export const Labels = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map((d,i) => {

    return(
        <g
            key= { `hsTop-${i}` }
            transform= { `translate(${yScale(yValue(d))},${innerHeight})` }
            className = "labels"
        >
            <text 
                transform="translate(0,0) rotate(90)"
                x = { yScale.bandwidth() / 2 }
                y = { -5 }
                textAnchor="start"
            >{yValue(d)}</text>
        </g>
    )

});
