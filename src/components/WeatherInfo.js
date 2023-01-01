import '../styles/weather.css'
import Back from './Back'
import UpCase from './Upcase'
import Forecast from './Forecast'
import Spinner from './Spinner'

const WeatherInfo = ({temp, weather, icon, city}) => {
  const isLoaded = () => {
    if(temp===undefined) {
      return Spinner()
    } else {
      return displayInfo()
    }
  }
  
  const displayInfo = () => {
    return (
      <div id='info'>
        <div>{UpCase(weather)}</div>
        <h1 className='city'>{city}</h1>
        <img src={icon} className='icon' alt='weather icon'></img>
        <div className='current-temp'>{temp}°C</div>
      </div>
    )
  }

  return (
    <div id="weather-main">
      <div id="weather-box">
        <Back />
        {isLoaded()}
        <Forecast />
      </div>
    </div>
  );
}

export default WeatherInfo;

