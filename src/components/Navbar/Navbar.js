import { ReactComponent as CaretIcon } from '../../icons/caret.svg';

import { useState } from 'react';

import { comittesData } from '../../schemas/comitteData';
import { infoData } from '../../schemas/infoData';

import styles from './Navbar.module.css';

function NavItem({
    path,
    text,
    children,
    icon=<></>,
    isDropDown=false,
    className = 'nav-item',
}) {

    const [open, setOpen] = useState(false);

    return (
        <li className={styles[className]}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}>

            {
                text ? (
                    <div className={styles['nav-item-content']}>    
                        <a href={path} className='p'>{text}</a>
                        {icon}
                    </div>
                ) : null
            }

            { isDropDown ? (open && children) : children }
        </li>
    );
}

function DropDownItem(props) {
    return (
        <li className={styles['menu-item']}>
            <a href={props.path} className='p'>{props.text}</a>
        </li>
    );
}
function DropDownMenu(props) {
    return (
        <ul className={styles['drop-down-menu']}>
            {props.children}
        </ul>
    );
}


function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar-nav']}>
                <NavItem path='../' text='Home' />
                
                <NavItem 
                    path='../information' 
                    text='About' 
                    icon={<CaretIcon />} 
                    isDropDown={true}
                >
                    <DropDownMenu>
                        <DropDownItem path='../information' text='Information'/>
                        <DropDownItem path='../about-us' text='Secretariat'/>
                    </DropDownMenu>
                </NavItem>

                <NavItem className='nav-logo'>
                    <img src='/images/logo.png' alt='logo'/>
                </NavItem>
                
                <NavItem path={infoData['registration-link']} text='Registration'/>
                
                <NavItem 
                    path='../comittes' 
                    text='Comittes' 
                    icon={<CaretIcon />} 
                    isDropDown={true}
                >
                    <DropDownMenu>
                        {comittesData.map(committe => {
                            return (
                                <DropDownItem 
                                    path={'../comittes/' + committe.id}
                                    text={committe.name} 
                                />
                            );
                        })}
                    </DropDownMenu>
                </NavItem>
            </ul>
        </nav>
    );
}

export default Navbar;