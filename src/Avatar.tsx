import './Avatar.scss'
import Profile from './assets/profile.png'

export default function Avatar() {
  return (
    <div className='avatar'>
      <div className='avatar-container'>
        <img
          src={Profile}
          alt="Luan Oliveira"
          className='avatar-container-image'
          />
      </div>
    </div>
  )
}