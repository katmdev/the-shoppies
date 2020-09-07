import React, { useState, useEffect } from 'react';
import { axiosCall } from './lib/axios.js';
import Search from './components/Search.js';
import Results from './components/Results.js';
import Nominations from './components/Nominations.js';
import AllNominations from './components/AllNominations.js';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("Enter a search term");
  const [nominations, setNominations] = useState([]);
  const [allNominations, setAllNominations] = useState([]);

    useEffect(() => {
      async function fetchData() {
        if (searchTerm.length > 1) {
          const response = await axiosCall(searchTerm);
          console.log(response);
          if (response.Search) {
            setSearchResults(response.Search);
            setError("");
          } else {
            setError(response.Error);
            setSearchResults([]);
          }
        } else {
          setSearchResults([]);
          setError("Enter a search term");
        }
      }
      fetchData();
    }, [searchTerm])

  return (
    <div className="App">
      <header className="App-header">
        <h1>The Shoppies</h1>
      </header>
      <main>
        <Search 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
        />
        <Results
          searchTerm={searchTerm} 
          searchResults={searchResults} 
          error={error}
        />
        <Nominations/>
        <AllNominations/>
      </main>
    </div>
  );
}

export default App;
