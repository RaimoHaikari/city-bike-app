import styled from 'styled-components';

export const Container = styled.div`
    /* margin: 10px; */

    margin-top: ${({theme}) => theme.size.size300};
    margin-bottom: ${({theme}) => theme.size.size300};

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: start;


    div {

        display: flex;
        align-items: center;
        justify-content: center;
        
        padding: ${({theme}) => theme.size.size200};
        min-width: 40px;

        cursor: pointer;
    }

    div.active {
        background-color: ${({theme}) => theme.color.clrAccent400};
        color: ${({theme}) => theme.color.clrAccent100};
    }
`;