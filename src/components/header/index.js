import { Link } from "react-router-dom";

import Sitelogo from "../logos/Sitelogo";

import DropDownSearch from "../Search/dropDownSearch";

const Header = () => {

    return (
        <header className="primary-header">

            <div className="container">

                <div  className="nav-wrapper">

                    <Link to="/">
                        <Sitelogo />
                    </Link>

                    <DropDownSearch />

                    <nav className="primary-navigation">
                        <ul role="list" aria-label="Primary" className="nav-list" id="primary-navigation">
                            <li>
                                <Link to="/stations">Asemat</Link>
                            </li>
                            <li>
                                <Link to="/journeys">Lainat</Link>
                            </li>
                        </ul>
                    </nav>
                
                </div>

            </div>

        </header>
    );

};

export default Header;