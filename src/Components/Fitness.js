import React,{useContext,useEffect} from 'react'
import Nav from './Nav'
import './container.css'
import './bolly.css'
import NoteContext from './Context/NoteContext'
import { Link } from 'react-router-dom'



function Fitness() {
  const a = useContext(NoteContext)
  useEffect(() => {
    document.body.style.backgroundColor='rgb(134, 203, 250)';
    
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
              <h1 className='head'>Fitness</h1>
              <hr className='hr1'/>            
        </div>
      </div>

      <div className="containercontent">
          <div className="contentcard">
          <Link to='/fitness/Fitone'>
          <div className='image-container'><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/697d91121710739.60cb38b635671.png
          " className="bolimg" alt="purple scene" /></div>
          </Link>
            <div className='pcontent'>
              <p className='p1content'>{a.cardyoga}</p>
              <p className='p2content'>{a.descardyoga}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/fitness/Fittwo'>
          <div className='image-container'><img src="https://cdn.shopify.com/s/files/1/0066/7569/3639/articles/Blog93-Tips_on_How_to_Increase_Deep_Sleep_iStock-925672018.jpg?v=1650483356&width=1000" className="bolimg" alt="purple scene" /></div>
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardsleep}</p>
              <p className='p2content'>{a.desccardsleep}</p>
            </div>
          </div>

          <div className="contentcard">
          <Link to='/fitness/Fithree'>
          <div className='image-container'><img src="https://static.vecteezy.com/system/resources/previews/016/188/405/original/nutritionist-concept-cartoon-pretty-young-woman-with-vegetables-and-fruits-bowl-diet-planner-nutrition-therapy-with-healthy-food-vector.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
          <div className='pcontent'>
              <p className='p1content'>{a.cardvege}</p>
              <p className='p2content'>{a.desccardvege}</p>
            </div>        
          </div>          
        </div>

        <div className="anothercontainercontent">
        <div className="conctnts">
            <div className="conctnt">
          <Link to='/fitness/Fitfour'>
          <div className='image-container'><img src="https://media.istockphoto.com/id/1346624734/vector/child-boy-in-sportswear-running-fast-flat-cartoon-vector-illustration-isolated.jpg?s=170667a&w=0&k=20&c=VmsXRxNqidqMpSDlAMm6BwN0kR-mmHVmVC-8SUfW7PU=" className="bolimg" alt="purple scene" /></div>
              </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardrunning}</p>
                <p className='p2'>{a.desccardrunning}</p>
              </div>
            </div>
  
            <div className="conctnt">
          <Link to='/fitness/Fitfive'>
          <div className='image-container'><img src="https://media.istockphoto.com/id/1359291135/vector/sport-road-cyclists.jpg?s=612x612&w=0&k=20&c=3wNqA5gh5wVNwjnjRuG7yhey8jNbTWKmmT5dky8wtkI=" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                  <p className='p1'>{a.cardcycle}</p>
                  <p className='p2'>{a.desccard}</p>
              </div>
            </div>

            <div className="conctnt">
          <Link to='/fitness/Fitsix'>
          <div className='image-container'><img src="https://img.freepik.com/premium-vector/cute-girl-cartoon-character-healthy-food-exercise_40876-2368.jpg" className="bolimg" alt="purple scene" /></div>
          </Link>
              <div className='pcontent1'>
                <p className='p1'>{a.cardhealthy}</p>
                <p className='p2'>{a.desccardhealthy}</p>
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

export default Fitness
