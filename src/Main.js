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
            <Route exact path='/' element={<HomePage title='Home — HALMUN' />} />
            <Route exact path='/about-us' element={<AboutUsPage title='About Us — HALMUN' />} />
            <Route exact path='/resources' element={<ResourcesPage title='Resources — HALMUN' />} />
            <Route exact path='/sponsors' element={<SponsorsPage title='Partners — HALMUN' />} />

            <Route exact path='/committes' element={<CommittesPage title='Committees — HALMUN' />} />
            <Route exact path='/committes/:id' element={<DetailCommittePage title='{id} — HALMUN' />} />
        </Routes>
    );
}

export default Main;