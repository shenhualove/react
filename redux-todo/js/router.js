/**
 * Created by apple on 17/2/27.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,browserHistory,IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import toDo from './reducers';

let store=createStore(toDo);

ReactDOM.render((
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route  path="/" >
            <IndexRoute component={App} />
        </Route>
    </Router>
    </Provider>
), document.body)