import Navbar from '../Navbar';
import Background from '../Background';

import styles from './Header.module.css';

function Header({
    backgroundImgSrc,
    type = 'header-content--middle',
    title,
    desc = '',
    children,
}) {
    return (
        <header>
            <Navbar/>
            <Background imgSrc={backgroundImgSrc}/>

            <div className={styles['header-container']}>
                <div className={`${styles['header-content']} ${styles[type]}`}>
                    {title}

                    <span className={`p bold ${styles['header-desc']}`}>{desc}</span>

                    {children && children}
                </div>
            </div>
        </header>
    );
}

export default Header;