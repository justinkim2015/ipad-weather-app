import '../styles/weather.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import LoadingSpinner from "./Spinner";
import "../styles/home.css"

const WeatherInfo = ({temp, weather}) => {
  return (
      <div id="info">
        <div>{temp}C</div>
        <div>{weather}</div>
        <Link to='/'>Back</Link>
      </div>
  );
}

export default WeatherInfo;
