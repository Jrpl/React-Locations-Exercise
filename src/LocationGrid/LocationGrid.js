import React from 'react';
import scss from './LocationGrid.scss';


const LocationGrid = (props) => {
    return (
        <div class="location-card">
            <div class="location-header">{props.location.multi_car_display_name} {props.location.airport_code ? '(' + props.location.airport_code + ')' : ""}</div>
            <div class="location-secondary-info">
                <span>
                    <i class="material-icons">{props.location.airport_code ? 'local_airport' : 'location_city'}</i> 
                </span>
                <span class="location-text">
                    {props.location.description}
                </span>
            </div>
        </div>
    );
}

export default LocationGrid;