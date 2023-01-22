import {
    HorizontalBarChartsContainer
} from "./summaryElements"

const HorizontalBarCharts = (props) => {
    return (
        <HorizontalBarChartsContainer>
            {props.children}
        </HorizontalBarChartsContainer>
    );
};

export default HorizontalBarCharts;