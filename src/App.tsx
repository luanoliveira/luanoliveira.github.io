import './App.scss'

import Avatar from './Avatar'

import { SocialIcon } from 'react-social-icons'

function App() {
  return (
    <div className='page'>
      <header className='page-header'>
        <Avatar />
        <h1 className='page-header-title'>Hi There! I'm <span className='text-bold'>Luan Oliveira</span></h1>
      </header>

      <p className='page-description'>I'm enthusiastic about tech, coding, and learning new things about computers and what they can do. I've been dabbling with coding since I was about 15. When I have time, I contribute to open source projects, answer questions in forums and help people with code.</p>
      
      <SocialIcon network='github' href='https://github.com/luanoliveira' target='_blank' />
    </div>
  )
}

export default App
