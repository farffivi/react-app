import React from 'react';
import { BrowserRouter , Route ,Switch} from 'react-router-dom'; 

import Home from './Home';
import signIn from './signIn';

export default () => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" render={props => <Home {...props} /> } />
    <Route exact path="/signIn" render={props => <signIn {...props} /> } />
    </Switch>
    </BrowserRouter>
)