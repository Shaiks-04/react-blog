import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'


function Bollyfour() {
  const a = useContext(NoteContext)
  return (
    <>
    <Link to='/bollywood'>
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardom}</h2>
        <hr className='hrmm'/>
        <div className='insidehead'>
          <div className='insides'>
            <div className='image-container'><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar"  className='avatar'/></div>
            <div className='distance'>
              <p>SHAIK</p>
              <p>May 23 2023</p>
            </div>
            </div>
<img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>        </div>
        <div className='image-container'><img src="../OMSHANTHI.jpeg" className="bolimg" alt="purple scene" /></div>
        <p></p>
    </div>

    <div className='castandmovie'>
      
      <div className='cast'>
      <h3>The Cast : </h3>
        <p>{a.castom1}</p>
        <p>{a.castom2}</p>
        <p>{a.castom3}</p>
        <p>{a.castom4}</p>
        <p>{a.castom5}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Psychological-Thriller</li>
          <li>2h 4m</li>
        </ul>
      </div>
      
    </div>
<div className="h3">
<h3 className="h3" style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
</div>
    
    <div className='content'>
      <p>{a.contentom1}</p>
      <p>{a.contentom2}</p>
      <p>{a.contentom3}</p>
      <p>{a.contentom4}</p>
    </div>
    </>
  )
}

export default Bollyfour