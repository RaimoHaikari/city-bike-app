const Stations = ({arc, chords, color, lblRingId, Names, outerRadius, arcHandler}) => {

    return (
        <g>
        {
            chords.groups.map((d, i) => {

                return (
                    <g key = {`chords-groups-${i}`}>
                        <path 
                            d = { arc(d) }
                            fill = { color(Names[d.index]) }
                            onClick = {() => arcHandler(Names[d.index])}
                            className = "stationArc"
                        />
                        <text 
                            dy={i % 2 !== 0 ? -25 : -5 }
                            className = "stationName"
                        >
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