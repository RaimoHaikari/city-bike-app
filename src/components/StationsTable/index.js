import { useNavigate } from "react-router-dom";

import {
    Table
} from "./tableElements";

/*
 * 
 */
const StationsTable = ({stations}) => {

    const navigate = useNavigate();

    const sortTable = () => {
        console.log("Jotain pitäs tehdä")
    }

    const rowCliked = (d) => {
        navigate(`/stations/${d.stationID}`);
    }

    return (
        <Table>
            <thead>
                <th onClick={() => sortTable('name')}>Nimi</th>
                <th onClick={() => sortTable('country')}>Kaupunki</th>
                <th onClick={() => sortTable('country')}>Kapasiteetti</th>
            </thead>
            <tbody>
            {
                stations.map((v,i) => {
                    return (
                        <tr 
                            onClick = {() => rowCliked(v)}
                            key={i}
                        >
                            <td>{v.nimi}</td>
                            <td>{v.kaupunki}</td>
                            <td>{v.kapasiteetti}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    );
};

export default StationsTable;