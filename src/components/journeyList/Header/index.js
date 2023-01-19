import { Container } from "../journeyListElements";

const Header = () => {
    return (
        <Container className="header">
            <div>Lainausasema</div>
            <div>Palautusasema</div>
            <div>Matkan pituus</div>
            <div>Kesto</div>
        </Container>
    );
};

export default Header;
