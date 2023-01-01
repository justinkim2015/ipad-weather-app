import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import '../styles/weather.css'

const Forecast = ({coords}) => {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.long}&appid=ba0a236e64fc4c191419fe3b161e3947&units=metric`, {mode: 'cors'})
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
        <img src={day.icon} className='small-icon' alt='weather icon'></img>
        <div className='small-temp'>{day.temp}°</div>
      </div>
    )))
  }

  const isLoaded = () => {
    if(forecast===undefined) {
      return Spinner()
    } else {
      return showForecast()
    }
  }

  return (
    <div className='date-bar'>{isLoaded()}</div>
  )
}

export default Forecast