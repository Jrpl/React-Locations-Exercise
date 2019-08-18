import React from 'react';
import PropTypes from 'prop-types';
import './LocationCard.scss';

const renderAirportCode = airportCode => airportCode ? `(${airportCode})` : null;
const renderLocationIcon = airportCode => airportCode ? 'local_airport' : 'location_city';

const LocationCard = props => {
    const { location } = props;
    const { 
        multi_car_display_name: locationName, 
        airport_code: airportCode, 
        description 
    } = location;

    return (
        <div className='location-card'>
            <div className="location-header">
                {locationName} {renderAirportCode(airportCode)}
            </div>
            <div className="location-secondary-info">
                <span>
                    <i className="location-icon">{renderLocationIcon(airportCode)}</i> 
                </span>
                <span className="location-text">
                    {description}
                </span>
            </div>
        </div>
    );
}

LocationCard.propTypes = { 
    location: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      multi_car_display_name: PropTypes.string.isRequired,
      airport_code: PropTypes.string,
      description: PropTypes.string.isRequired
    })
}

export default LocationCard;