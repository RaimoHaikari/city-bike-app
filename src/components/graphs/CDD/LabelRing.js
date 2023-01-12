import { arc } from "d3";

const LabelRing = ({id, outerRadius}) => {

    return (
        <path 
            fill="none"
            id = { id }
            d = {arc()({outerRadius, startAngle: 0, endAngle: 2 * Math.PI})}
        />
    );
};

export default LabelRing;