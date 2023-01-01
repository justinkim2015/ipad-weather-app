import "../styles/main.css"
import Weather from '../assets/ios-weather.svg'
import AboutMe from '../aboutme/about-icon.png'
import Navbar from './Navbar.js'
import Taskbar from './Taskbar.js'
import AppLogo from './AppLogo.js'

const Main = ({temp, weather, icon}) => {  
  return (
    <div id='main'>
      <Navbar />
      <div id="apps">
        <AppLogo dest='/info' source={Weather} name="Weather"/>
        <AppLogo dest='/about' source={AboutMe} name="About"/>
      </div>
      <Taskbar />
    </div>
  );
}

export default Main;
