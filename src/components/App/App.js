import './App.css';
import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import { SearchBar } from '../SearchBar/SearchBar';

const apiKey = '1b5eef5e5c7521e18eb3924130c99709';

class App extends React.Component {
  state = {                             // constructor function deprecated in current version of react
    location: 'your city',
    temp: 'Pending',
    condition: 'your search',
    humidity: 'Pending',
    icon: 'Image Pending'
  }

  weatherSearch = async (e) => {

    e.preventDefault();  //preventing page refresh

    const city = e.target.city.value; // taking the value of the input field and turning it into a variable

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await api_call.json();
    if(city) {
      console.log(data);
      this.setState({                           // set state with api call using the 'data' variable
        location: data.name,
        temp: data.main.temp,
        condition: data.weather[0].description,
        humidity: data.main.humidity,
        icon: data.weather[0].icon
      })
    }}

  render(){
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="title" >Welcome to Weather App</h1>
          <SearchBar weatherSearch={this.weatherSearch}/>
          <SearchResults location={this.state.location} temp={this.state.temp} condition={this.state.condition} humidity={this.state.humidity} icon={this.state.icon}/>
          

        </header>
      </div>
    );
  }
  }

export default App;
