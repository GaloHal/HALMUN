import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import MainCommittePage from './pages/MainCommittePage';
import CommittePage from './pages/CommittePage';

function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about-us' element={<Home />} />
            <Route exact path='/information' element={<Home />} />
            
            <Route exact path='/news-and-updates' element={<Home />} />
            
            <Route exact path='/committes' element={<MainCommittePage />} />
            <Route exact path='/committes/:id' element={<CommittePage />} />
        </Routes>
    );
}

export default Main;