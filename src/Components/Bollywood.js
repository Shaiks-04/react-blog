import React,{useContext,useEffect} from 'react'
import Nav from './Nav'
import './bolly.css'
import './container.css'
import { Link } from 'react-router-dom'
import NoteContext from './Context/NoteContext'



function Bollywood() {
  const a = useContext(NoteContext)
  useEffect(() => {
    document.body.style.backgroundColor='lightblue';
    
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='containerhead'>
            <div className="compcon1">
              <h1 className='head'>Bollywood</h1>
              <hr className='hr11'/> 
            </div>
        </div>

        <div className="containercontent">
          <div className="contentcard">

          <Link to='/bollywood/Bollyone'>
          <div className='image-container'><img src="https://images.livemint.com/img/2023/03/21/600x338/The-film-has-been-produced-by-Tips-Films-and-Music_1679375273338.png" className="bolimg" alt="purple scene" /></div>
          </Link>

            <div className='pcontent'>
              <p className='p1content'>{a.cardgaslight}</p>
              <p className='p2content'>{a.desccardgaslight}</p>
            </div>
          </div>

          <div className="contentcard">

          <Link to='/bollywood/Bollytwo'>
          <div className='image-container'><img src="https://akamaividz2.zee5.com/image/upload/w_856,h_482,c_scale,f_webp,q_auto:eco/resources/0-0-1z5326731/list/1170x65663742f5472f42b1a505a4642818bd6a.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>

          <div className='pcontent'>
            
              <p className='p1content'>{a.cardkanjoos}</p>
              <p className='p2content'>{a.desccardkanjos}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/bollywood/Bollythree'>
          <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BYjBkMGE5ZjEtOTdkNC00OTA5LWIzOWQtMmJmODRlMmRhM2YxXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardblurr}</p>
              <p className='p2content'>{a.desccardblurr}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
          <div className="conctnts">
            <div className="conctnt">
            <Link to='/bollywood/Bollyfour'>
          <div className='image-container'><img src="../OMSHANTHI.jpeg" className="bolimg" alt="purple scene" /></div>
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardom}</p>
                <p className='p2'>{a.desccardom}</p>
              </div>
            </div>
  
            <div className="conctnt">
            <Link to='/bollywood/Bollyfive'>
          <div className='image-container'><img src="https://pbs.twimg.com/media/FnDTY_oaEAAI3VK?format=jpg&name=medium" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.cardbhola}</p>
                  <p className='p2'>{a.desccardbhola}</p>
              </div>
            </div>

            <div className="conctnt">
            <Link to='/bollywood/Bollysix'>
          <div className='image-container'><img src="https://m.media-amazon.com/images/M/MV5BNmU2NjI5MDUtODIzZS00ODNlLTg0ODItMTI5YTM5YWE5NzJmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardyodha}</p>
                <p className='p2'>{a.desccardyodha}</p>
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

export default Bollywood
