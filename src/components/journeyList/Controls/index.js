/* eslint-disable default-case */
import { useDispatch, useSelector } from "react-redux";

import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import {
    faStepForward,
    faStepBackward,
    faForward,
    faBackward
} from "@fortawesome/free-solid-svg-icons";

import {
    setPage
} from "../../../reducers/searchReducer";

import {
    Container
} from "./controlsElements";

const Controls = () => {

    const dispatch = useDispatch();

    const { firstPage, prevPage, nextPage, lastPage, page, count } = useSelector(state => state.search);

    const btnHandler = (val) => {

        switch (val) {
            case 'first':
                dispatch(setPage({page: 1}));
                break;                
            case 'prev':
                dispatch(setPage({page: prevPage}));
                break;
            case 'next':
                dispatch(setPage({page: nextPage}));
                break;
            case 'last':
                dispatch(setPage({page: lastPage}));
                break;

        }
        
    }

    return (
        <Container>

            <div>

                <button
                    disabled = { typeof(firstPage) === 'undefined' }
                    onClick = { () => btnHandler('first') }
                >
                    <FontAwesomeIcon icon={faStepBackward} />
                </button>

                <button
                    disabled = { typeof(prevPage) === 'undefined' }
                    onClick = { () => btnHandler('prev') }
                >
                    <FontAwesomeIcon icon={faBackward} />
                </button>

                <button
                    disabled = { typeof(nextPage) === 'undefined' }
                    onClick = { () => btnHandler('next') }
                >
                    <FontAwesomeIcon icon={faForward} />
                </button>

                <button
                    disabled = { typeof(lastPage) === 'undefined' }
                    onClick = { () => btnHandler('last') }
                >
                    <FontAwesomeIcon icon={faStepForward} />
                </button>

            </div>

            <div>
                {
                    typeof(lastPage) !== 'undefined'
                    ? <div className="pageInfo">{`Sivu ${page} / ${lastPage}`}</div>
                    : null
                }
            </div>

            <div>
                {
                    typeof(lastPage) !== 'undefined'
                    ? <div className="countInfo">Tietueita sivulla: {count} kpl</div>
                    : null
                }
            </div>
           



                
        </Container>
    );
};

export default Controls;