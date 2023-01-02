import "./styles/phone.css"
import RouteSwitch from './RouteSwitch';

const App = () => {
  return (
    <div id='home'>
      <div id="phone">
        <div id='speaker'></div>
          <div id="screen">
            < RouteSwitch />  
          </div>
        <a href="/ipad-weather-app/#/">
          <div id='button'></div>
        </a>
      </div>
    </div>
  );
}

export default App;
