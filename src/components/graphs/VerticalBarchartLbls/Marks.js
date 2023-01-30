export const Marks = ({ data, innerHeight, xScale, xValue, yScale, yValue, tooltipFormatValue }) => data.map(d => {

    return(
        <rect 
            className="mark"
            key={yValue(d)}
            x = {yScale(yValue(d))}
            y = {innerHeight - xScale(xValue(d))}
            width = {yScale.bandwidth()}
            height = {xScale(xValue(d))}
        />
    )

});