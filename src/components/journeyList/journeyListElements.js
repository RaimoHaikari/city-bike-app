import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    
    &.header {
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
        padding-top: ${({theme}) => theme.size.size300};
        padding-bottom: ${({theme}) => theme.size.size300};
        padding-left: ${({theme}) => theme.size.size200};
        background: ${({theme}) => theme.color.clrPrimary400};
        color: ${({theme}) => theme.color.clrNeutral100};
    }
    &.tbl-row {
        padding-top: ${({theme}) => theme.size.size200};
        padding-bottom: ${({theme}) => theme.size.size100};
        padding-left: ${({theme}) => theme.size.size200};
        cursor: pointer;
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
`;