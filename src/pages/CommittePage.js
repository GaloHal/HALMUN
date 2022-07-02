import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import { LinkButton } from '../components/Buttons';

import { committesData } from '../schemas/committeData';
import { infoData } from '../schemas/infoData';

import styles from './CommittePage.module.css';

function CommittePage() {
    const { id } = useParams();

    const committe = committesData.find(data => data['id'] === id);

    return (
        <>
            <Header
                backgroundImgSrc={committe['image']}
                className='header-content header-content--left'>
                <Title
                    text={committe['full-name']}
                    desc={committe['short-description']}
                />
                <span className='p white header-description'>
                    {committe['detailed-description']}
                </span>

                <LinkButton to={infoData['registration-link']}>Register</LinkButton>
            </Header>
            <main>
                <div className={styles['chair-content'] + ' content'}>

                    <div className={styles['chair-image']}>
                        <img src={committe['chair-image']} alt={committe['chair-name']} />
                    </div>

                    <div className='chair-info'>
                        <Title
                            text='Chair Information'
                            desc={`Message from ${committe['chair-name']}:`}
                            textSize='h2'
                        />
                        <span className='p'>
                            {committe['chair-description']}
                        </span>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default CommittePage;