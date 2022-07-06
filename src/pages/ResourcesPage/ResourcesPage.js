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
                        All Delegates and Faculty Advisors are encouraged to read the Delegate Handbook linked below. The Handbook contains vital information about HALMUN 2022, including the Rules of Procedure, deadlines, conference policies and more.<br/><br/>
                        Delegates are also recommended to lay the groundwork for a successful MUN performance by reading through the Country Matrix, Background Guides and preparatory videos.<br/><br/>
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