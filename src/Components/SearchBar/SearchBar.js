import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onInputChange = event => {
        setSearchTerm(event.target.value);
    };

    const inputStyle = {
        width: '256px'
    };

    return (
        <div className="gray-bar">
            <input 
                type="text"
                className="input"
                style={inputStyle}
                placeholder="Search by city or airport code" 
                value={searchTerm}
                onChange={(event) => onInputChange(event)}
            />
        </div>
    );
};

export default SearchBar;