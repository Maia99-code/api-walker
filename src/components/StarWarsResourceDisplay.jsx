import React from 'react';

const StarWarsResourceDisplay = ({ resourceData, errorMessage }) => {
  if (errorMessage) {
    return (
      <div className="resource-display">
        <img
          src="https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg"
          alt="These aren't the droids you're looking for"
        />
        <p>{errorMessage}</p>
      </div>
    );
  }

  if (!resourceData || Object.keys(resourceData).length === 0) {
    return null;
  }

  const attributes = getResourceAttributes(resourceData);

  return (
    <div className="resource-display">
      <h2>{getResourceName(resourceData)}</h2>
      <ul>
        {attributes.map((attribute, index) => (
          <li key={index}>
            <strong>{attribute.label.toUpperCase()}:</strong> {attribute.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const getResourceAttributes = (resourceData) => {
  const resourceType = Object.keys(resourceData)[0];

  switch (resourceType) {
    case 'people':
      return [
        { label: 'Name', value: resourceData[resourceType].name },
        { label: 'Height', value: resourceData[resourceType].height },
        { label: 'Mass', value: resourceData[resourceType].mass },
        { label: 'Hair Color', value: resourceData[resourceType].hair_color }
      ];
    case 'films':
      return [
        { label: 'Title', value: resourceData[resourceType].title },
        { label: 'Director', value: resourceData[resourceType].director },
        { label: 'Producer', value: resourceData[resourceType].producer },
        { label: 'Release Date', value: resourceData[resourceType].release_date }
      ];
    case 'starships':
    case 'vehicles':
      return [
        { label: 'Name', value: resourceData[resourceType].name },
        { label: 'Model', value: resourceData[resourceType].model },
        { label: 'Manufacturer', value: resourceData[resourceType].manufacturer },
        { label: 'Cost in Credits', value: resourceData[resourceType].cost_in_credits }
      ];
    case 'species':
      return [
        { label: 'Name', value: resourceData[resourceType].name },
        { label: 'Classification', value: resourceData[resourceType].classification },
        { label: 'Designation', value: resourceData[resourceType].designation },
        { label: 'Average Height', value: resourceData[resourceType].average_height }
      ];
    case 'planets':
      return [
        { label: 'Name', value: resourceData[resourceType].name },
        { label: 'Rotation Period', value: resourceData[resourceType].rotation_period },
        { label: 'Orbital Period', value: resourceData[resourceType].orbital_period },
        { label: 'Diameter', value: resourceData[resourceType].diameter }
      ];
    default:
      return [];
  }
};

const getResourceName = (resourceData) => {
  const resourceType = Object.keys(resourceData)[0];
  return resourceData[resourceType]?.name || resourceData[resourceType]?.title || '';
};

export default StarWarsResourceDisplay;
