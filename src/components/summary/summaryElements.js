import styled from 'styled-components';

export const OuterContainer = styled.div`
    padding:  ${({theme}) => theme.size.size600};

    display: flex;
    align-items: center;
    justify-content: center;
`;

/*
 *
 */
export const InnerContainer = styled.div`
    
    display: inline-grid;
    grid-gap: 10px;

    @media (min-width: 50em) {
        grid-template-rows: 200px;
        grid-template-columns: 200px 200px 200px;

        &.wide {
            grid-template-columns: 300px 300px;
        }
    }
`;

export const Info = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${({theme}) => theme.color.clrPrimary400};
    color: ${({theme}) => theme.color.clrNeutral100};
    padding:  ${({theme}) => theme.size.size300};
    border-radius: 20%;

    &.bg-neutral-900 {
        background-color: ${({theme}) => theme.color.clrNeutral900};
    }

    div.title {
        font-size: ${({theme}) => theme.fontSize.fs500};
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
        letter-spacing: 4px;
    }

    div.value {
        font-size: ${({theme}) => theme.fontSize.fs700};
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
    }

    div.label {
        font-size: ${({theme}) => theme.fontSize.fs600};
        letter-spacing: 2px;
        text-transform: uppercase;
    }
`;