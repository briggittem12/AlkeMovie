import { Link } from 'react-router-dom';


const Favorites = ({ favorites, addOrRemoveMovieFav }) => {
    
    let token = sessionStorage.getItem('token');


  return (
    <>
     {!token && <Navigate to="/" />}

        <h1>Favorite's Movies</h1>
            <div className="row">

            {
            favorites.map(movies => {
                return (
                <div className="col-3" key={movies.id}>
                    <div className="card">
                    <img src={movies.imgURL} alt="poster" className="card-img-top" />
                    <button onClick={addOrRemoveMovieFav} data-movie-id={movies.id}>f</button>
                    <div className="card-body">
                        <h5 className="card-title">{movies.title}</h5> 
                        <p className="card-text">
                            {movies.text}
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

export default Favorites