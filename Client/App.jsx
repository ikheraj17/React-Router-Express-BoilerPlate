import React from 'react';
import ReactDOM from 'react-dom';
import{Router, Route} from 'react-router-dom';
import history from './history';
import axios from 'axios';
import Home from './Components/pages/Home';
import One from './Components/pages/One';
import Nav from './Components/menus/Nav';

const App = () => {
    return (
        <Router history={history}>
            <Route path='/' component={Nav} />
            <Route path= '/' exact component={Home} />
            <Route path= '/linkone' exact component={One} />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));