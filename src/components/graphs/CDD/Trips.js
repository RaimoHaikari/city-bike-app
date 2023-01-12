const Trips = ({ color, chords, ribbon, Names }) => {

    return (
        <g fillOpacity={0.75}>
        {
            chords.map((d,i) => {

                return(
                    <path
                        key = { `chords-${i}` }
                        d = { ribbon(d) }
                        fill = { color(Names[d.target.index]) }
                        className = "chords"
                    >
                        <title>
                        {
                            `${Names[d.source.index]} owes ${Names[d.target.index]} ${d.source.value}`
                        }
                        </title>
                    </path>
                );
            })
        }
        </g>
    );

};

export default Trips;