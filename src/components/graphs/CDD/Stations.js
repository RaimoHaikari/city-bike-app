const Stations = ({arc, chords, color, lblRingId, Names, outerRadius}) => {

    return (
        <g>
        {
            chords.groups.map((d, i) => {

                return (
                    <g key = {`chords-groups-${i}`}>
                        <path 
                            d = { arc(d) }
                            fill = { color(Names[d.index]) }
                        />
                        <text dy={-3}>
                            <textPath
                                startOffset = { d.startAngle * outerRadius }
                                href = {`#${lblRingId}`}
                            >
                                {Names[d.index]}
                            </textPath>
                        </text>
                    </g>
                )
            })
        }
        </g>
    );
};

export default Stations;