import '../styles/weather.css'
import { useState, useEffect } from 'react'
import Back from './Back'
import UpCase from './Upcase'
import Spinner from './Spinner'

const WeatherInfo = ({temp, weather, icon, city}) => {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=ba0a236e64fc4c191419fe3b161e3947&units=metric', {mode: 'cors'})
      .then(function(response) {
         return response.json();
      })
      .then((response) => {
        let ForecastArray = []
        setForecast(response.list)
        for(let i=1; i < 9; i++) {
          let hash = {temp:response.list[i].main.temp, 
                      icon:`https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png`,
                      date:`${i * 3} Hrs`}
          ForecastArray.push(hash)
        }

        setForecast(ForecastArray)
      })
      .catch((error) => {
        console.log(error)
      })  
  }, [])

  const showForecast = () => {    
    return ( forecast.map((day, index) => (
      <div className='date-icon' key={index}>
        <div className='small-date'>{day.date}</div>
        <img src={day.icon} className='small-icon'></img>
        <div className='small-temp'>{day.temp}°</div>
      </div>
    )))
  }

  // const weatherInfo = () => {

  //   if(forecast===undefined || temp==undefined) {
  //     return Spinner()
  //   } else {
  //     return showForecast()
  //   }
  // }
  
  const loading = () => {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  
  return (
    <div id="weather-main">
      <div id="weather-box">
        <Back />
        <div id='info'>
          <div>{UpCase(weather)}</div>
          <h1 className='city'>{city}</h1>
          <img src={icon} className='icon' alt='weather icon'></img>
          <div className='current-temp'>{temp}°C</div>
        </div>
        <div className='date-bar'>{showForecast()}</div>
      </div>
    </div>
  );
}

export default WeatherInfo;

