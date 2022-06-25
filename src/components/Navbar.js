import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <span className="p">Home</span>
                </li>
                <li className='nav-item'>
                    <span className="p">News & Updates</span>
                </li>
                <li className='logo'>
                    <img src='./images/logo.png' alt='logo'/>
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