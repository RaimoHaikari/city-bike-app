import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchStr: "A",
    initialLetters: [],
    page: 1,                // Lainauslistauksen aktiivinen sivu
    first: 100,
    firstPage: undefined,
    prevPage: undefined,
    nextPage: undefined,
    lastPage: undefined,
    count: undefined
}

const setControls = (state, lastPage, count) => {

    const newLastPage = lastPage;
    const newFirstPage = 1;
    const newPrevPage = (state.page - 1) > 1 ? (state.page - 1) : 1
    const newNextPage = (state.page + 1) < lastPage ? (state.page + 1) : lastPage;


    return {
        ...state,
        firstPage: newFirstPage,
        prevPage: newPrevPage,
        lastPage: newLastPage,
        nextPage: newNextPage,
        count: count
    }

}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        activateControls(state, action){

            const {count, lastPage} = action.payload
            return setControls(state, lastPage, count);

        },
        setInitialLetters(state, action){

            const { letters } = action.payload;

            const newState = {
                ...state,
                initialLetters: letters
            }

            return newState;

        },
        setSearchStr(state, action){

            const { str } = action.payload;

            const newState = {
                ...state,
                searchStr: str
            }

            return newState;
        },
        setPage(state, action) {

            const { page } = action.payload;

            const newState = {
                ...state,
                page: page
            }

            return newState;

        }
    }
})

export const { 
    activateControls, 
    setInitialLetters, 
    setPage, 
    setSearchStr 
} = searchSlice.actions;

export default searchSlice.reducer;