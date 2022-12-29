import '../styles/weather.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import LoadingSpinner from "./Spinner";

const WeatherInfo = () => {
  const [temp, setTemp] = useState()
  const [weather, setWeather] = useState()

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&APPID=ba0a236e64fc4c191419fe3b161e3947&units=metric', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then((response) => {
        console.log(response)
        setTemp(response.main.temp)
        setWeather(response.weather[0].description)
      })
      .catch((error) => {
        console.log(error)
      })  
  })

  return (
    <div id='weather'>
      <div id="info">
        <div>{temp}C</div>
        <div>{weather}</div>
        <Link to='/'>Back</Link>
      </div>
    </div>
  );
}

export default WeatherInfo;
