export const Marks = ({ activeName, clickHandler, data, sourceObj, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map(d => {

    return(
        <g className="mark">
            <rect 
                className={activeName === d[sourceObj]?"active": null}
                key={yValue(d)}
                x = {0}
                y = {yScale(yValue(d))}
                width = {xScale(xValue(d))}
                height = {yScale.bandwidth()}
                onClick = {() => clickHandler(d[sourceObj])}
            >
                <title>{xValue(d)}</title>
            </rect>
            <text
                x = {xScale(xValue(d)) + 10}
                y = {yScale(yValue(d)) + yScale.bandwidth()/2}
                className={activeName === d[sourceObj]?"active": null}
            >
                {xValue(d)}
            </text>
        </g>

    )

});