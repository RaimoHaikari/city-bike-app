/*
result.data.stations.map(p => p.nimi).join(', ')
*/
const StationList = ({stations}) => {
    return (
        <div>
            {
                stations.map(p => p.nimi).join(', ')
            }
        </div>
    );
};

export default StationList;