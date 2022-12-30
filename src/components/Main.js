import "../styles/main.css"
import {Link} from 'react-router-dom'
import Weather from '../assets/ios-weather.svg'
import Navbar from './Navbar.js'
import Taskbar from './Taskbar.js'
import AppLogo from './AppLogo.js'

const Main = ({temp, weather, icon}) => {  
  return (
    <div id='main'>
      <Navbar />
      <AppLogo dest='/info' source={Weather} name="Weather"/>
      <Taskbar />
    </div>
  );
}

export default Main;
