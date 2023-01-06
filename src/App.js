import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";

import LandingPage from "./pages/LandingPage";
import Stations from "./pages/Stations";
// Yksittäisen lainausaseman tiedot
import Station from "./pages/Station"

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/stations/:id" element={<Station />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;