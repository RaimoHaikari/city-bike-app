import styled from 'styled-components';

export const Container = styled.div`
    
    display: block;

    font-weight: ${({theme}) => theme.fontWeight.fwBold};
    padding-top: ${({theme}) => theme.size.size100};
    padding-bottom: ${({theme}) => theme.size.size100};
    padding-left: ${({theme}) => theme.size.size200};
    background: ${({theme}) => theme.color.clrPrimary400};
    color: ${({theme}) => theme.color.clrNeutral100};

    div.title {
        display: none;
    }

    @media screen and (min-width: ${({theme}) => theme.breakPoint.md}){
        display: grid;
        gap: 1rem;
        grid-template-columns: 2fr 2fr 1fr 1fr;

        padding-top: ${({theme}) => theme.size.size300};
        padding-bottom: ${({theme}) => theme.size.size300};

        div.title {
            display: inline-block;
        }
    }

`;