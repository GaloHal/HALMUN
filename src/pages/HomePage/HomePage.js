import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';

import { infoData } from '../../schemas/infoData';
import { sponsorsData } from '../../schemas/sponsorsData';

import styles from './HomePage.module.css';
import '../Page.css';

function HomePage() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                type='header-content--middle'

                title={
                    <Title 
                    text='Welcome to HALMUN!'
                    desc='HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.'
                    />
                }
                desc='The 2nd annual session will take place on October 8-9th, 2022'
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
                        <span className='p'>
                            {infoData['letter']}
                        </span>

                        <img className={styles['letter-sign']} src='/images/letter-sign.webp' alt='Anuar Kul-Mukhammed'/>

                        <span className='p right'>Anuar Kul-Mukhammed</span>
                        <span className='p right'>Secretary-General</span>
                        <span className='p right'>Haileybury Almaty Model United Nations</span>
                        <span className='p right'>halmunstaff@gmail.com</span>
                    </div>
                </div>

                <div className='content content--middle'>
                    <Title 
                        text='Sponsors'
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