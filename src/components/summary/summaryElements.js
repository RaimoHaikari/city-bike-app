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
    
    display: grid;
    grid-gap: 10px;

    h3 {
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fontSize.fs600};
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
        letter-spacing: 4px;
    }

    @media (max-width: 50em) {

        &.CDD {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            
            overflow: hidden;
            clip: rect(0,0,0,0);
            white-space: nowrap; /* added line */
            border: 0;
        }
    }

    @media (min-width: 50em) {

        grid-template-rows: 200px;
        grid-template-columns: 200px 200px 200px;

        &.wide {
            grid-template-columns: 300px 300px;
        }

        &.barChart {
            grid-template-columns: 500px;
            grid-template-rows: 30px 500px;
        }

        &.CDD {
            grid-template-columns: 800px;
            grid-template-rows: 30px 800px;
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