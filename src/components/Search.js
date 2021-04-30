import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');
  console.log('I RUN WITH EVERY RENDER');
  useEffect(() => {
    console.log('I RUN AFTER EVERY RENDER NAD AT INITIAL RENDER');
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            onChange={e => setTerm(e.target.value)}
            value={term}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
