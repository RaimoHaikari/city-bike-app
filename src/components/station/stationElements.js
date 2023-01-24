import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 1rem;
    
    .factBox {
        font-size: ${({theme}) => theme.fontSize.fs600};
    }

    .factBox p span {
        font-weight:  ${({theme}) => theme.fontWeight.fwBold};
    }

    @media (min-width: ${({theme}) => theme.breakPoint.md}){

        grid-template-columns: 1fr 3fr; 

        .factBox {
            margin: ${({theme}) => theme.size.size100};
            padding:  ${({theme}) => theme.size.size100};
            border-radius: 10px;
            background-color: ${({theme}) => theme.color.clrPrimary400};
            color: ${({theme}) => theme.color.clrNeutral100};
            font-size: ${({theme}) => theme.fontSize.fs600};
        }

        .factBox p span {
            font-weight:  ${({theme}) => theme.fontWeight.fwReqular};
        }

    }
`;

