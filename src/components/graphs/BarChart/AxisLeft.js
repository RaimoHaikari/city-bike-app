export const AxisLeft = ({ yScale }) => yScale.domain().map(tickValue => {
    return (
        <g
            key={tickValue}
            transform={`translate(0, ${yScale.bandwidth() / 2 + yScale(tickValue)})`}
            className="tick"
        >
            <text
                x={-3}
                dy=".32em"
                style={{ textAnchor: "end" }}
            >{tickValue}</text>
        </g>
    )
});