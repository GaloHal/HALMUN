import { useEffect } from 'react';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';

import { infoData } from '../../schemas/infoData';
import { sponsorsData } from '../../schemas/sponsorsData';

import styles from './HomePage.module.css';
import '../Page.css';

function HomePage(props) {
    useEffect(() => {document.title = props.title || "" })
    
    return (
        <>
            <Navbar />
            <Header
                backgroundImgSrc='/images/background.jpeg'
                contentType='header-content--middle'

                title={
                    <Title 
                    text='Welcome to HALMUN!'
                    desc='HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.'
                    />
                }
                desc='The 3rd annual session will take place on October 7th-8th, 2023'
            >
                <LinkButton to={infoData['registration-link']}>Register Here</LinkButton>
            </Header>

			<main>
                <div className='content'>
                    <Title
                        text='A Letter from the Secretary-General:'
                        textSize='h2'
                    />

                    <div className={styles['letter']}>
                        <span className='ltl p'>
                            {infoData['letter']}
                        </span>

                        {/* <img className={styles['letter-sign']} src='/images/letter-sign.webp' alt='Tomiris Kamitova'/> */}

                        <span className='h2 right'>Tomiris Kamitova</span>
                        <span className='p right'>Secretary-General</span>
                        <span className='p right'>Haileybury Almaty Model United Nations</span>
                        <span className='p right'>halmunstaff@gmail.com</span>
                    </div>
                </div>

                <div className='content content--middle'>
                    <Title 
                        text='Partners'
                        textSize='h2'
                    />

                    <ul className='sponsor-grid'>
                        {
                            sponsorsData.map((data, _key) => {
                                return (
                                    <li className='sponsor-item'>
                                        <img src={data['src']} alt={data['name']} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
			</main>

            <Footer/>
        </>
    );
}

export default HomePage;