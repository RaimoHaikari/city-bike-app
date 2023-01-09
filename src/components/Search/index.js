import { useDispatch, useSelector } from "react-redux";

import {
    setSearchStr
} from "../../reducers/searchReducer"

import {
    SearchContainer,
    Input
} from "./searchElements"

const Search = () => {

    const dispatch = useDispatch();

    const { searchStr } = useSelector(state => state.search)

    const onInputChange = value => {

        dispatch(setSearchStr({str: value}))

    }


    return (
        <SearchContainer>
            <Input 
                type="text"
                value={ searchStr }
                onChange={e => onInputChange(e.target.value)}
            />
        </SearchContainer>
    );
};

export default Search;