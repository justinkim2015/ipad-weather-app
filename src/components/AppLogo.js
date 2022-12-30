import {Link} from 'react-router-dom'
import '../styles/applogo.css'

const AppLogo = ({dest, source, name}) => {
  return (
    <div className='logo-container'>
      <Link to={dest}><img src={source} className='logo' alt={name + ' logo'}></img></Link>
      <p className='app-name'>{name}</p>
    </div>
  )
}

export default AppLogo