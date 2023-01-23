import styled from 'styled-components';

export const Svg = styled.svg`

    max-width: 100%; 
    height: auto; 
    height: intrinsic;
    outline-width: 1px;
    outline-style: solid;
    border-radius: 5px;
    background-color: ${({theme}) => theme.color.clrAccent100};

    g rect.mark {
        fill: ${({theme}) => theme.color.clrPrimary400};
    }

    g.labels text,
    g.values text {
        fill: ${({theme}) => theme.color.clrNeutral900};
        font-size: ${({theme}) => theme.fontSize.fs700};
    }

`;