import StationLink from "../stationLink";

import StationsTable from "../StationsTable";

/* 
 *             <Search 
                onSearch = { onSearch }
                searchStr = { searchStr}
            />
 */
const StationList = ({stations}) => {
    return (
        <div>

            <StationsTable 
                stations= { stations }
            />
        </div>
    );
};

export default StationList;