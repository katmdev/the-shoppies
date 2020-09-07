import React from 'react';

const Results = ({ searchTerm, searchResults, error }) => {
    console.log(searchResults);
    return (
        <section className="results">
            <h2>{ error ? `${error}` : `Results for "${searchTerm}"` }</h2>
            <ul>
                {searchResults.map(result => {
                    return (
                        <li>{result.Title} ({result.Year})</li>
                    );
                })}
            </ul>
        </section>
    )
};

export default Results;