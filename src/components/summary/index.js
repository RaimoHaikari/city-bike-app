import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";

import InfoBox from "./InfoBox";

const Summary = ({nOfStations, nOfBicycles, nOfEvents}) => {

    return (
        <OuterContainer>
            <InnerContainer>
                <InfoBox 
                    label="Asemaa"
                    value={`${nOfStations}`}
                />
                <InfoBox 
                    label="Polkupyörää"
                    value={`${nOfBicycles}`}
                />
                <InfoBox 
                    label="Tapahtumaa"
                    value={`${nOfEvents}`}
                />
            </InnerContainer>        
        </OuterContainer>

    );
};

export default Summary;