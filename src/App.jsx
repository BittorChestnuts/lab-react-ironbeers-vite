import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeerPage from './pages/RandomBeerPage';
import AddBeerPage from './pages/AddBeerPage';
import BeerDetailsPage from './pages/BeerDetailsPage';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BeerDetailsPage />
      <AllBeersPage />
      <RandomBeerPage />
      <AddBeerPage />
{/* 
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={AllBeersPage} />
        <Route exact path="/random-beer" component={RandomBeerPage} />
        <Route exact path="/new-beer" component={AddBeerPage} />
        <Route exact path="/beers/:beerId" component={BeerDetailsPage} />
      </Router> */}
    </div>
  );
}

export default App;