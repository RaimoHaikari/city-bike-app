import BarChart from "../graphs/BarChart";

const LoansInfo = ({data}) => {
    return (
        <>

            <div className='steven-columns'>

                <h3>Minne oltiin menossa</h3>

                <BarChart 
                    data= { data.departedTrips.slice(0, 15) }
                    objName = "returnStationNimi"
                />

                <h3>Mistä oltiin tulossa</h3>
                
                <BarChart 
                    data= { data.returnedTrips.slice(0, 15) }
                    objName = "departureStationNimi"
                />

            </div>
        </>
    );
};


export default LoansInfo;