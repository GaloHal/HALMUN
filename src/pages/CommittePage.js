import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Title from '../components/Title';

import { committesData } from '../schemas/committeData';

function CommittePage() {
    const { id } = useParams();

    const committe = committesData.find(data => data['id'] === id);

    return (
        <>
            <Header
                backgroundImgSrc={committe['image']}
                content={() => (
                    <div className='header-content header-content--left'>
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
                    </div>
                )}
            />
            <main>
                <div className='chair-content content'>
                    <Title
                        textClassName='h2'
                        text='About the Chair'
                    />

                    <div className='chair-content-inner'>
                        <div className='chair-image'>
                            <img src={committe['chair-image']} alt={committe['chair-name']} />
                        </div>

                        <div className='chair-info'>
                            <span className='p'>
                                Message from {committe['chair-name']}:
                                <br/>
                            </span>
                            <span className='p'>
                                {committe['chair-description']}
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CommittePage;