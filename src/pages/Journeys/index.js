import JourneyList from '../../components/journeyList';
import Controls from '../../components/journeyList/Controls';
import Header from '../../components/journeyList/Header';

const Journeys = () => {

    return (
        <div className="container">
            <Controls />
            <Header />
            <JourneyList />
        </div>
    );
};

export default Journeys;