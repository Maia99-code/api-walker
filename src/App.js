import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import StarWarsResourceDisplay from './components/StarWarsResourceDisplay';

const App = () => {
  const [resourceData, setResourceData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchResource = async (resourceType, id) => {
    try {
      const response = await axios.get(`https://swapi.dev/api/${resourceType}/${id}`);
      setResourceData({ [resourceType]: response.data });
      setErrorMessage('');
    } catch (error) {
      console.error('Error fetching resource:', error);
      setErrorMessage("These aren't the droids you're looking for.");
      setResourceData(null);
    }
  };

  return (
    <div className="app">
      <h1>Star Wars API Walker</h1>
      <DropdownMenu onSelectResource={fetchResource} />
      <StarWarsResourceDisplay resourceData={resourceData} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
