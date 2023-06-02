import React, { useContext } from 'react'
import '../../.././Components/bollycont.css'
import NoteContext from '../../Context/NoteContext'
import { Link } from 'react-router-dom'


function Foodtwo() {
    const a = useContext(NoteContext)
    return (
        <>
            <Link to='/food'>
                <div className="header">
                    <h1 className='heading2'><span className='the2'>The</span> Siren</h1>
                </div>
            </Link>

            <div className='container'>
                <h2 className='gl'>{a.cardchinese}</h2>
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
                <div className='image-container'><img src="https://www.foodandwine.com/thmb/ue_WDjrF9DKAnIpCfRD83lL2Zmg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Longevity-Noodles-FT-RECIPE1122-7844eba95b8a4094b41fa1153cefc3e3.jpg" id="imgr"className="bolimg" alt="purple scene" /></div>
            </div>

            <div className='content'>
                <p>{a.contentchinese}</p>
            </div>
        </>
    )
}

export default Foodtwo