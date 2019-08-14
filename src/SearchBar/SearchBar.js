import React from 'react';
import scss from './SearchBar.scss';

class SearchBar extends React.Component {
    state = { term: null };

    onInputChange(event) {
        console.log(event.target.value);
    }

    render () {
        return (
            <div class="gray-bar">
                <form class="search-form">
                    <input 
                        type="text"
                        class="search-input"
                        placeholder="Search by city or airport code" 
                        value={this.state.term} 
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;