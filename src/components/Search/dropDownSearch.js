import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import {
    Container
} from "./searchElements";

const DropDownSearch = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [ searchStr, setSearchStr ] = useState("");

    const { finnishNames } = useSelector(state => state.search);

    const btnHandler = () => {

        if(isOpen === true) setSearchStr("");
        setIsOpen(!isOpen);

    }

    /*
     * Avataan valitun aseman tiedot
     */
    const clkHandler = (val) => {

        setSearchStr("");
        setIsOpen(false);

        navigate(`/stations/${val}`);

    }

    const getStationList = () => {

        return finnishNames.filter((e,i) => {
            const nimi = e.nimi;
            return nimi.toLowerCase().startsWith(searchStr.toLowerCase());
        })

    }

    return (
        <Container>
            <button
                onClick={btnHandler}
                className='dropBtn'
            > 
                <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                <span>Asemahaku</span>
            </button>
            <div
                id="namesDropdown" 
                className={isOpen === true ?  'dropdownContent show' : 'dropdownContent'}
            >

                <input 
                    type = "text"
                    value = { searchStr }
                    id = 'namesInput'
                    onChange={(e) => setSearchStr(e.target.value)}
                />

                <div className="listWrapper">

                {
                    getStationList().map((n) => {
                        return (
                            <p
                                key = {`st-namelist-item-${n.stationID}`}
                                onClick = {() => clkHandler(n.stationID)}
                            >
                                {n.nimi}
                            </p>
                        )
                    })
                }
                
                </div>




            </div>
        </Container>
    );
};

export default DropDownSearch;