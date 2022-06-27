import { ReactComponent as CaretIcon } from '../icons/caret.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { committesData } from '../schemas/committeData';

import './Navbar.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <Link to={props.path}>
                <span className="p">{props.text}</span>
            </Link>
            
            <i className='nav-icon' onClick={() => setOpen(!open)}>
                {props.icon}
            </i>

            {open && props.children}
        </li>
    );
}

function DropDownMenu() {
    function DropDownItem(props) {
        const committe = committesData.find(data => data['id'] === props.id);

        return (
            <li className='menu-item'>
                <Link to={'/committes/' + committe.id}>
                    <span className="p">{committe.name}</span>
                </Link>
            </li>
        );
    }

    return (
        <ul className='drop-down-menu'>
            {committesData.map(committe => (
                <DropDownItem key={committe['id']}/>
            ))}
        </ul>
    );
}


function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <NavItem path='/' text='Home' />
                <NavItem path='../news-and-updates' text='News & Updates' />

                <li className='logo'>
                    <img src='/images/logo.png' alt='logo'/>
                </li>
                
                <NavItem path='../registration' text='Registration'/>
                <NavItem path='../committes' text='Committes' icon={<CaretIcon/>}>
                    <DropDownMenu />
                </NavItem>
            </ul>
        </nav>
    );
}

export default Navbar;