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
                    <>
                        <Title 
                            className='h1' 
                            text='Welcome to HALMUN!'
                        />
                        <span className='p bold'>
                            HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.
                        </span>
                        <span className='p header-description'>
                            Now is the time for youth to find their voice in the world and HALMUN provides just that opportunity. 
                            Enhance your public speaking skills, master the power of team work, expand your knowledge about our ever 
                            changing world, and most importantly have fun.
                            <br/><br/>
                            This year, HALMUN consists of 4 committees including: the United Nations Security Council (UNSC), the 
                            United Nations Commission on Science and Technology for Development (CSTD), the World Health Organization (WHO), 
                            and the United Nations Human Rights Council (UNHRC). 
                        </span>
                        <Button className='p' text='Register'/>
                    </>
                )}
            />
			<main>
				<div className='news-updates-content content'>
					<Title
						className='h2'
						text='News & Updates'
					/>

				</div>

				<div className='committe-content content'>
					<Title
						className='h2'
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