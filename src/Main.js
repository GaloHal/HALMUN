import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ComittesPage from './pages/ComittesPage';
import DetailComittePage from './pages/DetailComittePage';
import InformationPage from './pages/InformationPage';
import AboutUsPage from './pages/AboutUsPage';

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about-us' element={<AboutUsPage />} />
            <Route exact path='/information' element={<InformationPage />} />
            
            <Route exact path='/news-and-updates' element={<HomePage />} />
            
            <Route exact path='/comittes' element={<ComittesPage />} />
            <Route exact path='/comittes/:id' element={<DetailComittePage />} />
        </Routes>
    );
}

export default Main;