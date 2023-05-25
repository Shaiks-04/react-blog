import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'


function Bollyone() {
    const a = useContext(NoteContext)
  return (
    <>
   
    <Link to='/bollywood'> 
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardgaslight}</h2>
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
        <img src="https://images.livemint.com/img/2023/03/21/600x338/The-film-has-been-produced-by-Tips-Films-and-Music_1679375273338.png" className="bolimg" alt="purple scene" />
        <p></p>
    </div>

    <div className='castandmovie'>
      
      <div className='cast1'>
      <h3>The Cast : </h3>
        <p>{a.castgas1}</p>
        <p>{a.castgas2}</p>
        <p>{a.castgas3}</p>
        <p>{a.castgas4}</p>
        <p>{a.castgas5}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Mystery-Thriller</li>
          <li>1h 51m</li>
        </ul>
      </div>
    </div>
    <div className="h3">
    <h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
    </div>
    <div className='content'>
      <p>{a.contentgaslight1}</p>
      <p>{a.contentgaslight2}</p>
      <p>{a.contentgaslight3}</p>
      <p>{a.contentgaslight4}</p>
    </div>
   
    </>
  )
}

export default Bollyone