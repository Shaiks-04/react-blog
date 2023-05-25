import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Bollysix() {
  const a = useContext(NoteContext)

  return (
    <>
      <Link to='/bollywood'>
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardyodha}</h2>
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
        <img src="https://m.media-amazon.com/images/M/MV5BNmU2NjI5MDUtODIzZS00ODNlLTg0ODItMTI5YTM5YWE5NzJmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" />
        <p></p>
    </div>

    <div className='castandmovie'>
      
      <div className='cast2'>
      <h3>The Cast : </h3>
        <p>{a.castyodha1}</p>
        <p>{a.castyodha2}</p>
        <p>{a.castyodha3}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Action-Thriller</li>
        </ul>
      </div>
    </div>
    <div className="h3">
    <h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%'}}>The Plot : </h3>
    </div>
    <div className='content'>
      <p>{a.contentyodha1}</p>
      <p>{a.contentyodha2}</p>
    </div>
    </>
  )
}

export default Bollysix