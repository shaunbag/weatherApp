import React from 'react';
import Weather from '../util/Openweather';


export class SearchBar extends React.Component {
           
        
    render() {
        return (
            <div>
                <input  type="text" className="searchBar" placeholder="Type your town or city here"></input>
            </div>
        )
    }
    
}

