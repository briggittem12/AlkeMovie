import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Details = () => {

    let token = sessionStorage.getItem('token');

    let query = new URLSearchParams(useLocation().search);
    let movieID = query.get('movieID'); 

   
    const [details, setDetails] = useState(null);

    useEffect(() => {
        let URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=e38e49ad54d3c6568a7ea78a1c81572e&language=en-US`;
            axios.get(URL)
                .then(res => setDetails(res.data))
                .catch(err => console.log(err))
    }, [setDetails])
    
    //console.log(details)

  return (

    <>
    {!token && <Navigate to="/" />}
        { details &&
            <>
        <h2>{details.title}</h2>
            <div className="row">
            <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} alt="" className='img-fluid' />
            </div>
            <div className='col-8'>
                <h5>Date: {details.release_date}</h5>
                <h5>Review</h5>
                <p>{details.overview}</p>
                <h5>Ranking: {details.vote_average}</h5>
                <ul>
                    {
                        details.genres.map(genre => 
                        <li key={genre.id}>
                            <span>Genre: {genre.name}</span>
                        </li>)
                    }
                </ul>
                <h5>Page: {details.homepage}</h5>
            </div>
        </div>
        </>
        }
    </>
  )
}

export default Details