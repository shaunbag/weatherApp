import React from 'react';

export class SearchBar extends React.Component{
    render() {
        return(
            <div>
            <form onSubmit={this.props.weatherSearch}>
                
                <input type="text" className="searchBar" name="city" placeholder="Type your town or city here"></input>
                
            </form>  
            </div>
        )}
}

