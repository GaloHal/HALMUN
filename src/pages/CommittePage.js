import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Title from '../components/Title';
import Button from '../components/Button';

import { committesData } from '../schemas/committeData';

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
                    textClassName='h1 white'
                    hrClassName='white'
                    text={committe['full-name']}
                    desc={{
                        text: committe['short-description'],
                        className: 'p bold white'
                    }}
                />
                <span className='p white header-description'>
                    {committe['detailed-description']}
                </span>
                <a href='https://www.youtube.com/' target='_blank'>
                    <Button textClassName='p' text='Register'/>
                </a>
            </Header>
            <main>
                <div className={styles['chair-content'] + ' content'}>

                    <div className={styles['chair-image']}>
                        <img src={committe['chair-image']} alt={committe['chair-name']} />
                    </div>

                    <div className='chair-info'>
                        <Title
                            textClassName='h2'
                            text='Chair Information'
                            desc={{
                                text: `Message from ${committe['chair-name']}:`,
                                className: 'p bold'
                            }}
                        />
                        <span className='p '>
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