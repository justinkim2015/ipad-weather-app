import { useEffect, useState } from "react"
import '../styles/clock.css'

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const [date, setDate] = useState(new Date().toLocaleDateString())

  const tick = () => {
    let time = new Date().toLocaleTimeString()
    setTime(time)
  };

  const updateDate = () => {
   let date = new Date().toLocaleDateString()
   setDate(date)
  }

  const timer = setInterval(() => {tick()}, 1000)
  const datestring = setInterval(() => {tick()}, 10000)

  return( 
    <div id="clock-date">
      <div id="date">{date}</div>
      <div id='clock'>{time}</div>
    </div>
  )
}

export default Clock