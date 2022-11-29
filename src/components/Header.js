import { Link } from 'react-router-dom';
// components
import Search from './Search';


const Header = () => {
  return (
    <header className='w-auto font-serif bg-gradient-to-r from-sky-500 to-indigo-500'>
            <nav className='flex justify-center xs:flex-col sm:flex-row justify-evenly gap-2'>
                <h2 className='font-bold text-center xs:mt-2 text-2xl sm:flex-start'><Link>AlKeMovies</Link></h2>
                <ul className='flex justify-center sm:items-center gap-8 text-1xl'>
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