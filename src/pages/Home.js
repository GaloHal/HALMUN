import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';
import Button from '../components/Button';

import '../App.css';

function Home() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/home-background.jpg'
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
						<li className='committe-grid-item'>
							<Committe
								imgSrc='./images/unsc.jpeg'
								title='UNSC'
								desc='The United Nations Security Council (UNSC) focuses on peace making and security, as well as the safety of all nations.'
							/>
						</li>
						<li className='committe-grid-item'>
							<Committe
								imgSrc='./images/cstd.jpeg'
								title='CSTD'
								desc='The United Nations Commission on Science and Technology for Development is a subsidiary body of the Economic and Social Council. It is responsible for solving problems impacting science, technology and development.'
							/>
						</li>
						<li className='committe-grid-item'>
							<Committe
								imgSrc='./images/who.jpeg'
								title='WHO'
								desc='The World Health Organization is a specialized agency of the United Nations responsible for international public health.'
							/>
						</li>
						<li className='committe-grid-item'>
							<Committe
								imgSrc='./images/unhrc.jpeg'
								title='UNHRC'
								desc='The United Nations Human Rights Council (UNHRC) is responsible for the protection and promotion of all human rights globally.'
							/>
						</li>
					</ul>
				</div>
			</main>

            <Footer/>
        </>
    );
}

export default Home;