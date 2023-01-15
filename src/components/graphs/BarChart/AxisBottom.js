export const AxisBottom = ({ innerHeight, xScale, tickFormat }) => xScale.ticks().map((tickValue, i) => {
    
    if(i%2 !== 0) return null;

    return (
        <g 
            key={tickValue}
            transform={`translate(${xScale(tickValue)},0)`}
            className="tick"
        >
            <line
                x1={0}
                y1={0}
                x2={0}
                y2={innerHeight + 3}
            />
            <text
                dy=".71em"
                y={innerHeight}
                style={{ textAnchor: "middle" }}
            >{tickValue}</text>
        </g>
    )
});