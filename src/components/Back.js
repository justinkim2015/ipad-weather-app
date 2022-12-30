import '../styles/back.css'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/back-icon.png'

const Back = () => {
  return (
    <Link to='/main'><img src={BackIcon} id='back'></img></Link>
  )
}

export default Back