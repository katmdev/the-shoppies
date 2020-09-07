import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <section className="search">
            <h2>Search</h2>
            <label htmlFor="search-movies">Movie Title</label>
            <input 
                type="text" 
                name="search-movies" 
                id="search-movies"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </section>
    )
};

export default Search;