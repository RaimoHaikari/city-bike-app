import Map from "../map";

import {
    Container
} from "./stationElements";

/*
component: <Map lat = {result.data.station.y} lng = {result.data.station.x} />
***/
const Home = ({data}) => {

    const getNumberOfLoans = () => {

        let sum = 0;
       
        data.departedTrips.forEach(element => {
            sum = sum + element.lkm;
        });

        return sum;
    }

    const getNumberOfReturns = () => {

        let sum = 0;
       
        data.returnedTrips.forEach(element => {
            sum = sum + element.lkm;
        });

        return sum;
    }


    return (
        <Container>
            <div>
                <div className="factBox">
                    <p>{data.station.osoite}</p>
                    <p>{data.station.kaupunki}</p>
                    <p>Lainoja: { getNumberOfLoans() }</p>
                    <p>Palautuksia: { getNumberOfReturns() }</p>
                </div>
            </div>
            <Map 
                lat = {data.station.y} lng = {data.station.x} 
            />
        </Container>
    );
};

export default Home;