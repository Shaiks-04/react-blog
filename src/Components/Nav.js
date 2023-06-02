import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const show = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <div className='top'>
                <h1 className='heading'><span className='the'>The</span> Siren</h1>
                <img src='../three.jpeg' alt='loading' className='three' onClick={show} />
                <hr id='pc'/>
                <div className='nav '>
                    <Link to='/' style={{ textDecoration: 'none' }}><span className='black'>Home</span></Link><hr className='hrm' />
                    <Link to='/bollywood' style={{ textDecoration: 'none' }}><span className='black' >Bollywood</span></Link><hr className='hrm' />
                    <Link to='/technology' style={{ textDecoration: 'none' }}><span className='black' >Technology</span></Link><hr className='hrm' />
                    <Link to='/hollywood' style={{ textDecoration: 'none' }}><span className='black' >Hollywood</span></Link><hr className='hrm' />
                    <Link to='/fitness' style={{ textDecoration: 'none' }}><span className='black' >Fitness</span></Link><hr className='hrm' />
                    <Link to='/food' style={{ textDecoration: 'none' }}><span className='black' >Food</span></Link>
                </div>
            </div>

            <div>
                <hr className='horizontaline' />
            </div>

            {showMenu &&
                <div className='nav1 '>
                    <Link to='/' style={{ textDecoration: 'none' }}><span className='black'>Home</span></Link><hr className='hrm' />
                    <Link to='/bollywood' style={{ textDecoration: 'none' }}><span className='black' >Bollywood</span></Link><hr className='hrm' />
                    <Link to='/technology' style={{ textDecoration: 'none' }}><span className='black' >Technology</span></Link><hr className='hrm' />
                    <Link to='/hollywood' style={{ textDecoration: 'none' }}><span className='black' >Hollywood</span></Link><hr className='hrm' />
                    <Link to='/fitness' style={{ textDecoration: 'none' }}><span className='black' >Fitness</span></Link><hr className='hrm' />
                    <Link to='/food' style={{ textDecoration: 'none' }}><span className='black' >Food</span></Link>
                </div>
            }
        </>
    )
}

export default Nav
