import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';
import Button from '../components/Button';

import { committesData } from '../schemas/committeData';

import '../App.css';
import { infoData } from '../schemas/infoData';

function Home() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                className='header-content header-content--middle'>
                <Title 
                    textClassName='h1 white'
                    hrClassName='white'
                    text='Welcome to HALMUN!'
                    desc={{
                        text:'HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.',
                        className: 'p bold white'
                    }}
                />
                <span className='p header-description white'>
                    Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. 
                    Enhance your public speaking skills, master the power of team work, expand your knowledge about our ever 
                    changing world, and most importantly have fun.
                    <br/><br/>
                    This year, HALMUN consists of 3 committees including: the United Nations Security Council (UNSC), the 
                    the United Nations Human Rights Council (UNHRC), and the Economic and Financial Affairs Council configuration (ECOFIN). 
                </span>

                <a href='https://www.youtube.com/' target='_blank'>
                    <Button textClassName='p' text='Register'/>
                </a>

            </Header>
			<main>
				{/* <div className='news-updates-content content'>
					<Title
						textClassName='h2'
						text='News & Updates'
					/>

				</div> */}

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
                
                <div class='date-info-content content'>
                    <Title
                        textClassName='h2'
                        text='Future Conference Dates'
                    />

                    <ul className='date-list'>
                        {infoData['conference-dates'].map((data, key) => {
                            return (
                                <li className='date-item'>
                                    <span className='p'>{data['date']}</span>
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