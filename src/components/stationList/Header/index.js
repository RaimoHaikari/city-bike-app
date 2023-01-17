import {
    Container
} from "../stationListElements";

const Header = () => {
    return (
        <Container className="header">
            <div>Nimi</div>
            <div>Kaupunki</div>
            <div>Kapasiteetti</div>
        </Container>
    );
};

export default Header;