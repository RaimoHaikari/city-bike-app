import styled from 'styled-components';

export const Container = styled.div`

    display: grid;
    gap: 1rem;

    @media (min-width: ${({theme}) => theme.breakPoint.md}){

        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 4fr;

    }

    h3.title {
        font-weight:  ${({theme}) => theme.fontWeight.fwBold};
    }

    p.description {
        margin: ${({theme}) => theme.size.size200} 0;
    }
`;