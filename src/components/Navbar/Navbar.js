import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faHouse, faCircleInfo, faUserPen, faUser } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import { committesData } from '../../schemas/committeData';
import { infoData } from '../../schemas/infoData';

import './Navbar.css';

function NavItem({
    path = '',
    text,
    displayIcon,
    children,
    icon=<></>,
    isExternalPath=false,
    isDropDown=false,
    className = 'nav-item',
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <MobileView 
                className={className}
                onClick={() => setOpen(!open)}
            >
                <div className='nav-item-content'>
                    {
                        isExternalPath ? (
                            <a href={path}>
                                <FontAwesomeIcon icon={displayIcon}/>
                            </a>
                        ) : (
                            <Link to={path}>
                                <FontAwesomeIcon icon={displayIcon}/>
                            </Link>
                        )
                    }
                </div>
                { isDropDown ? (open && children) : children }
            </MobileView>
            <BrowserView 
                className={className}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div className='nav-item-content'>
                    {
                        isExternalPath ? (        
                            <a href={path} className='p'>{text}</a>
                        ) : (
                            <Link to={path} className='p'>{text}</Link>
                        )
                    }
                    <FontAwesomeIcon icon={icon}/>
                </div>
                { isDropDown ? (open && children) : children }
            </BrowserView>
        </>
    );
}

function DropDownItem({
    path,
    text,
    isExternalPath=false,
}) {
    return (
        <li className='drop-down_item'>
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
        <ul className='drop-down'>
            {props.children}
        </ul>
    );
}


function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <NavItem 
                    path='../' 
                    text='Home' 
                    displayIcon={faHouse}
                />
                
                <NavItem 
                    text='About' 
                    displayIcon={faCircleInfo}

                    icon={faCaretDown} 
                    isDropDown={true}
                >
                    <DropDownMenu>
                        <DropDownItem path='../about-us' text='Staff'/>
                        <DropDownItem path='../resources' text='Resources'/>
                        <DropDownItem path='../sponsors' text='Sponsors'/>
                    </DropDownMenu>
                </NavItem>

                <li className='nav-logo'>
                    <img src='/images/logo.png' alt='logo'/>
                </li>
                
                <NavItem 
                    text='Committees'
                    displayIcon={faUser} 
                    icon={faCaretDown} 
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

                <NavItem 
                    path={infoData['registration-link']} 
                    isExternalPath={true} 
                    text='Registration'
                    displayIcon={faUserPen}
                />
            </ul>
        </nav>
    );
}

export default Navbar;