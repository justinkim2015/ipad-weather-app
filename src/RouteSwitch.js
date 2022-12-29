import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WeatherInfo from "./components/WeatherInfo";
import './styles/app.css'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<WeatherInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
