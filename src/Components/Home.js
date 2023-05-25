import React, { useContext } from 'react'
import Nav from './Nav'
import './container.css'
import NoteContext from './Context/NoteContext'
import { Link } from 'react-router-dom'

function Home() {
  const a = useContext(NoteContext)
  return (
    <>
      <Nav />

      <div className='imgcon' style={{marginTop:'15px'}}>
        <div>
        <Link to='/bollywood/Bollyfour'>
          <img src="../OMSHANTHI.jpeg" alt="" className='image' />
          </Link>
          </div>

        <div>
        <Link to='/Hollywood/Hollyfour'>
          <img src="../fast-x.jpeg" alt="purple scene" className='image1' />
          </Link>
          </div>

        <div>
        <Link to='/technology/Techsix'>
          <img src="../hack.jpeg" alt="purple scene" className='image2' />
          </Link>
          </div>
      </div>

      <div className='container'>
        <br />
        <h1 className='head'>Latest Articles</h1>
        <hr className='hr1' />
        <hr className="no" style={{ width: '68%' }} />

        <div className="midcon">
          <div className='midcon1'>
            <div className="midcons">
              {/* grey card */}
              <Link to='/bollywood/Bollytwo'>
              <img src="https://akamaividz2.zee5.com/image/upload/w_856,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/list/1170x65663742f5472f42b1a505a4642818bd6a.jpg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                {/* content */}
                <h3 className='card1'>{a.cardkanjoos}</h3>
                <p className='card1para'>{a.desccardkanjos}</p>
                <p className='card1footer'>Bollywood <span className='light'>/ May 23 2023</span></p>
              </div>
            </div>

            <div className="midcons">
            <Link to='/Hollywood/Hollytwo'>
              <img src="data:image/jpeg;base64,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" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardscream}</h3>
                <p className='card1para'>{a.desccardscream}</p>
                <p className='card1footer'>Hollywood <span className='light'>/ May 23 2023</span></p>
              </div>
            </div>
            <div className="midcons">
            <Link to='/technology/Techfive'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi61QJ20mHNwvjBfyCIH_flxRNajQsX7e3zg&usqp=CAU" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.carddigitwin}</h3>
                <p className='card1para'>{a.desccarddigitwin}</p>
                <p className='card1footer'>Technology <span className='light'>/ May 23 2023</span></p>
              </div>
            </div>
            <div className="midcons">
            <Link to='/food/Foodfive'>
              <img src="../nikki.jpeg" className="img" alt="purple scene" />
              </Link>
              <div className='cardcontent'>
                <h3 className='card1'>{a.cardmexican}</h3>
                <p className='card1para'>{a.desccardmexican}</p>
                <p className='card1footer'>Food <span className='light'>/ May 23 2023</span></p>
              </div>
            </div>
          </div>

          <div className="midcon2">
            {/* grey ad container */}
            <div className='add'>
              Advertisement
            </div>

          </div>
        </div>
        <h1 className='head left'>Top Posts</h1>
        <hr className='hr1 hrleft' />
        <Link to='/food/Foodsix'>
        <img src="https://cdn.tasteatlas.com/images/toplistarticles/9b66fcce6cc04ec59acbc4ce78e2ca23.jpg?m=facebook" className="img1" alt="purple scene" />
        </Link>
        <div className='cardcontent1'>
          <h3 className='card1'>{a.cardgreek}</h3>

          <p className='card1footer'>Food <span className='light'>/ May 23 2023</span></p>
        </div>
      </div>

      <div className='lastimg'>
      <Link to='/technology/Techthree'>
        <img src="../mark.jpeg" className="imagee" alt="purple scene" />
</Link>
        <h3 className='cardctnt'>{a.cardmeta}</h3>
        <p className='cardfooter'>Technology <span className='light'>/ May 23 2023</span></p>
      </div>

      <div className='small small1'>
      <Link to='/fitness/Fitfour'>
        <img src="https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=170667a&w=0&k=20&c=VmsXRxNqidqMpSDlAMm6BwN0kR-mmHVmVC-8SUfW7PU=" className="imgright" alt="purple scene" />
        </Link>
        <div className='ctnt'>
          <h3 className='cardctntright'>{a.cardrunning}</h3>

          <p className='cardfooterright'>Fitness <span className='light'>/ May 23 2023</span></p>
        </div>
      </div>

      <div className='small small1'>
      <Link to='/fitness/Fitone'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697d91121710739.60cb38b635671.png" className="imgright" alt="purple scene" />
        </Link>
        <div className='ctnt1'>
          <h3 className='cardctntright1'>{a.cardyoga}</h3>
        </div>
        <div className='fit'>
        <p className='cardfooterright1'>Fitness <span className='light'>/ May 23 2023</span></p>
        </div>
      </div>
      <div className='small small2'>
      <Link to='/fitness/Fitfive'>
        <img src="https://media.istockphoto.com/id/1359291135/vector/sport-road-cyclists.jpg?s=612x612&w=0&k=20&c=3wNqA5gh5wVNwjnjRuG7yhey8jNbTWKmmT5dky8wtkI=" className="imgright2" alt="purple scene" />
        </Link>
        <div className='ctnt2'>
          <h3 className='cardctntright2'>{a.cardcycle}</h3>
        </div>
        <div className='foot'>
        <p className='cardfooterright2'>Fitness <span className='light'>/ May 23 2023</span></p></div>
      </div>
      

    </>
  )
}

export default Home
