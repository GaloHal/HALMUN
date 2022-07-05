import styles from './ResourcesPage.module.css';
import { useEffect } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';

function Resources(props) {
    useEffect(() => {document.title = props.title || "" })

    return (
        <div className={styles['resourcesPage']}>

            <header className='header'>
                <Header
                    withNav={false}
                    variant='header--half'
                    backgroundImgSrc='/images/background-info.jpeg'
                />
            </header>

            <main className='main'>
                <div className={`content content--left ${styles['content']}`}>
                    <Title text='Resources' textSize='h2'/>

                    <span className='p'>
                        All Delegates and Faculty Advisors are required to read and agree to the Background Guides linked below. The Background Guides contain vital information about HALMUN 2023, including deadlines, fees, refund policies, and more.<br/><br/>
                        If you have any questions, concerns, or requests, feel free to reach out at <a href='mailto:halmunstaff@gmail.com'>halmunstaff@gmail.com</a>.
                    </span>
                
                    <Link className='p' to='../'>HOME</Link>

                    <ul className={styles['list-resources']}>
                        <li className='p'>Country Matrix</li>
                        <li className='p'>Delegate Handbook</li>
                        <li className='p'>Background guides</li>
                        <li className='p'>Videos</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Resources;