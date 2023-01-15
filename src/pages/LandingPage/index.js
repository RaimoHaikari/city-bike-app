import {useUnemployment} from "../../hooks/useUnemployment";
const csvUrl = "https://static.observableusercontent.com/files/8a6057f29caa4e010854bfc31984511e074ff9042ec2a99f30924984821414fbaeb75e59654e9303db359dfa0c1052534691dac86017c4c2f992d23b874f9b6e";

const LandingPage = () => {

    const {data} = useUnemployment(csvUrl);

    if(data === null) 
        return null;

    return (
        <div>
            Jee, etusivu!
        </div>
    );
};

export default LandingPage;