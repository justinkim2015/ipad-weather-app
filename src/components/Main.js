import "../styles/main.css"
import {Link} from 'react-router-dom'
import Weather from '../assets/ios-weather.svg'

const Main = ({temp, weather, icon}) => {  
  return (
    <div id='main'>
      <Link to='/info'><img src={Weather} className='logo' alt='weather app logo'></img></Link>
    </div>
  );
}

export default Main;
