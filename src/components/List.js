import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom"
import swAlert from '@sweetalert/with-react'

const List = ({addOrRemoveMovieFav}) => {

    let token = sessionStorage.getItem('token');

    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=e38e49ad54d3c6568a7ea78a1c81572e&language=en-US&page=1`;
        axios.get(url)
          .then(res => setMoviesList(res.data.results))
          .catch(err => swAlert(<h2>Intenta más tarde</h2>))
    }, [setMoviesList])
    
    //console.log(moviesList)

  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">

      {
        moviesList.map(movies => {
          return (
            <div className="col-3" key={movies.id}>
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt="poster" className="card-img-top" />
                  <button onClick={addOrRemoveMovieFav} data-movie-id={movies.id}>f</button>
                <div className="card-body">
                  <h5 className="card-title">{movies.title}</h5> 
                    <p className="card-text">
                      {movies.overview}
                    </p>
                    <Link to={`/details?movieID=${movies.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default List