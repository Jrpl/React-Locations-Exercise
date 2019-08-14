import React from 'react';
import ReactDOM from 'react-dom';
import GetLocations from './GetLocations/GetLocations';
import LocationGrid from './LocationGrid/LocationGrid';
import scss from './index.scss';
import SearchBar from './SearchBar/SearchBar';

const App = () => {
	return (
        <div>
            <div class="location-select-header">Choose Location</div>
            <SearchBar />
            <div class="location-grid">
                <GetLocations />
            </div>
        </div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'));
