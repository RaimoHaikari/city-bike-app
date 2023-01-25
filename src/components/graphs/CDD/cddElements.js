import styled from 'styled-components';

export const Svg = styled.svg`

    path.chords {
        mix-blend-mode: multiply;
    }

    path.stationArc {
        cursor: pointer;
    }

    text.stationName {
        font-size: ${({theme}) => theme.fontSize.fs600};
    }
`;