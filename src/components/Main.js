import "../styles/main.css"
import {Link} from 'react-router-dom'

const Main = ({temp, weather, icon}) => {  
  return (
    <div>
      <Link to='/info'>Weather</Link>
    </div>
  );
}

export default Main;
