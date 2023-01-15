export const Values = ({ barValueAdjust, data, tHWidth, x, xy }) => data.map((B,i) => {

    return(
        <g
            key={`hsTop-${i}`}
            transform={`translate(${x(B.x0)},${xy(B.length)})`}
        >
            <text 
                y = { 0.5 * tHWidth + barValueAdjust }
                transform="rotate(270)"
                text-anchor="start"
            >{B.length}</text>
        </g>
    )

});