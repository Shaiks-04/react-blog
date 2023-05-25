import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


function Nav() {
  
  return (
    <>
 <div className='upar'>
    <h1 className='heading'><span className='the'>The</span> Siren</h1>
    <div className='nav '>   
      <Link to='/' style={{ textDecoration: 'none' }}><span className='black'>Home</span></Link>
      <Link to='/bollywood' style={{ textDecoration: 'none' }}><span className='black' >Bollywood</span></Link>
      <Link to='/technology' style={{ textDecoration: 'none' }}><span className='black' >Technology</span></Link>
      <Link to='/hollywood' style={{ textDecoration: 'none' }}><span className='black' >Hollywood</span></Link>
      <Link to='/fitness' style={{ textDecoration: 'none' }}><span className='black' >Fitness</span></Link>
      <Link to='/food' style={{ textDecoration: 'none' }}><span className='black' >Food</span></Link>
    </div>
    </div>

    <div>
      <hr className='horizontaline'/>
    </div>
    
   </>
  )
}

export default Nav
