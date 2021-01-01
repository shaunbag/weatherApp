const apiKey = '6dbaa32ecc0517eedc3c13905fc9f199';

const weather = async(location) => {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    try {
        if (response.ok) {
            const responseJson = response.json();
            console.log(response);
            return responseJson.map(weather => {
                return {
                    location: weather.location,
                    temp: weather.temp,
                    clouds: weather.cloud,
                    humidity: weather.humidity
                }
            });
            
        }
        throw new error('failed');
    }catch(error){
        console.log(error.message);
    }
}; 

export default weather;