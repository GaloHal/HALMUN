import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css'; 

import { infoData } from '../../schemas/infoData';

function Footer() {
    function SocialLink(props) {
        return (
            <li className={`${styles['list-item']} ${styles['list-item--circle']}`}>
                <a href={props.href} className={styles['social-link']}>
                    {props.children}
                </a>
            </li>
        );
    }

    function PageLink(props) {
        return (
            <li className={styles['list-item']}>
                {
                    props.to ? (
                        <a href={props.to} className={props.textStyle}>
                            {props.children}
                        </a>
                    ):(
                        <span className={props.textStyle}>
                            {props.children}
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
                    <PageLink to='/' textStyle='p'>Home</PageLink>
                    <PageLink to='../information' textStyle='p'>Information</PageLink>
                    <PageLink to='../about-us' textStyle='p'>Secretariat</PageLink>
                    <PageLink to={infoData['registration-link']} textStyle='p'>Registration</PageLink>
                    <PageLink to='../committes' textStyle='p'>Committes</PageLink>
                </List>

                <List title='Contact Us'>
                    <PageLink to='mailto:halmunstaff@gmail.com'>
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
                    <a href='https://github.com/Hereugo' target='_blank'> Amir Nurmukhambetov</a>
                </span>
            </div>

        </footer>
    );
}

export default Footer;