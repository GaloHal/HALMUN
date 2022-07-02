import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import CommittesPage from './pages/CommittesPage';
import DetailCommittePage from './pages/DetailCommittePage';
import InformationPage from './pages/InformationPage';
import AboutUsPage from './pages/AboutUsPage';

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about-us' element={<AboutUsPage />} />
            <Route exact path='/information' element={<InformationPage />} />
            
            <Route exact path='/news-and-updates' element={<HomePage />} />
            
            <Route exact path='/committes' element={<CommittesPage />} />
            <Route exact path='/committes/:id' element={<DetailCommittePage />} />
        </Routes>
    );
}

export default Main;