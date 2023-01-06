import StationLink from "../stationLink";

/*
result.data.stations.map(p => p.nimi).join(', ')
*/
const StationList = ({stations}) => {
    return (
        <div>
            {
                stations.map(p => {
                    return (
                        <StationLink 
                            key= { p.stationID }
                            data = { p }
                        />
                    )
                })
            }
        </div>
    );
};

export default StationList;