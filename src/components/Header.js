import { Link } from 'react-router-dom';
// components
import Search from './Search';


const Header = () => {
  return (
    <header className='w-auto font-serif bg-gradient-to-r from-sky-500 to-indigo-500'>
            <nav className='flex flex-col justify-center'>
                <h2><Link>AlKeMovies</Link></h2>
                <ul className='flex flex-col'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/favmovie">Favorites</Link>
                    </li>
                </ul>
                 
            <Search/>
        </nav>
    </header>
  )
}

export default Header