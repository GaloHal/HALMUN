import Navbar from './components/Navbar';
import Title from './components/Title';
import Button from './components/Button';
import Background from './components/Background';
import './App.css';

function App() {
	return (
		<body>
			<header>
				<Navbar/>
				<Background/>
				
				<div className='header-container'>
					
					<div className='header-content'>
						<Title 
							className='h1' 
							text='Welcome to HALMUN!'
							desc={{
								'className': 'p bold',
								'text': 'HALMUN is a free Model United Nations conference that is organised by the Haileybury Almaty school.'
							}}
						/>
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
					</div>

				</div>
			</header>
			<main>
				<div> 
					Hello world this is text
				</div>
			</main>
		</body>
	);
}


export default App;
