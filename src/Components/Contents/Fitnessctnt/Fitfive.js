import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Fitfive() {
  const a = useContext(NoteContext)

  return (
    <>
   <Link to='/fitness'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

  <div className='container'> 
      <h2 className='gl'>{a.cardcycle}</h2>
      <hr className='hrmm'/>
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
      <div className='image-container'><img src="https://media.istockphoto.com/id/1359291135/vector/sport-road-cyclists.jpg?s=612x612&w=0&k=20&c=3wNqA5gh5wVNwjnjRuG7yhey8jNbTWKmmT5dky8wtkI=" className="bolimg" alt="purple scene" /></div>
  </div>

  <div className='content'>
    <p>{a.contentcycle}</p>
  </div>
  </>
  )
}

export default Fitfive