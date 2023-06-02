import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'

function Fittwo() {
    const a = useContext(NoteContext)

    return (
        <>
            <Link to='/fitness'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>
            <div className='container'>
                <h2 className='gl'>{a.cardsleep}</h2>
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
                <div className='image-container'><img src="https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/Blog93-Tips_on_How_to_Increase_Deep_Sleep_iStock-925672018.jpg?v=1650483356&width=1000" id="imgr"className="bolimg" alt="purple scene" /></div>
            </div>

            <div className='content'>
                <p>{a.contentsleep1}</p>
                <p>{a.contentsleep2}</p>
                <p>{a.contentsleep3}</p>
                <p>{a.contentsleep4}</p>
                <p>{a.contentsleep5}</p>
            </div>
        </>
    )
}

export default Fittwo