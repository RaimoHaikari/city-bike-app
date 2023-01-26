const Trips = ({ color, chords, ribbon, Names, activeIndex}) => {

    return (
        <g fillOpacity={0.75}>
        {
            chords.map((d,i) => {

                let active = false;

                if(d.target.index === activeIndex)
                    active = true;
                else if(d.source.index === activeIndex)
                    active = true;


                return(
                    <path
                        key = { `chords-${i}` }
                        d = { ribbon(d) }
                        fill = { color(Names[d.target.index]) }
                        className = {active ? "chords active" : "chords"}
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