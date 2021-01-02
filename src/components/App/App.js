import './App.css';
import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';


class App extends React.Component {
  

  render(){
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="title" >Welcome to Weather App</h1>

        <SearchBar />
        <SearchResults />

      </header>
    </div>
  );
}
}

export default App;
