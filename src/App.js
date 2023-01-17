import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { FIRST_LETTERS_OF_STATION_NAMES } from "./graphql/queries";
import {
  setInitialLetters
} from "./reducers/searchReducer";


import Footer from "./components/footer";
import Header from "./components/header";

import LandingPage from "./pages/LandingPage";
import Stations from "./pages/Stations";
// Yksittäisen lainausaseman tiedot
import Station from "./pages/Station";

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  const result = useQuery( FIRST_LETTERS_OF_STATION_NAMES );

  useEffect(() => {

      if(result.data){
        dispatch(setInitialLetters({
          letters: result.data.firstLettersOfStationNames
        }))
      }

  }, [result])

  if(result.loading) {
      return <div>Loading....</div>
  }

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