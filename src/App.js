import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import List from "./components/List"
import Header from './components/Header';
import Footer from './components/Footer';
//styles
import './css/bootstrap.min.css'
import Details from './components/Details';
import Results from './components/Results';

function App() {

  const saveMovie = localStorage.getItem('favs');
  
  let localMoviesFavs;

  if (saveMovie === null){
    localMoviesFavs = []
  } else {
    localMoviesFavs = JSON.parse(saveMovie);
  }


  const addOrRemoveMovieFav = e => {
    // extraemos los valores del evento del btn
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const text = parent.querySelector("p").innerText;
    const movieData = {
      imgURL, title, text,
      id: btn.dataset.movieId
    }
    
    let existMovie = localMoviesFavs.find(movie => movie.id === movieData.id );
    
    if (!existMovie){
      localMoviesFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(localMoviesFavs))
    } else { //
      let removeFav = localMoviesFavs.filter(movie => movie.id !== movieData.id);
      localStorage.setItem('favs', JSON.stringify(removeFav))
    }
  }

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path= "/" element={<Login/>}/>
      <Route path= "/list" element={<List addOrRemoveMovieFav={addOrRemoveMovieFav}/>}/>
      <Route path= "/details" element={<Details/>}/>
      <Route path= "/results" element={<Results/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
