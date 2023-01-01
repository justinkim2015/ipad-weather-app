import './about.css'
import Back from '../components/Back'
import Picture from './profile-picture.png'
import Github from '../assets/github-icon.png'
import Personal from './man.png'
import Linkedin from './linkedin.png'

const AboutMe = () => {
  return (
    <div id='about-main'>
      <div id="about-box">
        <Back />
        <div className="container">
          <h3>Hi, I made this,</h3>
          <img src={Picture} alt='profile' id='profile-pic'></img>
        </div>
        <p id='article'>
          This app was made with React and styled vanilla CSS3.  This was made to practice API integration with React and to create single page applications.  
          <br/><br/>
          Location data is provided by the IPGeolocation API.  Weather data is provided by the Open Weather Maps API.
        </p>
        <div id='contact-box'>
          <div><a href='https://github.com/justinkim2015/' className='link'><img src={Github} className='logo' alt='github link'></img></a></div>
          <div><a href='https://www.linkedin.com/in/justin-kim-809612ba/' className='link'><img src={Linkedin} className='logo' alt='linkedin link'></img></a></div>
          <div><a href='http://www.justinjameskim.com/' className='link'><img src={Personal} className='logo' alt='personal website link'></img></a></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe