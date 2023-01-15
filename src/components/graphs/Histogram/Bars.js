export const Bars = ({ data, height, tHWidth, x, xy }) => data.map((B,i) => {

    return(
        <g
            key={`hsTop-${i}`}
            transform={`translate(${x(B.x0)},${xy(B.length)})`}
        >
            <rect 
                width={tHWidth}
                x={1}
                height={height-xy(B.length)}
                style={{ fill: "var(--clr-primary-400)" }}
            />
        </g>
    )

});