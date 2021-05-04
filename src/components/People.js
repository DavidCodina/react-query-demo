import React, { useState } from 'react';
import { useQuery }        from 'react-query';
import Person              from './Person';


const getPeople = async ({ queryKey }) => {
  const [key, page] = queryKey;
  const res         = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};


const People = () => {
  const [ page, setPage ] = useState(1);
  const { data, status } = useQuery(['people', page], getPeople);


  const getPreviousPage = () => {
    if (data && data.previous){ // data.previous will be null if there is not a previous page.
      const previousPageNumber = data.previous.split("=")[1];
      setPage(parseInt(previousPageNumber));
    }
  };


  const getNextPage = () => {
    if (data && data.next){ // data.next will be null if there is not a next page.
      const nextPageNumber = data.next.split("=")[1];
      setPage(parseInt(nextPageNumber));
    }
  };


  return (
    <React.Fragment>
      <h2 className="text-center">People</h2>


      <div className="d-flex flex-wrap justify-content-center align-items-center mb-3">
        <button 
          className="btn btn-outline-light me-3" 
          style={{minWidth: 125}}
          onClick={getPreviousPage}
        >Previous</button>


        <div className="d-inline-block me-3" style={{fontFamily: 'Montserrat', fontSize: 32}}>{page}</div>

        <button 
          className="btn btn-outline-light" 
          style={{minWidth: 125}}
          onClick={getNextPage}
        >Next</button>
      </div>
      

      { status === 'loading' && <h1 className="text-center">Loading...</h1> }

      { status === 'error' && <h1 className="text-center text-danger">Error: Could not get data!</h1> }

      {
        status === 'success' && (
        <ul 
          className="w-90 mx-auto mb-5 list-group" 
          style={{maxWidth: 800, backgroundColor: 'transparent'}}
        >
          { data.results.map(person => <Person key={person.name} person={person} /> ) }
        </ul>
        )
      } 
    </React.Fragment>
  );
};
 
 
export default People;