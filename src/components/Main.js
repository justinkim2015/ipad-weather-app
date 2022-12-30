import "../styles/main.css"
import {Link} from 'react-router-dom'
import Weather from '../assets/ios-weather.svg'
import Navbar from './Navbar.js'
import Taskbar from './Taskbar.js'

const Main = ({temp, weather, icon}) => {  
  return (
    <div id='main'>
      <Navbar />
      <Link to='/info'><img src={Weather} className='logo' alt='weather app logo'></img></Link>
      <Taskbar />
    </div>
  );
}

export default Main;
