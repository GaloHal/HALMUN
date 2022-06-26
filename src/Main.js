import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';

function Main() {
    return (
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/committes/uncs" component={Home} />
            <Route exact path="/committes/cstd" component={Home} />
            <Route exact path="/committes/who" component={Home} />
            <Route exact path="/committes/unhrc" component={Home} />
        </Routes>
    );
}

export default Main;