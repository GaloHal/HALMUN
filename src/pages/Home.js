import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import { LinkButton } from '../components/Buttons';

import '../App.css';
import { infoData } from '../schemas/infoData';

function Home() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                className='header-content header-content--middle'>
                <Title 
                    text='Welcome to HALMUN!'
                    desc='HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.'
                />
                <span className='p header-description white'>
                    HALMUN is a free online Model United Nations conference that is organised by the Haileybury Almaty school. ​ 
                    Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. Enhance your public speaking skills, master the power of teamwork and meet people from all over the world.

                    HALMUN 2022 is the second iteration of the conference, this time consisting of 3 committees: the United Nations Security Council (UNSC), the United Nations High Commissioner for Refugees (UNHCR), and the Economic and Financial Committee (ECOFIN).
                </span>

                <LinkButton to={infoData['registration-link']}>Register</LinkButton>
            </Header>

			<main>
                <div class='date-info-content content'>
                    <Title
                        text='Future Conference Dates'
                        textSize='h2'
                    />

                    <ul className='date-list'>
                        {infoData['conference-dates'].map((data, key) => {
                            return (
                                <li className='date-item'>
                                    <span className='p'>{data['date']}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
			</main>

            <Footer/>
        </>
    );
}

export default Home;