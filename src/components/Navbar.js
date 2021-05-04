import React from 'react';


const Navbar = ({ setPage }) => {
  return ( 
    <nav className="mb-5 text-center">
      <button 
        className="btn btn-outline-light me-3" 
        style={{minWidth: 125}}
        onClick={() => setPage('planets')}
      >Planets</button>

      <button 
        className="btn btn-outline-light"    
        style={{minWidth: 125}}  
        onClick={() => setPage('people')}
      >People</button>
    </nav>
  );
};

 
export default Navbar;