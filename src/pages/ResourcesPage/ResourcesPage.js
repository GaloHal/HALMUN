import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

import styles from './ResourcesPage.module.css';


import Header from '../../components/Header';
import Title from '../../components/Title';

import { Link } from 'react-router-dom';

function Resources(props) {
    useEffect(() => {document.title = props.title || "" })

    return (
        <div className={styles['resourcesPage']}>

            <Header
                variant={isMobile ? 'header--horizontal-half' : 'header--vertical-half'}
                backgroundImgSrc='/images/background-info.jpeg'
            />

            <main className={styles['main']}>
                <div className={`content content--left ${styles['content']}`}>
                    <Title text='Resources' textSize='h2'/>

                    <span className='p'>
                        All Delegates and Faculty Advisors are encouraged to read the Delegate Handbook linked below. The Handbook contains vital information about HALMUN 2022, including the Rules of Procedure, deadlines, conference policies and more.<br/><br/>
                        Delegates are also recommended to lay the groundwork for a successful MUN performance by reading through the Country Matrix, Background Guides and preparatory videos.<br/><br/>
                        If you have any questions, concerns, or requests, feel free to reach out at <a href='mailto:halmunstaff@gmail.com'>halmunstaff@gmail.com</a>.
                    </span>
                
                    <Link className='p' to='../'>HOME</Link>

                    <ul className={styles['list-resources']}>
                        <li className='p'>
                            <a href='https://docs.google.com/spreadsheets/d/1eQaj9rX1NBu5x1VsT9MpSAZ-jsq-BQn1r3EsdLp1kRI/edit?usp=sharing'>Country Matrix</a>
                        </li>
                        <li className='p'>
                            <a href="/data/Final-Delegate-Handbook.pdf" target="_blank">Delegate Handbook</a>    
                        </li>
                        
                        <li className='p'>
                            <Link to='../committes'>Background guides</Link>
                        </li>
                        <li className='p'>
                            <a href='./data/Beginner-Tips.pdf'>Beginner Tips</a>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Resources;