import React, { useState } from 'react';
import axios from 'axios';
const AddBeerPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
        console.log('Beer created successfully!');
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h2>Add Beer</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
  
          <label htmlFor="tagline">Tagline</label>
          <input type="text" id="tagline" name="tagline" value={formData.tagline} onChange={handleChange} />
  
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
  
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" id="first_brewed" name="first_brewed" value={formData.first_brewed} onChange={handleChange} />
  
          <label htmlFor="brewers_tips">Brewer's Tips</label>
          <input type="text" id="brewers_tips" name="brewers_tips" value={formData.brewers_tips} onChange={handleChange} />
  
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" id="attenuation_level" name="attenuation_level" value={formData.attenuation_level} onChange={handleChange} />
  
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" id="contributed_by" name="contributed_by" value={formData.contributed_by} onChange={handleChange} />
  
          <button type="submit">Add Beer</button>
        </form>
      </div>
    );
  };
  
  export default AddBeerPage;
