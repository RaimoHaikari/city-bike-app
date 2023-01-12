export const Marks = ({ data, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map(d => {

    return(
        <rect 
            className="mark"
            key={yValue(d)}
            x = {0}
            y = {yScale(yValue(d))}
            width = {xScale(xValue(d))}
            height = {yScale.bandwidth()}
        >
            <title>{tooltipFormatValue(xValue(d))}</title>
        </rect>
    )

});