import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';
import Button from '../components/Button';

import { committesData } from '../schemas/committeData';


function MainCommittePage() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                content={() => (
                    <div className='header-content header-content--left'>
                        <Title
                            textClassName='h1 white'
							hrClassName='white'
                            text='Committes'
                        />
						<span className='p header-description white'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</span>
						<Button textClassName='p' text='Register'/>		
                    </div>
                )}
            />
            <main>
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
        </>
    );
}

export default MainCommittePage;