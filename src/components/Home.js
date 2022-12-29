import "../styles/home.css"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import LoadingSpinner from "./Spinner";
import Clock from "./Clock"

const Home = () => {
  const [url, setUrl] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    newImage()
  })

  const newImage = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=JAW8XEpHBLdybXuaGlc5GTDMW1P3fMqJ&s=umbrella', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then((response) => {
        setUrl(response.data.images.original.url)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })  
  }

  return (
    <div className='content'>
      <Clock />
      <h1>It's raining</h1>
      { isLoading ? <LoadingSpinner /> : <Link to='/info'><img src={url} id='image' alt='rain'></img></Link>}
    </div>
  );
}

export default Home;
