import {
    Container
} from "./loadingAnimationElements";

const LoadingAnimation = ({msg = "Luetaan tietoa"}) => {
    return (
        <Container>
            <div className="msg">{msg}</div>
        </Container>
    );
};

export default LoadingAnimation;