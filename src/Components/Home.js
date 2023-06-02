import React, { useContext } from 'react'
import Nav from './Nav'
import './container.css'
import NoteContext from './Context/NoteContext'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function Home() {
    const a = useContext(NoteContext)
    return (
        <>
            <Nav />
            <div className='imgcon' style={{ marginTop: '15px' }}>
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
            <div className='container1'>
                <h1 className='head' id='head1'>The Latest</h1>
                <hr className='hr1' />
                <div className='flex'>
                    <div className='thelatest'>
                        <div className="middle">
                            <Link to='/food/foodThree'>
                                <div className='image-container'><img src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQSFqbWlV7IqvASUvK-OTW9ljoDeJa1lCkSKYSXH7YY1SAQ-y1ZIYIYCUcPyHsYsRaBO5SoNZNmxAMTWmo" id="mid" className="img" alt="purple scene" /></div>
                            </Link>
                            <div className='middlecontent'>
                                {/* content */}
                                <h3 className='card1' id='card11'>French Cuisne</h3>
                                <p className='card1para' id='card1para1'>Many people consider French food to be among the best in the world.</p>
                                <p className='card1footer' id='card1footer1'>Food <span className='light'>/ May 23 2023</span></p>
                            </div>
                        </div>
                        <hr className='hrm2' />
                        <div className="middle">
                            <Link to='/bollywood/Bollythree'>
                                <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BYjBkMGE5ZjEtOTdkNC00OTA5LWIzOWQtMmJmODRlMmRhM2YxXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" id="mid" className="img" alt="purple scene" /></div>
                            </Link>
                            <div className='middlecontent'>
                                {/* content */}
                                <h3 className='card1' id='card11'>{a.cardblurr}</h3>
                                <p className='card1para' id='card1para1'>With progressive blindness setting in, Gayatri has to find answers to her twin sister's unlikely death.</p>
                                <p className='card1footer' id='card1footer1'>Bollywood <span className='light'>/ May 23 2023</span></p>
                            </div>
                        </div>
                        <hr className='hrm2' />

                        <div className="middle">
                            <Link to='/Hollywood/Hollyfive'>
                                <div className='image-container'><img src="https://cdn.kinocheck.com/i/qq8i2hy9pk.jpg" className="img" id="mid" alt="purple scene" /></div>
                            </Link>
                            <div className='middlecontent'>
                                {/* content */}
                                <h3 className='card1' id='card11'>{a.cardinsidious}</h3>
                                <p className='card1para' id='card1para1'>abbreviated as TJMM, is a 2023 Indian Hindi-language romantic comedy film directed by Luv Ranjan.</p>
                                <p className='card1footer' id='card1footer1'>Hollywood <span className='light'>/May 23 2023</span></p>
                                {/* <hr className='hrm2'/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <br />
                <h1 className='head' >Latest Articles</h1>
                <hr className='hr1' />
                {/* <hr className="no" style={{ width: '68%', marginBottom: '2px' }} /> */}

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
                        <hr className='hrm3' />

                        <div className="midcons">
                            <Link to='/Hollywood/Hollytwo'>
                                <img src="../scream-6.jpeg" className="img" alt="purple scene" />
                            </Link>
                            <div className='cardcontent'>
                                <h3 className='card1'>{a.cardscream}</h3>
                                <p className='card1para'>{a.desccardscream}</p>
                                <p className='card1footer'>Hollywood <span className='light'>/ May 23 2023</span></p>
                            </div>
                        </div>
                        <hr className='hrm3' />

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
                        <hr className='hrm3' />

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
                    {/* <hr className='hrm2' /> */}

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
                    <h3 className='card2'>{a.cardgreek}</h3>

                    <p className='card2footer'>Food <span className='light'>/ May 23 2023</span></p>
                </div>
            </div>
            <hr id='noo' style={{ width: '450px', marginLeft: '850px' }} />
            <div className='leftdown'>
                <div className='small small1' id='small1'>
                    <Link to='/fitness/Fitfour'>
                        <img src="https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=170667a&w=0&k=20&c=VmsXRxNqidqMpSDlAMm6BwN0kR-mmHVmVC-8SUfW7PU=" className="imgright" alt="purple scene" />
                    </Link>
                    <div className='ctnt'>
                        <h3 className='cardctntright'>{a.cardrunning}</h3>
                        <p className='cardfooterright'>Fitness <span className='light'>/ May 23 2023</span></p>
                        <hr id="dow" className='hr2' />

                    </div>
                </div>
                <hr id="downhr" />

                {/* <hr style={{width:'450px', marginLeft:'850px'}}/> */}

                <div className='small small1'>

                    <Link to='/fitness/Fitone'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697d91121710739.60cb38b635671.png" className="imgright1" alt="purple scene" />
                    </Link>
                    <div className='ctnt1'>
                        <h3 className='cardctntright1'>{a.cardyoga}</h3>
                    </div>
                    <div className='fit'>
                        <p className='cardfooterright1'>Fitness<span className='light'>/ May 23 2023</span></p>
                        <hr id='dow' style={{ width: '450px', marginLeft: '-370px', marginTop: '50px' }} />
                    </div>
                </div>
                <hr id="downhr" />

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
            </div>
            <hr id='dow' style={{ width: '450px', marginLeft: '850px' }} />
            <hr id="downhr" />

            <div className='lastimg'>
                <Link to='/technology/Techthree'>
                    <img src="../mark.jpeg" className="imagee" alt="purple scene" />
                </Link>
                <h3 className='cardctnt'>{a.cardmeta}</h3>
                <p className='cardfooter'>Technology <span className='light'>/ May 23 2023</span></p>
                <hr className='markhr' />
            </div>
            <Footer />
        </>
    )
}

export default Home
