import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Techfour() {
  const a = useContext(NoteContext)

  return (
    <>
   <Link to='/technology'>
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardgreen}</h2>
        <hr className='hrmm'/>
        <div className='insidehead'>
          <div className='insides'>
            <div><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar"  className='avatar'/></div>
            <div>
              <p>SHAIK</p>
              <p>May 23 2023</p>
            </div>
            </div>
            <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>
        </div>
        <img src="https://etfdb.com/media/W1siZiIsIjIwMjEvMDkvMjIvbm9od2lmdmZmX0dyZWVuX1RlY2hub2xvZ3lfYW5kX1N1c3RhaW5hYmlsaXR5X01hcmtldF9Gb3JlY2FzdF9mb3JfQ29udGludWVkX0dyb3d0aC5qcGciXSxbInAiLCJ0aHVtYiIsIjMwMHg1NjBeIl1d/Green-Technology-and-Sustainability-Market-Forecast-for-Continued-Growth.jpg" className="bolimg" alt="purple scene" />


       
    </div>
    <div className='content'>
      <p>{a.contentgreen}</p>
    </div>
    </>
  )
}

export default Techfour