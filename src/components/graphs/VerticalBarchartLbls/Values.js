export const Values = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map((d,i) => {

    const hAdjValue = yScale.bandwidth() / 4;
    const vAdjValue = -10;

    return(
        <g
            key = {`hsTop-${i}`}
            transform = {`translate(${yScale(yValue(d))},${0})`}
            className = "values"
        >
            <text 
                x = { hAdjValue }
                y = { vAdjValue + innerHeight - xScale(xValue(d))}
                textAnchor="end"
                transform={`rotate(90, ${hAdjValue}, ${vAdjValue + innerHeight - xScale(xValue(d))})`}
            >{xValue(d)}</text>
        </g>
    )

});
