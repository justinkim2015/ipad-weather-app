import "../styles/weatherwidget.css"

const WeatherWidget = ({weather, temp, icon}) => {
  const currentWeather = () => {
    let uppercase = weather.charAt(0).toUpperCase() + weather.slice(1);
  
    return uppercase
  }
  
  const widget = () => {
    if(weather===undefined || temp===undefined) {
      return loading()
    } else {
      return weatherInfo()
    }
  }
  
  const loading = () => {
    return (
      <div id='weather-widget'>
        <p>Loading...</p>
      </div>
    )
  }
  
  const weatherInfo = () => {
    return(
      <div id="weather-widget">
        <img src={icon} alt='weather-logo'></img>
        <div className='widget-weather'>{currentWeather()}</div>
        <div className='widget-temp'>{temp}°C</div>
      </div>
    )
  }
  
  return(
    <div>{widget()}</div>
  )
} 

export default WeatherWidget