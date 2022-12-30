import '../styles/taskbar.css'
import Line from '../assets/line-icon.png'
import Message from '../assets/messages-icon.png'
import Insta from '../assets/instagram-icon.png'
import Github from '../assets/github-icon.png'
import AppStore from '../assets/app-store-icon.png'

const Taskbar = () => {
  return (
    <div id='taskbar'>
      <img src={Line} className='task-logo' alt='line app logo'></img>
      <img src={Message} className='task-logo' alt='message app logo'></img>
      <img src={Insta} className='task-logo' alt='instagram logo'></img>
      <img src={Github} className='task-logo' alt='github logo'></img>
      <img src={AppStore} className='task-logo' alt='app store logo'></img>
    </div>
  )
}

export default Taskbar