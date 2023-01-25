import styled from 'styled-components';

export const Container = styled.div`

    h2 {
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
        font-size: ${({theme}) => theme.fontSize.fs700};
    }

    h3 {
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
        font-size: ${({theme}) => theme.fontSize.fs500};
    }

    div {
        margin: ${({theme}) => theme.size.size300} 0;
    }

    ul {
        list-style-type: none;
        margin-left: ${({theme}) => theme.size.size300};
    }
`;