import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
// import LinkButton from '../../components/LinkButton';
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
            <Header
                backgroundImgSrc={committe['image']}
                type='header-content--middle'
                title={
                    <Title
                        text={committe['full-name']}
                        desc={committe['short-description']}
                    />
                }
                desc={committe['detailed-description']}
            >
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
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default DetailComittePage;