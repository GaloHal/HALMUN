import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css'; 

import { infoData } from '../../schemas/infoData';

function Footer() {
    function SocialLink(props) {
        return (
            <li className={`${styles['list-item']}`}>
                <a href={props.href} className={styles['social-link']}>
                    {props.children}
                </a>
            </li>
        );
    }

    function PageLink({
        path,
        textStyle,
        isExternalPath=false,
        children
    }) {
        return (
            <li className={styles['list-item']}>
                {
                    path ? (
                        isExternalPath ? (
                            <a href={path} target='_blank' rel="noreferrer" className={textStyle}>
                                {children}
                            </a>
                        ):(
                            <Link to={path} className={textStyle}>
                                {children}
                            </Link>              
                        )
                    ):(
                        <span className={textStyle}>
                            {children}
                        </span>
                    )
                }
            </li>
        );
    }

    function List(props) {
        return (
            <div className={styles['list-container']}>
                <span className='p lrg bold'>{props.title}</span>

                <ul className={`${styles['list']} p`}>
                    {props.children}
                </ul>
            </div>
        );
    }

    return (
        <footer>
            <div className={styles['footer-content']}>
                <List title='Quick Links'>
                    <PageLink path='/' textStyle='p'>Home</PageLink>
                    <PageLink path='../about-us' textStyle='p'>Staff</PageLink>
                    <PageLink path='../resources' textStyle='p'>Resources</PageLink>
                    <PageLink path='../sponsors' textStyle='p'>Sponsors</PageLink>
                    <PageLink path={infoData['registration-link']} isExternalPath={true} textStyle='p'>Registration</PageLink>
                    <PageLink path='../committes' textStyle='p'>Committes</PageLink>
                </List>

                <List title='Contact Us'>
                    <PageLink to='mailto:halmunstaff@gmail.com' isExternalPath={true}>
                        <b>Email:</b><br/>
                        halmunstaff@gmail.com
                    </PageLink>

                    <PageLink>
                        <b>Address:</b><br/>
                        112, Al-Farabi Ave., Almaty
                    </PageLink>

                    <PageLink>
                        <b>Phones:</b><br/>
                        87478303734
                    </PageLink>
                </List>
            </div>

            <div className={styles['container']}>

                <ul className={`${styles['list--inline']} ${styles['list']}`}>
                    <SocialLink href='https://instagram.com/halmun_official?igshid=YmMyMTA2M2Y='>
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialLink>
                    <SocialLink href='mailto:halmunstaff@gmail.com'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </SocialLink>
                    
                </ul>

                <span className='p ltl'>
                    Copyright @2022 | Website managed by 
                    <a href='https://github.com/Hereugo' target='_blank' rel='noreferrer'> Amir Nurmukhambetov</a>
                </span>
            </div>

        </footer>
    );
}

export default Footer;