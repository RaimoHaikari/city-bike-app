export const Labels = ({ barValueAdjust, data, x, objName }) => data.map((B,i) => {

    return(
        <g
            key={`hsTop-${i}`}
            transform={`translate(${x(B.x0) + barValueAdjust},${0})`}
        >
            <text 
                transform="translate(0,0) rotate(90)"
                text-anchor="start"
            >
            {B[0][objName]}
            </text>
        </g>
    )

});