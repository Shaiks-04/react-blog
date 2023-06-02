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
                <hr className='hrmm' />
                <div className='insidehead'>
                    <div className='insides'>
                        <div className='image-container'><img src="https://img.freepik.com/premium-photo/sute-girl-hacker-with-laptop-avatar-cartoon-style-black-background-generated-ai_88188-3324.jpg" alt="avatar" className='avatar' /></div>
                        <div>
                            <p>SHAIK</p>
                            <p>May 23 2023</p>
                        </div>
                    </div>
                    <img src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png" alt="logos" className='logos' />        </div>
                <div className='image-container'><img src="https://pbs.twimg.com/media/FnDTY_oaEAAI3VK?format=jpg&name=medium" className="bolimg" id="imgr" alt="purple scene" /></div>
                <p></p>
            </div>

            <div className='gray'>
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
                    <h3 id='plot' style={{ textAlign: 'left', marginLeft: '300px', marginTop: '3%', width: '100px' }}>The Plot : </h3>
                    <h3 id='plot1' >The Plot : </h3>
                </div>
                <div className='content'>
                    <p>{a.contentbholaa1}</p>
                    <p>{a.contentbholaa2}</p>
                    <p>{a.contentbholaa3}</p>
                    <p>{a.contentbholaa4}</p>
                </div></div>
        </>
    )
}

export default Bollyfive