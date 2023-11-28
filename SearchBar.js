import React, { useState } from 'react';
import api from '../../services/api';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await api.get(`/search?q=${searchQuery}`);
      onSearch(response.data); 
    } catch (error) {
      // Handle error
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
