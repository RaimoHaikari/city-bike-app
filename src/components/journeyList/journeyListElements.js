import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: ${({theme}) => theme.size.size100};
    grid-template-columns: 1fr;
    
    &.tbl-row {
        padding-top: ${({theme}) => theme.size.size200};
        padding-bottom: ${({theme}) => theme.size.size100};
        padding-left: ${({theme}) => theme.size.size200};
    }

    &.tbl-row:last-of-type {
        border-bottom-width: ${({theme}) => theme.size.size100};
        border-bottom-style: solid;
        border-bottom-color:  ${({theme}) => theme.color.clrPrimary400};;
        margin-bottom: ${({theme}) => theme.size.size600};
        
    }

    &.odd {
        background: ${({theme}) => theme.color.clrAccent100};
    }

    SPAN.label {
        margin-right: ${({theme}) => theme.size.size200};
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
    }

    DIV.hasLink {
        cursor: pointer;
    }

    @media screen and (min-width: ${({theme}) => theme.breakPoint.md}){

        grid-template-columns: 2fr 2fr 1fr 1fr;
        
        SPAN.label {
            display: none;
        }

    }
`;