import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";

import CDD from "../graphs/CDD";

/*
 *
 */
const CDDContainer = ({ popularTrips }) => {
    return (
        <OuterContainer>
            <InnerContainer className="CDD">
                <h3>Suosituimmat matkat (kesken...)</h3>
                <CDD 
                    loans = { popularTrips }
                />           
            </InnerContainer>
        </OuterContainer>
    );
};

/*


*/

export default CDDContainer;