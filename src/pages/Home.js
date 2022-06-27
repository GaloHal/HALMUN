import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';
import Button from '../components/Button';

import { committesData } from '../schemas/committeData';

import '../App.css';

function Home() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                content={() => (
                    <div className='header-content header-content--middle'>
                        <Title 
                            textClassName='h1 white'
                            hrClassName='white'
                            text='Welcome to HALMUN!'
                            desc={{
                                text:'HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.',
                                className: 'p bold white'
                            }}
                        />
                        <span className='p bold white'>
                            
                        </span>
                        <span className='p header-description white'>
                            Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. 
                            Enhance your public speaking skills, master the power of team work, expand your knowledge about our ever 
                            changing world, and most importantly have fun.
                            <br/><br/>
                            This year, HALMUN consists of 4 committees including: the United Nations Security Council (UNSC), the 
                            United Nations Commission on Science and Technology for Development (CSTD), the World Health Organization (WHO), 
                            and the United Nations Human Rights Council (UNHRC). 
                        </span>
                        <Button textClassName='p' text='Register'/>
                    </div>
                )}
            />
			<main>
				<div className='news-updates-content content'>
					<Title
						textClassName='h2'
						text='News & Updates'
					/>

				</div>

				<div className='committe-content content'>
					<Title
						textClassName='h2'
						text='Committes'
					/>
					<ul className='committes-grid'>
						{committesData.map((data, key) => {
							return (
								<li className='committe-grid-item'>
									<Committe
										imgSrc={data['image']}
										link={`../committes/${data['id']}`}
										title={data['name']}
										desc={data['short-description']}
									/>
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