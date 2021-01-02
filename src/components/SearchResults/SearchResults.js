import React from 'react';
import './SearchResults.css';



export class SearchResults extends React.Component {
    render() {
        return (
            <div className="results">
                <p>{Date()}</p>
                <p>The Weather In {this.props.location} is</p>
                <p>Temp: 39{'\u00B0'}C</p>
                <p>Cloud Cover: none</p>
                <p>Precipitation: 30%</p>
            </div>
        )
    }
}