import React from 'react';



export class SearchResults extends React.Component {
    render() {
        return (
            
            <div className="results">
                <p>{Date().slice(3, 21)}</p>
                <p>The Weather In {this.props.location} is</p>
                <p>Temp: {this.props.temp}{'\u00B0'}C</p>
                <p>Condition: {this.props.condition}</p>
                <p>Humidity: {this.props.humidity}%</p>
                <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="" height="150px"></img>
            </div>
        )}
}

