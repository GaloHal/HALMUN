import Navbar from '../Navbar';
import Background from '../Background';

import styles from './Header.module.css';

function Header({
    backgroundImgSrc,
    variant='header--full',
    contentType = 'header-content--middle',
    title,
    desc = '',
    children,
}) {

    console.log(variant);
    return (
        <header 
            className={`${styles['header']} ${styles[variant]}`}>
            <Background imgSrc={backgroundImgSrc}/>

            <div className={styles['header-container']}>
                <div className={`${styles['header-content']} ${styles[contentType]}`}>
                    {title}

                    { desc ? (<span className={`p ${styles['header-desc']}`}>{desc}</span>): (null) }

                    {children && children}
                </div>
            </div>
        </header>
    );
}

export default Header;