import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WeatherInfo from "./components/WeatherInfo";
import './styles/app.css'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<WeatherInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
