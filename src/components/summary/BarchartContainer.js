import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";

import VerticalBarchart from "../../components/graphs/VerticalBarchart";

/*
 *
 */
const BarchartContainer = ({eventByWeekday}) => {
    return (
        <OuterContainer>
            <InnerContainer className="barChart">
                <h3>Lainat viikonpäivittäin</h3>
                <VerticalBarchart 
                  data={eventByWeekday}
                />
            </InnerContainer>
        </OuterContainer>
    );
};

export default BarchartContainer;