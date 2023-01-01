import './navbar.css'
import Battery from '../assets/ios-battery.svg'
import Signal from '../assets/ios-signal.svg'
import SmallClock from './SmallClock'

const Navbar = () => {
  return (
    <div id='navbar'>
      <SmallClock />
      <div id='upkeep'>
      <img src={Signal} id='signal' alt='signal logo'></img>
        <img src={Battery} id='battery' alt='battery logo'></img>
      </div>
    </div>
  )
}

export default Navbar