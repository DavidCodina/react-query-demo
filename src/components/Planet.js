import React from 'react';

const Planet = ({ planet }) => {
  return (
    <li 
    className="list-group-item text-sw-yellow bg-dark"
    style={{backgroundColor: 'transparent', borderColor: '#ffff57'}}
    >
      <h3>{ planet.name }:</h3>
      <p style={{color: '#DDD'}}>Population - { planet.population }</p>
      <p style={{color: '#DDD'}}>Terrain - { planet.terrain }</p>
    </li>
  );
}
 
export default Planet;