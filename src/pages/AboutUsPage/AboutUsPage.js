import Header from '../../components/Header';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';

import { infoData } from '../../schemas/infoData';

import styles from './AboutUsPage.module.css';

function AboutUsPage() {

    console.log("helo?")
    return (
        <>
             <Header
                backgroundImgSrc='/images/background.jpeg'
                type='header-content--left'
                title={
                    <Title
                        text='About HALMUN'
                    />
                }
                desc='HALMUN is a free online Model United Nations conference that is organised by the Haileybury Almaty school. ​ 
                Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. Enhance your public speaking skills, master the power of teamwork and meet people from all over the world.
                HALMUN 2022 is the second iteration of the conference, this time consisting of 3 committees: the United Nations Security Council (UNSC), the United Nations High Commissioner for Refugees (UNHCR), and the Economic and Financial Committee (ECOFIN).'
            >
                <LinkButton to={infoData['registration-link']}>Register Here</LinkButton>
            </Header>
            <main>
                <div className='content content--middle'>
                    <Title
                        text='Meet the Secretariat'
                        textSize='h2'/>
                </div>

                <ul className={styles['about-us-grid']}>
                    <li className={styles['about-us__item']}>
                        <div className={styles['about-us__item-container']}>
                            <img src='/images/about-us/about-us-1.jpg' alt='about-us-1'/>
                            <div className={styles['about-us__item-content']}>
                                <span className='h2'>HALMUN Secretariat</span>
                                <span className='p'>
                                    The HALMUN Secretariat is the main contact point for all inquiries regarding the conference.
                                    The Secretariat is responsible for the planning and coordination of the conference,
                                    as well as the coordination of all other activities.
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </main>
        </>
    );
}

export default AboutUsPage;