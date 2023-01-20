import Map from "../map";

import {
    Container
} from "./stationElements";

/*
component: <Map lat = {result.data.station.y} lng = {result.data.station.x} />
***/
const Home = ({data}) => {
    return (
        <Container>
            <div>
                <div className="factBox">
                    <p>{data.station.osoite}</p>
                    <p>{data.station.kaupunki}</p>
                    <p>Lainoja: {data.departedTrips.length}</p>
                    <p>Palautuksia: {data.returnedTrips.length}</p>
                </div>
            </div>
            <Map 
                lat = {data.station.y} lng = {data.station.x} 
            />
        </Container>
    );
};

export default Home;