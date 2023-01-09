import {
    Table
} from "./tableElements";

/*
 * 
 */
const StationsTable = ({stations}) => {

    const sortTable = () => {
        console.log("Jotain pitäs tehdä")
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
                        <tr key={i}>
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