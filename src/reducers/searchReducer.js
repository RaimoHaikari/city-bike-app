import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchStr: "A",
    initialLetters: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchStr(state, action){

            const {str} = action.payload;

            const newState = {
                ...state,
                searchStr: str
            }

            return newState;
        },
        setInitialLetters(state, action){

            const {letters} = action.payload;

            const newState = {
                ...state,
                initialLetters: letters
            }

            return newState;

        }
    }
})

export const { setInitialLetters, setSearchStr } = searchSlice.actions;

export default searchSlice.reducer;