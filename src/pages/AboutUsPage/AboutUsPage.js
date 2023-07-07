import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Profile from '../../components/Profile';

import { profileData } from '../../schemas/ProfileData';

import styles from './AboutUsPage.module.css';

function AboutUsPage(props) {
    useEffect(() => {document.title = props.title || "" })

    const secretariat = profileData['secretariat']
    const dais = profileData['chairs']

    return (
        <>
            <Navbar />
             <Header
                backgroundImgSrc='/images/background.jpeg'
                contentType={isMobile ? 'header-content--middle' : 'header-content--left'}
                title={
                    <Title
                        text='About HALMUN'
                    />
                }
                desc='Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. Enhance your public speaking skills, master the power of teamwork and meet people from all over the world.
                HALMUN 2023 is the third iteration of the conference, this time consisting of 3 committees: the United Nations Security Council (UNSC), the World Health Organisation (WHO), and the Economic and Financial Committee (ECOFIN).'
            />
            <main>
                <div className='content content--middle'>
                    <Title
                        text='The Secretariat'
                        textSize='h2'
                    />

                    <Profile
                        imageSrc={secretariat[0]['imageSrc']}
                        position={secretariat[0]['position']}
                        name={secretariat[0]['name']}
                        description={secretariat[0]['description']}
                        mail={secretariat[0]['mail']}
                    />

                    <ul className={styles['profiles-grid-layout']}>
                        {
                            secretariat.map((data, key) => {
                                if (key === 0 || key === secretariat.length - 1) return (null);

                                return (
                                    <li className={styles['profile-item']}>
                                        <Profile
                                            imageSrc={data['imageSrc']}
                                            position={data['position']}
                                            name={data['name']}
                                            description={data['description']}
                                            mail={data['mail']}
                                        />
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <Profile
                        imageSrc={secretariat[secretariat.length - 1]['imageSrc']}
                        position={secretariat[secretariat.length - 1]['position']}
                        name={secretariat[secretariat.length - 1]['name']}
                        description={secretariat[secretariat.length - 1]['description']}
                        mail={secretariat[secretariat.length - 1]['mail']}
                    />

                    <Title
                        text='The Dais'
                        textSize='h2'
                    />

                    <ul className={styles['profiles-grid-layout']}>
                        {
                            dais.map((data, key) => {
                                return (
                                    <li className={styles['profile-item']}>
                                        <Profile
                                            imageSrc={data['imageSrc']}
                                            position={data['position']}
                                            name={data['name']}
                                            description={data['description']}
                                            mail={data['mail']}
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
