import React from 'react';


const Person = ({ person }) => {
  return (
    <li 
    className="list-group-item text-sw-yellow bg-dark"
    style={{backgroundColor: 'transparent', borderColor: '#ffff57'}}
    >
      <h3>{ person.name}:</h3>
      <p style={{color: '#DDD'}}>Gender - { person.gender }</p>
      <p style={{color: '#DDD'}}>Birth year - { person.birth_year }</p>
    </li>
  );
}

 
export default Person;