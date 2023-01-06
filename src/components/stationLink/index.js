import { Link } from "react-router-dom";

const StationLink = ({data}) => {


    return (
        <div>
            <Link to={`/stations/${data.stationID}`}>
                {data.nimi}
            </Link>
        </div>
    );
};

export default StationLink;