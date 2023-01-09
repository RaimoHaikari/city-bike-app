import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchStr: ""
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
        }
    }
})

export const { setSearchStr } = searchSlice.actions;

export default searchSlice.reducer;