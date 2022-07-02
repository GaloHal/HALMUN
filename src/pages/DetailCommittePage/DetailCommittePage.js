import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';

import { committesData } from '../../schemas/committeData';
import { infoData } from '../../schemas/infoData';

import styles from './DetailCommittePage.module.css';
import '../Page.css';

function DetailCommittePage() {
    const { id } = useParams();

    const committe = committesData.find(data => data['id'] === id);

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
            >
                <LinkButton to={infoData['registration-link']}>Register Here</LinkButton>
            </Header>
            
            <main>
                
            </main>

            <Footer/>
        </>
    );
}

export default DetailCommittePage;