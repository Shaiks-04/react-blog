import React, { useContext } from 'react'
import '../../.././Components/bolly.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Hollyone() {
  const a = useContext(NoteContext)
  return (
    <>
       <Link to='/hollywood'>
    <div className="header">
    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
    </div>
    </Link>

    <div className='container'> 
        <h2 className='gl'>{a.cardevil}</h2>
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
        <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" /></div>
        <p></p>
    </div>
    <div className='gray'>
<div className='castandmovie'>
      
      <div className='cast'>
      <h3>The Cast : </h3>
        <p>{a.castevil1}</p>
        <p>{a.castevil2}</p>
        <p>{a.castevil3}</p>
        <p>{a.castevil4}</p>
        <p>{a.castevil5}</p>
      </div>
      <div className='movie1'>
        <ul>
          <li>Movie</li>
          <li>Thriller, Fantasy, Horror</li>
          <li>1h 36m</li>
        </ul>
      </div>
    </div>
    <div className="h3">
    <h3 id='plot' style={{textAlign:'left',marginLeft:'300px', marginTop:'3%',width:'100px'}}>The Plot : </h3>
    <h3 id='plot1' >The Plot : </h3>
    </div>
    <div className='content'>
      <p>{a.contentevil1}</p>
      <p>{a.contentevil2}</p>
    </div>
    </div>

    </>
  )
}

export default Hollyone