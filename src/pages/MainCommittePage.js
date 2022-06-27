import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';

import { committesData } from '../schemas/committeData';

function MainCommittePage() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                content={() => (
                    <>
                        <Title
                            className='h1'
                            text='Committes'
                        />
                    </>
                )}
            />
            <main>
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
        </>
    );
}

export default MainCommittePage;