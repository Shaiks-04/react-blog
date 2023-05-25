import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Bollyfive() {
  const a = useContext(NoteContext)
  return (
    <>
    <Link to='/bollywood'>
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardbhola}</h2>
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
        <img src="https://pbs.twimg.com/media/FnDTY_oaEAAI3VK?format=jpg&name=medium" className="bolimg" alt="purple scene" />
        <p></p>
    </div>

    <div className='castandmovie'>
      
      <div className='cast'>
      <h3>The Cast : </h3>
        <p>{a.castbholaa1}</p>
        <p>{a.castbholaa2}</p>
        <p>{a.castbholaa3}</p>
        <p>{a.castbholaa4}</p>
        <p>{a.castbholaa5}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Action/Adventure</li>
          <li>2h 23m</li>
        </ul>
      </div>
    </div>
<div className="h3">
    <h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
    </div>
    <div className='content'>
      <p>{a.contentbholaa1}</p>
      <p>{a.contentbholaa2}</p>
      <p>{a.contentbholaa3}</p>
      <p>{a.contentbholaa4}</p>
    </div>
    </>
  )
}

export default Bollyfive