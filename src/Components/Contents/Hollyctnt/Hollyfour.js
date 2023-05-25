import React, { useContext } from 'react'
import '../../.././Components/bolly.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Hollyfour() {
  const a = useContext(NoteContext)
  return (
    <>
      <Link to='/hollywood'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

<div className='container'> 
    <h2 className='gl'>{a.cardbear}</h2>
    <hr />
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
    <img src="../fast-x.jpeg" className="bolimg" alt="purple scene" />
    <p></p>
</div>

<div className='castandmovie'>
  
  <div className='cast3'>
  <h3>The Cast : </h3>
    <p>{a.castbear1}</p>
    <p>{a.castbear2}</p>
    <p>{a.castbear3}</p>
    <p>{a.castbear4}</p>
    <p>{a.castbear5}</p>
  </div>
  <div className='movie1'>
    <ul>
      <li>Movie</li>
      <li>Comedy/Thriller</li>
      <li>1h 35m</li>
    </ul>
  </div>
</div>
<div className="h3">
<h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
</div>
<div className='content'>
  <p>{a.contentbear1}</p>
  <p>{a.contentbear2}</p>
  <p>{a.contentbear3}</p>
</div>
    </>
  )
}

export default Hollyfour