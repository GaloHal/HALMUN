import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import CommittesPage from './pages/CommittesPage';
import DetailCommittePage from './pages/DetailCommittePage';
import ResourcesPage from './pages/ResourcesPage';
import SponsorsPage from './pages/SponsorsPage';
import AboutUsPage from './pages/AboutUsPage';

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about-us' element={<AboutUsPage />} />
            <Route exact path='/resources' element={<ResourcesPage />} />
            <Route exact path='/sponsors' element={<SponsorsPage />} />

            <Route exact path='/news-and-updates' element={<HomePage />} />
            
            <Route exact path='/committes' element={<CommittesPage />} />
            <Route exact path='/committes/:id' element={<DetailCommittePage />} />
        </Routes>
    );
}

export default Main;