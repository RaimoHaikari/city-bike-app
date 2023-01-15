import styled from 'styled-components';

export const Svg = styled.svg`

    outline: 1px solid navy;
    max-width: 100%; 
    height: auto; 
    height: intrinsic;



    g.mark rect {
        fill: ${({theme}) => theme.color.clrPrimary400};
    }

    g.mark text.active,
    g.mark rect.active {
        fill: ${({theme}) => theme.color.clrAccent400};
    }

    g.mark,
    g.tick {
        cursor: pointer;
    }

    g.tick line {
        stroke: ${({theme}) => theme.color.clrAccent500};
    }

    g.pyramid-xAxis-tick text,
    g.tick text {
        fill: ${({theme}) => theme.color.clrNeutral900};
        font-size: ${({theme}) => theme.fontSize.fs600};
    }

    g.tick.active text {
        fill: ${({theme}) => theme.color.clrAccent400};
    }

    .axisLabel {
        font-size: ${({theme}) => theme.fontSize.fs600};
    }
    
`;