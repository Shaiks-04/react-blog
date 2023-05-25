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
      <img src="https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/Blog93-Tips_on_How_to_Increase_Deep_Sleep_iStock-925672018.jpg?v=1650483356&width=1000" className="bolimg" alt="purple scene" />
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