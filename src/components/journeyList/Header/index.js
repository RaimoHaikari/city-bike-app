import { Container } from "./headerElements";

const Header = () => {
    return (
        <Container>
            <div className="title">Lainausasema</div>
            <div className="title">Palautusasema</div>
            <div className="title">Matkan pituus</div>
            <div className="title">Kesto</div>
        </Container>
    );
};

export default Header;
