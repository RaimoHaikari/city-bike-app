import {
    OuterContainer,
    InnerContainer
} from "./summaryElements";


/*
 *
 */
const BarchartContainer = (props) => {

    const { caption, title } = props;

    return (
        <OuterContainer>
            <InnerContainer className="barChart">
                <h3>{ title }</h3>
                {
                    props.children
                }
                <p>{caption}</p>
            </InnerContainer>
        </OuterContainer>
    );
};

export default BarchartContainer;