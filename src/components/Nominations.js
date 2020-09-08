import React from 'react';

const Nominations = ({nominations, setNominations}) => {
    const handleDelete = () => {};
    return (
        <section className="nominations">
        <h2>Nominations</h2>
        <ul>
            {nominations.map(nomination => {
                return (
                    <li
                        key={nomination.imdbID}
                    >
                        {nomination.Title} ({nomination.Year})
                        <button 
                            onClick={() => handleDelete(nomination)}
                        >
                            Remove
                        </button>
                    </li>
                );
            })}
        </ul>
    </section>
    )
};

export default Nominations;