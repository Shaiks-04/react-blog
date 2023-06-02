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
                <hr className='hrmm' />
                <div className='insidehead'>
                    <div className='insides'>
                        <div className='image-container'><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar" className='avatar' /></div>
                        <div>
                            <p>SHAIK</p>
                            <p>May 23 2023</p>
                        </div>
                    </div>
                    <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos' />
                </div>
                <div className='image-container'><img src="https://cdn.kinocheck.com/i/qq8i2hy9pk.jpg" id="imgr"className="bolimg" alt="purple scene" /></div>
                <p></p>
            </div>

            <div className='gray'>
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
                    <h3 id='plot' style={{ textAlign: 'left', marginLeft: '300px', marginTop: '3%', width: '100px' }}>The Plot : </h3>
                    <h3 id='plot1' >The Plot : </h3>
                </div>
                <div className='content'>
                    <p>{a.contentinsidious1}</p>
                    <p>{a.contentinsidious2}</p>
                    <p>{a.contentinsidious3}</p>
                </div>

            </div>
        </>
    )
}

export default Hollyfive