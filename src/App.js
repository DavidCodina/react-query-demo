import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar  from './components/Navbar';
import Planets from './components/Planets';
import People  from './components/People';

const queryClient = new QueryClient();


function App(){
  let [page, setPage] = useState('planets');


  return (
    <QueryClientProvider client={queryClient}>
    <main className="py-4">
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />

      <div className="container-fluid pt-3 px-md-5">
      
        <h1 className="mb-3 text-center text-sw-yellow">Star Wars Info</h1>

        {/* This is for a very basic router. */}
        <Navbar setPage={setPage} />


        <div className="horizontal-ruler">
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
          <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>


        { page === 'planets' ? <Planets /> : <People /> }
      </div> 
    </main>

      
    </QueryClientProvider>
  );
}


export default App;
