import '../styles/weather.css'
import { useState, useEffect } from 'react'
import Back from './Back'

const WeatherInfo = ({temp, weather, icon, city}) => {
  const [forecast, setForecast] = useState()

  // useEffect(() => {
  //   fetch('https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=ba0a236e64fc4c191419fe3b161e3947&units=metric', {mode: 'cors'})
  //     .then(function(response) {
  //        return response.json();
  //     })
  //     .then((response) => {
  //        console.log('----------')

  //        setForecast({temp:response.list[0].main.temp})
  //        console.log(forecast)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })  
  // })
  

  // const showForecast = () => {    
  //   return (
  //     <div>
  //       <div>{forecast.temp}</div>
  //       <img src={forecast.icon}></img>
  //     </div>
  //   )
  // }

  const weatherInfo = () => {

    if(weather===undefined || temp===undefined) {
      return loading()
    } else {
      return currentWeather()
    }
  }

  const info = () => {
    return (
      weatherInfo()
    )
  }
  
  const loading = () => {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  
  const currentWeather = () => {
    let uppercase = weather.charAt(0).toUpperCase() + weather.slice(1);
  
    return uppercase
  }
  
  return (
    <div id="weather-main">
      <div id="weather-box">
        <Back />
        <div id='info'>
          <h1 className='city'>{city}</h1>
          <div className='current-temp'>{temp}°C</div>
          <img src={icon} className='icon' alt='weather icon'></img>
          {/* <div>{forecast[0].temp}</div> */}
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;

