import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";

import ThreeLineInfoBox from "./ThreeLineInfoBox";

const WideSummary = ({values}) => {
    return (
        <OuterContainer>
            <InnerContainer className="wide">
            {
                values.map((val, i) => {
                    return (
                        <ThreeLineInfoBox 
                            key={`threline-info-${i}`}
                            title={ val.title }
                            label= { val.label }
                            value={ val.value}
                        />
                    )
                })
            }
            </InnerContainer>        
        </OuterContainer>

    );
};

export default WideSummary;