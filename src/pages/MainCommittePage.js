import Header from '../components/Header';
import Title from '../components/Title';
import Committe from '../components/Committe';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';

import { committesData } from '../schemas/committeData';
import { infoData } from '../schemas/infoData';

import styles from './MainCommittePage.module.css';
import './Page.css';

function MainCommittePage() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                className='header-content header-content--left'>
				<Title
					text='Committes'
				/>
				<span className='p header-description white'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</span>

				<LinkButton to={infoData['registration-link']}>Register</LinkButton>
			</Header>

            <main>
           		<div className={`${styles['committe-content']} content`}>
					<Title
						text='Committes'
						textSize='h2'
					/>
					<ul className={styles['committes-grid']}>
						{committesData.map((data, key) => {
							return (
								<li className={styles['committe-grid-item']}>
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

export default MainCommittePage;