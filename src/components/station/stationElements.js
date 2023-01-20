import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 3fr;

    .factBox {
        margin: ${({theme}) => theme.size.size100};
        padding:  ${({theme}) => theme.size.size100};
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.clrPrimary400};
        color: ${({theme}) => theme.color.clrNeutral100};
        font-size: ${({theme}) => theme.fontSize.fs600};
    }
`;

