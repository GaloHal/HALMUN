import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import LinkButton from '../components/LinkButton';

import { infoData } from '../schemas/infoData';

import styles from './Home.module.css';
import './Page.css';

function Home() {
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
                        <span className='p'>Dear Delegates and Faculty Advisers,</span>
                        <span className='p'>It is with absolute pleasure that I invite you to join us for the 69th Annual Session of Harvard National Model United Nations (HNMUN). We are so excited to welcome you to the Boston Marriott Copley Place from February 16 to February 19, 2023. </span>
                        <span className='p'>Our conference prides itself in being one of the most unique conferences on the collegiate circuit. For nearly seven decades, HNMUN has been an annual forum for hundreds of college students from over 40 countries. Every year, delegates from around the world come to Boston to discuss pressing international issues and defend their positions passionately. They learn how to negotiate with other people and collaborate with like-minded representatives. They work together on policy proposals and detailed programs in order to solve important global problems on topics ranging from drone technology to territorial sovereignty. </span>
                        <span className='p'>However, HNMUN is so much more than just the debate that happens in committees. Delegates at our conferences build friendships and make connections with people from diverse backgrounds. These relationships often go past the four days we spend at conference together. Staffed every year by over 150 undergraduates from Harvard College, HNMUN remains the oldest, largest, and most prestigious collegiate conference of its kind, and our team is looking forward to continuing this legacy by hosting another successful HNMUN. </span>
                        <span className='p'>This year’s conference will feature twenty-five unique committees, each led by a team of passionate directors and assistant directors. Through our General Assemblies, Economic and Social Councils and Regional Bodies, and Specialized Agencies, delegates will have access to a broad range of committee forms and topics. From this wide range of options, delegates have the opportunity to find a committee that fits their interests and matches their preferred style of debate. </span>
                        <span className='p'>To apply for HNMUN 2023, you can register with our online platform MUNBase, linked in the navigation bar of this website. Registration opens at the end of May. Before registering, I strongly encourage perusing our website to learn more about the conference. This website contains information about the Secretariat, registration deadlines and fees, conference policies, and committees. If you have any other questions please do not hesitate to reach out to our Administration team at info@hnmun.org.</span>
                        <span className='p'>The Secretariat and I cannot wait to welcome you to HNMUN in Boston this February!</span>
                        <span className='p'>Sincerely,</span>
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

export default Home;