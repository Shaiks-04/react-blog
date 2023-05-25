import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Bollywood from './Components/Bollywood';
import Fitness from './Components/Fitness';
import Food from './Components/Food';
import Hollywood from './Components/Hollywood';
import Home from './Components/Home';
import Tech from './Components/Tech';
import Error from './Components/Error';
import NotesState from './Components/Context/NotesState';
import Bollyone from './Components/Contents/Bollyctnt/Bollyone';
import Bollytwo from './Components/Contents/Bollyctnt/Bollytwo';
import Bollythree from './Components/Contents/Bollyctnt/Bollythree';
import Bollyfour from './Components/Contents/Bollyctnt/Bollyfour';
import Bollyfive from './Components/Contents/Bollyctnt/Bollyfive';
import Bollysix from './Components/Contents/Bollyctnt/Bollysix';
import Techone from './Components/Contents/Techctnt/Techone';
import Techtwo from './Components/Contents/Techctnt/Techtwo';
import Techthree from './Components/Contents/Techctnt/Techthree';
import Techfour from './Components/Contents/Techctnt/Techfour';
import Techfive from './Components/Contents/Techctnt/Techfive';
import Techsix from './Components/Contents/Techctnt/Techsix';
import Hollyone from './Components/Contents/Hollyctnt/Hollyone';
import Hollytwo from './Components/Contents/Hollyctnt/Hollytwo';
import Hollythree from './Components/Contents/Hollyctnt/Hollythree';
import Hollyfour from './Components/Contents/Hollyctnt/Hollyfour';
import Hollyfive from './Components/Contents/Hollyctnt/Hollyfive';
import Hollysix from './Components/Contents/Hollyctnt/Hollysix';
import Fitone from './Components/Contents/Fitnessctnt/Fitone';
import Fittwo from './Components/Contents/Fitnessctnt/Fittwo';
import Fithree from './Components/Contents/Fitnessctnt/Fithree';
import Fitfour from './Components/Contents/Fitnessctnt/Fitfour';
import Fitfive from './Components/Contents/Fitnessctnt/Fitfive';
import Fitsix from './Components/Contents/Fitnessctnt/Fitsix';
import Foodone from './Components/Contents/Foodctnt/Foodone';
import Foodtwo from './Components/Contents/Foodctnt/Foodtwo';
import Foodthree from './Components/Contents/Foodctnt/Foodthree';
import Foodfour from './Components/Contents/Foodctnt/Foodfour';
import Foodfive from './Components/Contents/Foodctnt/Foodfive';
import Foodsix from './Components/Contents/Foodctnt/Foodsix';




function App() {
  return (
    <div className='App'>
    <NotesState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bollywood' element={<Bollywood/>}/>
          <Route path='/technology' element={<Tech/>}/>
          <Route path='/hollywood' element={<Hollywood/>}/>
          <Route path='/fitness' element={<Fitness/>}/>
          <Route path='/food' element={<Food/>}/>
          <Route path='/*' element={<Error/>}/>
          <Route path='/bollywood/bollyone' element={<Bollyone/>} />
          <Route path='/bollywood/bollytwo' element={<Bollytwo/>} />
          <Route path='/bollywood/bollythree' element={<Bollythree/>} />
          <Route path='/bollywood/bollyfour' element={<Bollyfour/>} />
          <Route path='/bollywood/bollyfive' element={<Bollyfive/>} />
          <Route path='/bollywood/bollysix' element={<Bollysix/>} />

          <Route path='/technology/Techone' element={<Techone/>} />
          <Route path='/technology/Techtwo' element={<Techtwo/>} />
          <Route path='/technology/Techthree' element={<Techthree/>} />
          <Route path='/technology/Techfour' element={<Techfour/>} />
          <Route path='/technology/Techfive' element={<Techfive/>} />
          <Route path='/technology/Techsix' element={<Techsix/>} />

          <Route path='/Hollywood/Hollyone' element={<Hollyone/>} />
          <Route path='/Hollywood/Hollytwo' element={<Hollytwo/>} />
          <Route path='/Hollywood/Hollythree' element={<Hollythree/>} />
          <Route path='/Hollywood/Hollyfour' element={<Hollyfour/>} />
          <Route path='/Hollywood/Hollyfive' element={<Hollyfive/>} />
          <Route path='/Hollywood/Hollysix' element={<Hollysix/>} />

          <Route path='/fitness/Fitone' element={<Fitone/>} />
          <Route path='/fitness/Fittwo' element={<Fittwo/>} />
          <Route path='/fitness/Fithree' element={<Fithree/>} />
          <Route path='/fitness/Fitfour' element={<Fitfour/>} />
          <Route path='/fitness/Fitfive' element={<Fitfive/>} />
          <Route path='/fitness/Fitsix' element={<Fitsix/>} />

          <Route path='/food/Foodone' element={<Foodone/>}/>
          <Route path='/food/Foodtwo' element={<Foodtwo/>}/>
          <Route path='/food/Foodthree' element={<Foodthree/>}/>
          <Route path='/food/Foodfour' element={<Foodfour/>}/>
          <Route path='/food/Foodfive' element={<Foodfive/>}/>
          <Route path='/food/Foodsix' element={<Foodsix/>}/>
          

        </Routes>
      </BrowserRouter>
   </NotesState>
   
 
    </div>

  );
}

export default App;
//step-- 2