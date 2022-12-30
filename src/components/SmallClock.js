import { useState } from "react"
import '../styles/smallclock.css'

const SmallClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))

  const tick = () => {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    setTime(time)
  };

  const timer = setInterval(() => {tick()}, 1000)

  return( 
    <div id='time'>{time}</div>
  )
}

export default SmallClock