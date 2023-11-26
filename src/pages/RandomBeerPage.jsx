import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeerPage = () => {
    const [randomBeer, setRandomBeer] = useState(null);
  
    useEffect(() => {
      const fetchRandomBeer = async () => {
        try {
          const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
          setRandomBeer(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchRandomBeer();
    }, []);
  
    return (
      <div>
        {randomBeer ? (
          <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} style={{ height: '200px' }} />
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation Level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
          </div>
        ) : (
          <p>Loading random beer...</p>
        )}
      </div>
    );
  };
  
  export default RandomBeerPage;;
