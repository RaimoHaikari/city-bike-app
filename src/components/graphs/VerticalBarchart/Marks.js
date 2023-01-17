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


/*
            x = {0}
            y = {yScale(yValue(d))}
            width = {xScale(xValue(d))}
            height = {yScale.bandwidth()}

*/