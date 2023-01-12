import styled from "styled-components";

import Icon from "./icon";

const Svg = styled(Icon)`
    width: ${({theme}) => theme.size.size900};
    height: ${({theme}) => theme.size.size900};
`;

const Sitelogo = () => {
    return (
        <Svg viewBox="0 0 52.917 52.917">
            <rect x="2.3734" y="5.8807" width="6.6903" height="43.217" fill="#f00" stopColor="#000000" strokeWidth = ".1"/>
            <ellipse cx="31.008" cy="25.001" rx="19.536" ry="19.12" stopColor="#000000" strokeWidth=".1" />
            <g fill="#f00">
                <rect transform="matrix(.85903 .51192 -.52823 .8491 0 0)" x="38.177" y="-18.518" width="2.7939" height="51.64" stopColor="#000000" strokeWidth=".10001"/>
                <rect x="31.944" y="41.371" width="15.12" height="7.7266" stopColor="#000000" strokeWidth=".1"/>
                <rect x="10.937" y="11.119" width="15.12" height="7.7266" stopColor="#000000" strokeWidth=".1"/>
            </g>
        </Svg>
    );
};

export default Sitelogo;