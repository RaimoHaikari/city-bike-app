import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    gap: 1rem;

    @media screen and (min-width: ${({theme}) => theme.breakPoint.md}){
        grid-template-columns: 1fr 1fr 2fr;
    }

    margin-top: ${({theme}) => theme.size.size300};
    margin-bottom: ${({theme}) => theme.size.size300};

    div.pageInfo {
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
    }

    button {
        border: 1px solid #000;
        background: ${({theme}) => theme.color.clrAccent400};
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;      

        font-size: ${({theme}) => theme.fontSize.fs600};
        width: ${({theme}) => theme.size.size600};
    }

    button:hover:not([disabled]) {
        background: ${({theme}) => theme.color.clrPrimary400};
    }

    button:disabled,
    button[disabled]{
        background: lightgray;
    }

`;