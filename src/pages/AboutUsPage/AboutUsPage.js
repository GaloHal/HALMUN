import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';
import Profile from '../../components/Profile';

import { infoData } from '../../schemas/infoData';
import { profileData } from '../../schemas/ProfileData';

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
                        text='The Secretariat'
                        textSize='h2'
                    />

                    <div>
                        <Profile
                            imageSrc={profileData[0]['imageSrc']}
                            position={profileData[0]['position']}
                            name={profileData[0]['name']}
                            description={profileData[0]['description']}
                        />
                    </div>

                    <ul className={styles['profiles-grid-layout']}>
                        {
                            profileData.map((data, key) => {
                                if (key == 0) return (null);

                                return (
                                    <li className={styles['profile-item']}>
                                        <Profile
                                            imageSrc={data['imageSrc']}
                                            position={data['position']}
                                            name={data['name']}
                                            description={data['description']}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>

            </main>

            <Footer />
        </>
    );
}

export default AboutUsPage;