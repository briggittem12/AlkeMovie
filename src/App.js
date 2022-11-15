import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
//components
import Login from "./components/Login";
import List from "./components/List"
import Header from './components/Header';
import Footer from './components/Footer';
import Results from './components/Results';
import Favorites from './components/Favorites';
import Details from './components/Details';
//styles
import './css/bootstrap.min.css'

function App() {

  const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const movieLocal = localStorage.getItem('favs');
        if(movieLocal !== null) {
            const favMovie = JSON.parse(movieLocal);
            setFavorites(favMovie);
        }
    }, [])

  const addOrRemoveMovieFav = e => {

  const saveMovie = localStorage.getItem('favs');
  
  let localMoviesFavs;

  if (saveMovie === null){
    localMoviesFavs = []
  } else {
    localMoviesFavs = JSON.parse(saveMovie);
  }

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
    
    let existMovie = localMoviesFavs.find( movie => movie.id === movieData.id );
    
    if (!existMovie){
      localMoviesFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(localMoviesFavs));
      setFavorites(existMovie);
    } else { //
      let removeFav = localMoviesFavs.filter( movie => movie.id !== movieData.id );
      localStorage.setItem('favs', JSON.stringify(removeFav));
      setFavorites(removeFav);
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
      <Route path= "/favmovie" element={<Favorites favorites={favorites} addOrRemoveMovieFav={addOrRemoveMovieFav}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
