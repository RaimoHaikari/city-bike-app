import {
    Info
} from "./summaryElements";

/*
 *
 */
const ThereLineInfoBox = ({label, title, value}) => {
    return (
        <Info className="bg-neutral-900">
            <div className="title">{title}</div>
            <div className="value">{value}</div>
            <div className="label">{label}</div>
        </Info>
    );
};

export default ThereLineInfoBox;