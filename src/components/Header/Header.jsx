import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                {/* <a href="/">HOme</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                <span>My website</span>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>

            </nav>
        </div>
    );
};

export default Header;