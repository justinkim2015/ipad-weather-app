import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./lock-screen/Home";
import Main from "./main-screen/Main";
import WeatherInfo from "./weatherapp/WeatherInfo";
import './styles/app.css'
import { useEffect, useState } from "react"
import AboutMe from './aboutme/About'

const RouteSwitch = () => {
  const [temp, setTemp] = useState()
  const [weather, setWeather] = useState()
  const [icon, setIcon] = useState()
  const [city, setCity] = useState()
  const [coords, setCoords] =useState()
  
  useEffect(() => {
    fetch('https://api.ipgeolocation.io/ipgeo?apiKey=033dfab0d0f04431ae302a227befb7d2', {mode: 'cors'})
      .then((response) => {return response.json();})
      .then((response) => {
        setCity(response.city);
        setCoords({lat:response.latitude, long:response.longitude});
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${response.latitude}&lon=${response.longitude}&appid=ba0a236e64fc4c191419fe3b161e3947&units=metric`, {mode: 'cors'})
      })
      .then((response) => {
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
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home temp={temp} weather={weather} icon={icon} />} />
        <Route path="/main" element={<Main temp={temp} weather={weather} icon={icon} />} />
        <Route path="/info" element={<WeatherInfo temp={temp} weather={weather} icon={icon} city={city} coords={coords} />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
