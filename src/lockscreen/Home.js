import "./home.css"
import {Link} from 'react-router-dom'
import Clock from "../components/Clock"
import WeatherWidget from "../components/WeatherWidget"

const Home = ({temp, weather, icon}) => {  
  return (
    <div className='content'>
      <Clock />
      <WeatherWidget weather={weather} temp={temp} icon={icon}/>
      <Link to='/main' id="unlock"><div >Click to Unlock</div></Link>
    </div>
  );
}

export default Home;
