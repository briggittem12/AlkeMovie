import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import swAlert from '@sweetalert/with-react';

const Results = () => {

    let query = new URLSearchParams(useLocation().search);
    let keyword = query.get('keyword');

    const [resultsMovie, setResultsMovie] = useState([]);

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=e38e49ad54d3c6568a7ea78a1c81572e&language=en-US&query=${keyword}`;
            axios.get(url)
            .then(res => {
                    let moviesRes = res.data.results;
                    if (moviesRes.length === 0 ){
                        swAlert(<h4>No found</h4>)
                    }
                    setResultsMovie(res.data.results)})
                .catch(err => console.log(err))
    }, [keyword])

console.log(resultsMovie)

  return (
    <>
    <div className="row">
    <h2>Results about {keyword}</h2>

      {
        resultsMovie.map(movies => {
          return (
            <div className="col-4" key={movies.id}>
              <div className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{movies.title}</h5>
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

export default Results