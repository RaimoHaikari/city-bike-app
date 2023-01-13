import styled from 'styled-components';

export const Svg = styled.svg`

    outline: 1px solid navy;

    rect.mark {
        fill: ${({theme}) => theme.color.clrPrimary400};
    }

    g.tick line {
        stroke: ${({theme}) => theme.color.clrAccent500};
    }

    g.pyramid-xAxis-tick text,
    g.tick text {
        fill: ${({theme}) => theme.color.clrNeutral900};
        font-size: ${({theme}) => theme.fontSize.fs500};
    }

    .axisLabel {
        font-size: ${({theme}) => theme.fontSize.fs500};
    }
    
`;