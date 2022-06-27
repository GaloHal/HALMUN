import Navbar from './Navbar';
import Background from './Background';

import './Header.css';

function Header(props) {
    return (
        <header>
            <Navbar/>
            <Background imgSrc={props.backgroundImgSrc}/>

            <div className='header-container'>
                {props.content()}
            </div>
        </header>
    );
}

export default Header;