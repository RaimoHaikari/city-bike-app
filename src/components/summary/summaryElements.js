import styled from 'styled-components';
import HorizontalBarCharts from './HorizontalBarCharts';

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

    /* Piilotetaan pienemmiltä näytöiltä */
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
            grid-template-columns: 450px;
            grid-template-rows: 30px 500px;
        }
        

        &.CDD {

            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows: auto;

            width: 100%;

        }

    }

`;

export const CCDWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CCDValues = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    &:last-of-type {
        align-items: end;
    }

    h3 {
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fontSize.fs600};
        font-weight: ${({theme}) => theme.fontWeight.fwReqular};
        letter-spacing: 1px;
    }
    
    div.cddValueClass {
        margin: ${({theme}) => theme.size.size200} 0;
        font-weight: ${({theme}) => theme.fontWeight.fwBold};
    }
`;

/*
 * @todo: Tämä pitää saada fiksummaksi....
 */
export const HorizontalBarChartsContainer = styled.div`
    display: grid;

    @media (min-width: 1060px) {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
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

export const CDDTitleRowContainer = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({theme}) => theme.fontSize.fs700};
    font-weight: ${({theme}) => theme.fontWeight.fwBold};
    letter-spacing: 4px;
    text-transform: uppercase;
`;