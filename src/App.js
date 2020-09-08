import React, { useState, useEffect } from 'react';
import { axiosCall } from './lib/axios.js';
import Search from './components/Search.js';
import Results from './components/Results.js';
import Nominations from './components/Nominations.js';
// import AllNominations from './components/AllNominations.js';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("Please enter a search term");
  const [nominations, setNominations] = useState(JSON.parse(localStorage.getItem("nominations")));
  // const [allNominations, setAllNominations] = useState([]);

    useEffect(() => {
      async function fetchData() {
        if (searchTerm.length > 1) {
          const response = await axiosCall(searchTerm);
          if (response.Search) {
            setSearchResults(response.Search);
            setError("");
          } else {
            setError(response.Error);
            setSearchResults([]);
          }
        } else {
          setSearchResults([]);
          setError("Please enter a search term");
        }
      }
      fetchData();
    }, [searchTerm])

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
        <Search 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
      </header>
      <main>
        <Results
          searchTerm={searchTerm} 
          searchResults={searchResults} 
          error={error} 
          setNominations={setNominations}
          nominations={nominations}
        />
        <Nominations
          setNominations={setNominations} 
          nominations={nominations}
        />
        {/* <AllNominations
          setAllNominations={setAllNominations}
          allNominations={allNominations}
        /> */}
      </main>
    </div>
  );
}

export default App;
