import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as GmailIcon } from '../icons/gmail.svg';

import { Link } from 'react-router-dom';

import styles from './Footer.module.css'; 

function Footer() {
    function SocialLink(props) {
        return (
            <a href={props.href} className={styles['social-link']}>
                {props.children}
            </a>
        );
    }

    function PageLink(props) {
        return (
            <li className={styles['list-pages-item']}>
                <Link to={props.to}>
                    {props.children}
                </Link>
            </li>
        );
    }

    return (
        <footer>
            <ul className={styles['list-pages-inline']}>
                <PageLink to='/'>
                    <span className='p white'>Home</span>
                </PageLink>
                <PageLink to='/news-and-updates'>
                    <span className='p white'>News & Updates</span>
                </PageLink>
                <PageLink to='/registration'>
                    <span className='p white'>Registration</span>
                </PageLink>
                <PageLink to='/committes'>
                    <span className='p white'>Committes</span>
                </PageLink>
            </ul>
            <span className='p white'>
                <a href='mailto:halmunstaff@gmail.com' className={styles['email']}>halmunstaff@gmail.com</a>
            </span>

            <span className={'p gray ' + styles['copyright']}>
                Website Managed By Amir Nurmukhambetov
            </span>
        </footer>
    );
}

export default Footer;