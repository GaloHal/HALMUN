import { ReactComponent as CaretIcon } from '../icons/caret.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { committesData } from '../schemas/committeData';

import styles from './Navbar.module.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className={styles['nav-item']}>
            <div className={styles['nav-item-content']}>
                <Link to={props.path}>
                    <span className="p">{props.text}</span>
                </Link>
                
                <i className={styles['nav-icon']} onClick={() => setOpen(!open)}>
                    {props.icon}
                </i>
            </div>
            {open && props.children}
        </li>
    );
}

function DropDownMenu() {
    function DropDownItem(props) {
        const committe = committesData.find(data => data['id'] === props.id);

        return (
            <li className={styles['menu-item']}>
                <Link to={'../committes/' + committe.id}>
                    <span className="p">{committe.name}</span>
                </Link>
            </li>
        );
    }

    return (
        <ul className={styles['drop-down-menu']}>
            {committesData.map(committe => {
                return (<DropDownItem id={committe['id']}/>);
            })}
        </ul>
    );
}


function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar-nav']}>
                <NavItem path='/' text='Home' />
                <NavItem path='../news-and-updates' text='News & Updates' />

                <li className={styles['nav-logo']}>
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