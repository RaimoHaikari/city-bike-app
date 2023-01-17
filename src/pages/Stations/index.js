import StationList from '../../components/stationList';
import PaginationLetters from "../../components/stationList/PaginationLetters";
import Header from "../../components/stationList/Header"

const Stations = () => {

    /*
     *<StationsTable values={result.data.stations.data} />
     */
    return (
        <div className='container'>
            <PaginationLetters />
            <Header />
            <StationList />
        </div>
    );
};



export default Stations;