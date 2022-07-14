import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';
import Profile from '../../components/Profile';

import { committesData } from '../../schemas/committeData';
// import { infoData } from '../../schemas/infoData';
import { profileData } from '../../schemas/ProfileData';

// import styles from './DetailCommittePage.module.css';
import styles2 from '../AboutUsPage/AboutUsPage.module.css';
import '../Page.css';

function DetailComittePage(props) {
    const { id } = useParams();
    const committe = committesData.find(data => data['id'] === id);

    useEffect(() => {document.title = props.title.replace("{id}", committe['name']) || "" })


    return (
        <>
            <Navbar />
            <Header
                backgroundImgSrc={committe['image']}
                contentType='header-content--middle'
                title={
                    <Title
                        text={isMobile ? committe['name'] : committe['full-name']}
                        desc={committe['topic-short-description']}
                    />
                }
                // desc={isMobile ? "" : committe["detailed-description"]}
                desc={committe['detailed-description']}
            >
                <LinkButton to={committe['background-guideline-link']}>Background Guide</LinkButton>
            </Header>
            
            <main>
                <div className='content content--middle'>
                    <Title
                        text='Chairs'
                        textSize='h2'
                    />

                    <ul className={styles2['profiles-grid-layout']}>
                        {
                            profileData['chairs'].map((data, _key) => {
                                if (data['nid'] !== committe['chair'] && data['nid'] !== committe['vice-chair'])
                                    return (null);

                                return (
                                    <li className={styles2['profile-item']}>
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

                    <Title
                        text={`Topic: ${committe['topic-title']}`}
                        textSize='h2'
                    />
                    <span className='p'>{committe['topic-description']}</span>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default DetailComittePage;