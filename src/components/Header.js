import { Link } from 'react-router-dom';
// components
import Search from './Search';


const Header = () => {
  return (
    <header>
        <nav>
            <ul>
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