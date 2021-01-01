import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>Welcome to Weather App</p>

        <SearchBar />
        <SearchResults />

      </header>
    </div>
  );
}

export default App;
