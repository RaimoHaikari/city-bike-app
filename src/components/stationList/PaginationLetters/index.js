import { useDispatch, useSelector } from "react-redux";

import {
    setSearchStr 
} from "../../../reducers/searchReducer";

import {
    Container
} from "./paginationLetterElements";

const PaginationLetters = () => {

    const dispatch = useDispatch();

    const { initialLetters, searchStr } = useSelector(state => state.search)

    const onInputChange = value => {
        dispatch(setSearchStr({str: value}))
    }

    return (
        <Container>
        {
            initialLetters.map(a => {
                return (
                    <div
                        key = {`alphabet-list-${a}`}
                        onClick = {() => onInputChange(a)}
                        className = { a === searchStr ? "active" : null}
                    >
                    {
                        a
                    }
                    </div>
                )
            })
        }
        </Container>
    );
};

export default PaginationLetters;