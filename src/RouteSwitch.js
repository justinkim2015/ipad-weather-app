import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherInfo from "./components/WeatherInfo";
import './styles/app.css'
import { useEffect, useState } from "react"

const RouteSwitch = () => {
  const [temp, setTemp] = useState()
  const [weather, setWeather] = useState()
  const [icon, setIcon] = useState()
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=ba0a236e64fc4c191419fe3b161e3947&units=metric', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then((response) => {
        setTemp(response.main.temp)
        setWeather(response.weather[0].description)
        setIcon(`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`)
      })
      .catch((error) => {
        console.log(error)
      })  
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home temp={temp} weather={weather} icon={icon} />} />
        <Route path="/info" element={<WeatherInfo temp={temp} weather={weather} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
