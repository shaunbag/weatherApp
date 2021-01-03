import './App.css';
import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: 'Norwich',
      temp: 40,
      clouds: 'Overcast',
      precip: 30
    }
  }
  
  weatherSearch() {
    this.setState({
      location: 'London',
      temp: 35,
      clouds: 'None',
      precip: 50
    });
  }

render(){
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="title" >Welcome to Weather App</h1>
        <div>
            <input type="text" className="searchBar"   placeholder="Type your town or city here"></input>
            <button onClick={() => this.weatherSearch()}>Search</button>
        </div>
        <SearchResults location={this.state.location} temp={this.state.temp} clouds={this.state.clouds} precip={this.state.precip}/>
        

      </header>
    </div>
  );
}
}

export default App;
