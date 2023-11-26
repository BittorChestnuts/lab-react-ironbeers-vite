import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the IronBeers App</h1>
      <div>
        <Link to="/beers">All Beers</Link>
      </div>
      <div>
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <div>
        <Link to="/new-beer">New Beer</Link>
      </div>
    </div>
  );
};

export default HomePage;