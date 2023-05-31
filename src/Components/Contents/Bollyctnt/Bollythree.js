import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Bollythree() {
  const a = useContext(NoteContext)

  return (
    <>
    <Link to='/bollywood'>
    <div className="header">
        <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardblurr}</h2>
        <hr className='hrmm'/>
        <div className='insidehead'>
          <div className='insides'>
            <div className='image-container'><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar"  className='avatar'/></div>
            <div>
              <p>SHAIK</p>
              <p>May 23 2023</p>
            </div>
            </div>
<img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos'/>        </div>
        <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BYjBkMGE5ZjEtOTdkNC00OTA5LWIzOWQtMmJmODRlMmRhM2YxXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" className="bolimg" alt="purple scene" /></div>
        <p></p>
    </div>

    <div className='castandmovie'>
      
      <div className='cast'>
      <h3>The Cast : </h3>
        <p>{a.castblur1}</p>
        <p>{a.castblur2}</p>
        <p>{a.castblur3}</p>
        <p>{a.castblur4}</p>
        <p>{a.castblur5}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Horror-Thriller</li>
          <li>2h 6m</li>
        </ul>
      </div>
    </div>
    <div className="h3">
    <h3 style={{textAlign:'left',marginLeft:'300px',marginTop:'3%',width:'100px'}}>The Plot : </h3>
    </div>
    <div className='content'>
      <p>{a.contentblurr1}</p>
      <p>{a.contentblurr2}</p>
      <p>{a.contentblurr3}</p>
      <p>{a.contentblurr4}</p>
    </div>
    </>
  )
}

export default Bollythree