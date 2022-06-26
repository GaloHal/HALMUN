import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <Link to=''>
                        <span className="p">Home</span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to=''>
                        <span className="p">News & Updates</span>
                    </Link>
                </li>
                <li className='logo'>
                    <img src='./images/logo.png' alt='logo'/>
                </li>
                <li className='nav-item'>
                    <span className="p">Registration</span>
                </li>
                <li className='nav-item'>
                    <Link to=''>
                        <span className="p">Committes</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;