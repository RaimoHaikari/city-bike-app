import {
    Container
} from "../stationListElements";

/*
 *
 */
const Listing = ({ stations }) => {
    return (
        <>
        {
            stations.map((v,i) => {
                
                return (
                    <Container
                        key = {`station-listing-${i}`}
                        className = {i%2===0?"tbl-row even":"tbl-row odd"}
                    >
                        <div>{v.nimi}</div>
                        <div>{v.kaupunki}</div>
                        <div>{v.kapasiteetti}</div>
                    </Container>
                )
            })
        }
        </>
    );
};

export default Listing;