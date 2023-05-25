import React,{useContext} from 'react'
import NoteContext from './Context/NoteContext'
import Nav from './Nav'
import './container.css'
import './bolly.css'
import { Link } from 'react-router-dom'


function Tech() {
  const a = useContext(NoteContext)

  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='compcontainer'>
            <div className="compcon1">
              <h1 className='head'>Technology</h1>
              <hr className='hr1'/>           
            </div>
        </div>

        <div className="containercontent">
          <div className="contentcard">
          <Link to='/technology/Techone'>
          <img src="https://www.nitorinfotech.com/wp-content/uploads/2022/07/No-code-low-code-ML-Nitor-Infotech.jpg" className="bolimg" alt="purple scene" />
          </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardnocode}</p>
              <p className='p2content'>{a.desccardnocode}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/technology/Techtwo'>
          <img src="https://media.nationthailand.com/uploads/images/md/2023/02/LnHGoajYyVef4oiO3bbg.webp?x-image-process=style/lg" className="bolimg" alt="purple scene" />
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardchat}</p>
              <p className='p2content'>{a.desccardchat}</p>
          </div>
          </div>

          <div className="contentcard">
          <Link to='/technology/Techthree'>
          <img src="https://www.ecommercetimes.com/wp-content/uploads/sites/5/2022/02/metaverse-shopping.jpg" className="bolimg" alt="purple scene" />
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardmeta}</p>
              <p className='p2content'>{a.desccardmeta}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
        <div className="conctnts">
            <div className="conctnt">
            <Link to='/technology/Techfour'>
          <img src="https://etfdb.com/media/W1siZiIsIjIwMjEvMDkvMjIvbm9od2lmdmZmX0dyZWVuX1RlY2hub2xvZ3lfYW5kX1N1c3RhaW5hYmlsaXR5X01hcmtldF9Gb3JlY2FzdF9mb3JfQ29udGludWVkX0dyb3d0aC5qcGciXSxbInAiLCJ0aHVtYiIsIjMwMHg1NjBeIl1d/Green-Technology-and-Sustainability-Market-Forecast-for-Continued-Growth.jpg" className="bolimg" alt="purple scene" />
          </Link>
              
              <div className='pcontent1'>
                <p className='p1'>{a.cardgreen}</p>
                <p className='p2'>{a.desccardgreen}</p>
              </div>
            </div>
  
            <div className="conctnt">
            <Link to='/technology/Techfive'>
          <img src="https://aidoos.com//media/main-image/digital-twin/Digital-twin.jpg" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.carddigitwin}</p>
                  <p className='p2'>{a.desccarddigitwin}</p>
              </div>
            </div>

            <div className="conctnt">
            <Link to='/technology/Techsix'>
          <img src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2022/06/AdobeStock_161157955.png?fit=820%2C656&ssl=1" className="bolimg" alt="purple scene" />
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardgeno}</p>
                <p className='p2'>{a.desccardgeno}</p>
              </div>
            </div>
          </div>
          <div className="advertisement">
            <h2 className='h2'>Advertisement</h2>
          </div>
        </div>
            

        </div>
    </>
  )
}

export default Tech
