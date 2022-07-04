import { Link } from 'react-router-dom';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';

import { useState } from 'react';

import { committesData } from '../../schemas/committeData';
import { infoData } from '../../schemas/infoData';

import styles from './Navbar.module.css';

function NavItem({
    path,
    text,
    children,
    icon=<></>,
    isExternalPath=false,
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
                        {
                            isExternalPath ? (        
                                <a href={path} className='p'>{text}</a>
                            ) : (
                                <Link to={path} className='p'>{text}</Link>
                            )
                        }
                        {icon}
                    </div>
                ) : null
            }

            { isDropDown ? (open && children) : children }
        </li>
    );
}

function DropDownItem({
    path,
    text,
    isExternalPath=false,
}) {
    return (
        <li className={styles['menu-item']}>
            {
                isExternalPath ? (        
                    <a href={path} className='p'>{text}</a>
                ) : (
                    <Link to={path} className='p'>{text}</Link>
                )
            }
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
                    path='../resources' 
                    text='About' 
                    icon={<CaretIcon />} 
                    isDropDown={true}
                >
                    <DropDownMenu>
                        <DropDownItem path='../resources' text='Resources'/>
                        <DropDownItem path='../about-us' text='Staff'/>
                        <DropDownItem path='../sponsors' text='Sponsors'/>
                    </DropDownMenu>
                </NavItem>

                <NavItem className='nav-logo'>
                    <img src='/images/logo.png' alt='logo'/>
                </NavItem>
                
                <NavItem path={infoData['registration-link']} isExternalPath={true} text='Registration'/>
                
                <NavItem 
                    path='../committes' 
                    text='Committes' 
                    icon={<CaretIcon />} 
                    isDropDown={true}
                >
                    <DropDownMenu>
                        {committesData.map(committe => {
                            return (
                                <DropDownItem 
                                    path={'../committes/' + committe.id}
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