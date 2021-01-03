import React from 'react';



export class SearchResults extends React.Component {
    render() {
        return (
            
            <div className="results">
                <p>{Date().slice(3, 21)}</p>
                <p>The Weather In {this.props.location} is</p>
                <p>Temp: {this.props.temp}{'\u00B0'}C</p>
                <p>Cloud Cover: {this.props.clouds}</p>
                <p>Precipitation: {this.props.precip}%</p>
                <img src="../../../favicon.ico" alt=""></img>
            </div>
        )}
}

