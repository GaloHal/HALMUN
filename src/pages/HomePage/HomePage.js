import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';

import { infoData } from '../../schemas/infoData';

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
                    text='Welcome to Haileybury Almaty Model United Nations!'
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

                        <img className={styles['letter-sign']} src='/images/letter-sign.webp'/>

                        <span className='p right'>Anuar Kul-Mukhammed</span>
                        <span className='p right'>Secretary-General</span>
                        <span className='p right'>Haileybury Almaty Model United Nations</span>
                        <span className='p right'>halmunstaff@gmail.com</span>
                    </div>
                </div>
			</main>

            <Footer/>
        </>
    );
}

export default HomePage;