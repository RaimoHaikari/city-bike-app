import styled from 'styled-components';

export const Svg = styled.svg`

    path.chords {
        mix-blend-mode: multiply;
        fill-opacity: 0.2;
    }

    path.active {
        fill-opacity: 1;
    }

    path.stationArc {
        cursor: pointer;
    }

    text.stationName {
        font-size: ${({theme}) => theme.fontSize.fs600};
    }
`;