import React, { useContext, useEffect } from 'react'
import NoteContext from './Context/NoteContext'
import Nav from './Nav'
import './container.css'
import './bolly.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'


function Tech() {
    const a = useContext(NoteContext)
    useEffect(() => {
        document.body.style.backgroundColor = 'steelblue';

        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
            <Nav />
            <div className='container'>
                <div className='compcontainer'>
                    <div className="compcon1">
                        <h1 className='head'>Technology</h1>
                        <hr className='hr1' />
                    </div>
                </div>

                <div className="containercontent">
                    <div className="contentcard">
                        <Link to='/technology/Techone'>
                            <div className='image-container'><img src="https://www.nitorinfotech.com/wp-content/uploads/2022/07/No-code-low-code-ML-Nitor-Infotech.jpg" id="imgm" className="bolimg" alt="purple scene" /></div>
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardnocode}</p>
                            <p className='p2content'>{a.desccardnocode}</p>
                            <hr className='mainhr4' />
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/technology/Techtwo'>
                            <div className='image-container'><img src="https://media.nationthailand.com/uploads/images/md/2023/02/LnHGoajYyVef4oiO3bbg.webp?x-image-process=style/lg" id="imgm" className="bolimg" alt="purple scene" /></div>
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardchat}</p>
                            <p className='p2content'>{a.desccardchat}</p>
                            <hr className='mainhr4' />
                        </div>
                    </div>

                    <div className="contentcard">
                        <Link to='/technology/Techthree'>
                            <div className='image-container'><img src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg" className="bolimg" id="imgm" alt="purple scene" /></div>
                        </Link>
                        <div className='pcontent'>
                            <p className='p1content'>{a.cardmeta}</p>
                            <p className='p2content'>{a.desccardmeta}</p>
                            <hr className='mainhr4' />
                        </div>
                    </div>
                </div>
                <h1 className='bl'>Top posts</h1>
                <hr className='hrt'/>
                <div className="anothercontainercontent">
                    <div className="conctnts">
                        <div className="conctnt">
                            <Link to='/technology/Techfour'>
                                <div className='image-container'><img src="https://etfdb.com/media/W1siZiIsIjIwMjEvMDkvMjIvbm9od2lmdmZmX0dyZWVuX1RlY2hub2xvZ3lfYW5kX1N1c3RhaW5hYmlsaXR5X01hcmtldF9Gb3JlY2FzdF9mb3JfQ29udGludWVkX0dyb3d0aC5qcGciXSxbInAiLCJ0aHVtYiIsIjMwMHg1NjBeIl1d/Green-Technology-and-Sustainability-Market-Forecast-for-Continued-Growth.jpg" className="bolimg" alt="purple scene" /></div>
                            </Link>

                            <div className='pcontent1'>
                                <p className='p1'>{a.cardgreen}</p>
                                <p className='p2' id='p2'>{a.desccardgreen}</p>
                            </div>
                        </div>
                        <hr className='mainhr4' />
                        <div className="conctnt">
                            <Link to='/technology/Techfive'>
                                <div className='image-container'><img src="https://aidoos.com//media/main-image/digital-twin/Digital-twin.jpg" className="bolimg" alt="purple scene" /></div>
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.carddigitwin}</p>
                                <p className='p2' id='p2'>{a.desccarddigitwin}</p>
                            </div>
                        </div>
                        <hr className='mainhr4' />
                        <div className="conctnt">
                            <Link to='/technology/Techsix'>
                                <div className='image-container'><img src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2022/06/AdobeStock_161157955.png?fit=820%2C656&ssl=1" className="bolimg" alt="purple scene" /></div>
                            </Link>
                            <div className='pcontent1'>
                                <p className='p1'>{a.cardgeno}</p>
                                <p className='p2' id='p2'>{a.desccardgeno}</p>
                            </div>
                        </div>
                    </div>
                    <div className="advertisement">
                        <h2 className='h2'>Advertisement</h2>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default Tech
