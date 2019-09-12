import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import Locations from './Components/Locations/Locations';
import Footer from './Components/Footer/Footer';
import './index.scss';

const App = () => {
	return (
        <div>
            <Header />
            <div className="location-select-header">Choose Location</div>
            <SearchBar />
            <div className="location-grid">
                <div className="location-card-container">
                    <Locations />
                </div>
            </div>
            <Footer />
        </div>
	)
};

ReactDOM.render(<App />, document.querySelector('#root'));