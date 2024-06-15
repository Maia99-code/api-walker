import React, { useState } from 'react';

const DropdownMenuStarWars = ({ onSelectResource }) => {
  const [selectedResource, setSelectedResource] = useState('people');
  const [idInput, setIdInput] = useState('');

  const handleSelectChange = (e) => {
    setSelectedResource(e.target.value);
  };

  const handleIdInputChange = (e) => {
    setIdInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSelectResource(selectedResource, idInput);
  };

  return (
    <div className="dropdown-menu-starwars">
      <form onSubmit={handleFormSubmit}>
        <label>Select Resource:</label>
        <select value={selectedResource} onChange={handleSelectChange}>
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
          <option value="planets">Planets</option>
        </select>
        <label>Enter ID:</label>
        <input
          type="text"
          placeholder="Enter ID"
          value={idInput}
          onChange={handleIdInputChange}
        />
        <button type="submit">Fetch Resource</button>
      </form>
    </div>
  );
};

export default DropdownMenuStarWars;
