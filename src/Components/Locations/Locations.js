import React, { useState, useEffect } from 'react';
import LocationCard from '../LocationCard/LocationCard';
import axios from 'axios';

const Locations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`locations.json`);
            setLocations(response.data.filter(filterNames));
        })();
    });

    const filterNames = obj => (obj.name.includes("A5C") || obj.name.includes("Q5")) ? false : true;

    return (
        locations.map((location) => <LocationCard location = {location} key={location.id} />)
    );
};

export default Locations;