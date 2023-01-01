import "./weatherwidget.css"
import UpCase from '../components/Upcase'
import Spinner from '../components/Spinner'

const WeatherWidget = ({weather, temp, icon}) => {  
  const widget = () => {
    if(weather===undefined || temp===undefined) {
      return Spinner()
    } else {
      return weatherInfo()
    }
  }
    
  const weatherInfo = () => {
    return(
      <div id="weather-widget">
        <img src={icon} alt='weather-logo'></img>
        <div className='widget-weather'>{UpCase(weather)}</div>
        <div className='widget-temp'>{temp}°C</div>
      </div>
    )
  }
  
  return(
    <div>{widget()}</div>
  )
} 

export default WeatherWidget