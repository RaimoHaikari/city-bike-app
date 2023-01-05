import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div>

                <Link to="/">
                    Y.E.A.H
                </Link>

                <nav>
                    <ul>
                        <li>
                            <Link to="/stations">Asemat</Link>
                        </li>
                    </ul>
                </nav>
            
            </div>
        </header>
    );

};

export default Header;