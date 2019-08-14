import React from 'react';
import LocationGrid from '../LocationGrid/LocationGrid';
import axios from 'axios';

class GetLocations extends React.Component {
    state = { locations: [] };

    async componentDidMount() {
        const response = await axios.get(`locations.json`);
        this.setState({ locations: response.data.filter(this.filterNames)});
    }

    filterNames(obj) {
        if (obj.name.includes("A5C") || obj.name.includes("Q5")) {
            return false;
        }
        return true;
    }

    render() {
        return (
            this.state.locations.map((location) => {
                return <LocationGrid location = {location} />
            })
        )
    }
}

export default GetLocations;