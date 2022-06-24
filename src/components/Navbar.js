import logo from '../images/logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <span className="p">Home</span>
                </li>
                <li className='nav-item'>
                    <span className="p">About Us</span>
                </li>
                <li className='logo'>
                    <img src={logo} alt='logo'/>
                </li>
                <li className='nav-item'>
                    <span className="p">Registration</span>
                </li>
                <li className='nav-item'>
                    <span className="p">Committes</span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;