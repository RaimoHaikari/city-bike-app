import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";

import VerticalBarchart from "../../components/graphs/VerticalBarchart";

/*
 *
 */
const BarchartContainer = ({ data, title,  yValue }) => {

    return (
        <OuterContainer>
            <InnerContainer className="barChart">
                <h3>{ title }</h3>
                <VerticalBarchart 
                  data= { data } 
                  yValue = { yValue }
                />
            </InnerContainer>
        </OuterContainer>
    );
};

export default BarchartContainer;