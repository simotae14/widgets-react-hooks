import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  useEffect(() => {
    axios.get('dsndfnm')
      .then((response) => {
        console.log(response.data);
      });
  }, [term]);
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
