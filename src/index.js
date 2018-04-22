import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import AuthRoute from './componet/authRoute/authRoute.js';
import BossInfo from './container/bossinfo/bossinfo.js';

import reducers from './reducer';
import './config';
import Login from './container/login/login.js';
import Register from './container/register/register.js';
import './redux/index.css';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : () => { }
));

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute />
                <Switch>
                    <Route path='/bossinfo' component={BossInfo}></Route>
                    <Route path='/login' component={Login} ></Route>
                    <Route path='/register' component={Register} ></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

