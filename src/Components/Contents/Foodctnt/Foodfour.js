import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Foodfour() {
  const a = useContext(NoteContext)
  
  return (
    <>
    <Link to='/food'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

  <div className='container'> 
      <h2 className='gl'>{a.cardspanish}</h2>
      <hr />
      <div className='insidehead'>
        <div className='insides'>
          <div className='image-container'><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar"  className='avatar'/></div>
          <div>
            <p>SHAIK</p>
            <p>May 23 2023</p>
          </div>
          </div>
          <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>
      </div>
      <div className='image-container'><img src="https://www.thespruceeats.com/thmb/Jt-NMtRLzyC0tz1XJs8CBl0FdjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/118465226-56a8d2e65f9b58b7d0f57825.jpg" className="bolimg" alt="purple scene" /></div>
  </div>

  <div className='content'>
    <p>{a.contentspanish}</p>
  </div>
  </>
  )
}

export default Foodfour