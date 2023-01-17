import {
    Info
} from "./summaryElements";

/*
 *
 */
const InfoBox = ({value, label}) => {
    return (
        <Info>
            <div className="value">{value}</div>
            <div className="label">{label}</div>
        </Info>
    );
};

export default InfoBox;