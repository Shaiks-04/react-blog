import React, { useContext } from 'react'
import '../../.././Components/bolly.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Hollyfive() {
  const a = useContext(NoteContext)

  return (
    <>
       <Link to='/hollywood'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

<div className='container'> 
    <h2 className='gl'>{a.cardinsidious}</h2>
    <hr />
    <div className='insidehead'>
      <div className='insides'>
        <div><img src="https://images-platform.99static.com/jQu2xohritutSVmnVq7np7rbkxg=/0x0:1920x1920/500x500/top/smart/99designs-contests-attachments/106/106359/attachment_106359975" alt="avatar"  className='avatar'/></div>
        <div>
          <p>Saya</p>
          <p>April 08 2023</p>
        </div>
        </div>
        <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>
    </div>
    <img src="https://cdn.kinocheck.com/i/qq8i2hy9pk.jpg" className="bolimg" alt="purple scene" />
    <p></p>
</div>

<div className='castandmovie'>
  
  <div className='cast2'>
  <h3>The Cast : </h3>
    <p>{a.castinsidious1}</p>
    <p>{a.castinsidious2}</p>
    <p>{a.castinsidious3}</p>
    <p>{a.castinsidious4}</p>
  </div>
  <div className='movie1'>
    <ul>
      <li>Movie</li>
      <li>Horror</li>
    </ul>
  </div>
</div>
<div className="h3">
<h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
</div>
<div className='content'>
  <p>{a.contentinsidious1}</p>
  <p>{a.contentinsidious2}</p>
  <p>{a.contentinsidious3}</p>
</div>


    </>
  )
}

export default Hollyfive