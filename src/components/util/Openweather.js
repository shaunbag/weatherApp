const apiKey = '1b5eef5e5c7521e18eb3924130c99709';

const Weather = async(location) => {
    const urlToFetch = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    try{
        const response = await fetch(urlToFetch);
        if(response.ok){
          const jsonResponse = await response.json();
          console.log(jsonResponse);
          return jsonResponse;
        }
        throw new Error('Request failed!');
      } catch(error){
        console.log(error.message);
      }
    };

export default Weather;



// wanderlust api fetch from codecademy project

/*


const openWeatherKey = '1b5eef5e5c7521e18eb3924130c99709';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';


const getForecast = async() => {
  
  const urlToFetch = weatherUrl + '?&q=' + 'norwich' + '&APPID=' + openWeatherKey;
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error){
    console.log(error.message);
  }
}*/