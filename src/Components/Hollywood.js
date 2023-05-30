import React,{useContext,useEffect} from 'react'
import NoteContext from './Context/NoteContext'
import Nav from './Nav'
import './container.css'
import './bolly.css'
import { Link } from 'react-router-dom'



  

function Hollywood() {
  const a = useContext(NoteContext)
  useEffect(() => {
    document.body.style.backgroundColor='grey';
    
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='compcontainer'>
            <div className="compcon1">
              <h1 className='head'>Hollywood</h1>
              <hr className='hr1'/>         
            </div>
       </div>

       <div className="containercontent">
          <div className="contentcard">
          <Link to='/Hollywood/Hollyone'>
          <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardevil}</p>
              <p className='p2content'>{a.desccardevil}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/Hollywood/Hollytwo'>
          <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BODBjM2M4YTQtNmJlMS00MGU2LWI4ZGYtZTA1MzdmZDAyMjFkXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardscream}</p>
              <p className='p2content'>{a.desccardscream}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/Hollywood/Hollythree'>
          <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BYWRmNmUxZjItNzJjZS00ZGI1LWFkNmMtMzEzM2NhZmMxMzVlXkEyXkFqcGdeQXVyMTIxNzk0MTY@._V1_.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardvoyage}</p>
              <p className='p2content'>{a.desccardvoyage}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
        <div className="conctnts">
            <div className="conctnt">
            <Link to='/Hollywood/Hollyfour'>
          <div className='image-container'><img src="../fast-x.jpeg" className="bolimg" alt="purple scene" /></div>
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardbear}</p>
                <p className='p2'>{a.desccardbear}</p>
              </div>
            </div>
  
            <div className="conctnt">
            <Link to='/Hollywood/Hollyfive'>
          <div className='image-container'><img src="https://cdn.kinocheck.com/i/qq8i2hy9pk.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.cardinsidious}</p>
                  <p className='p2'>{a.desccardinsidious}</p>
              </div>
            </div>

            <div className="conctnt">
            <Link to='/Hollywood/Hollysix'>
          <div className='image-container'><img src="https://tvline.com/wp-content/uploads/2023/02/the-marvels-poster.png" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardmarvel}</p>
                <p className='p2'>{a.desccardmarvel}</p>
              </div>
            </div>
          </div>
          <div className="advertisement">
            <h2>Advertisement</h2>
          </div>
        </div>
            

        </div>
    </>
  )
}

export default Hollywood
