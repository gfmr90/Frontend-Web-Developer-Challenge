// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import {persistStore, autoRehydrate} from 'redux-persist'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './reducers';
import ReduxThunk from 'redux-thunk'
import BookMarks from './containers/bookmarks'
import Search from './containers/search_bar'
import App from './containers/app'

const store = createStore(
    reducers,
    {},
    compose(
        autoRehydrate(),
        applyMiddleware(ReduxPromise, ReduxThunk)
    )
);
persistStore(store);

// Listen for route changes
// browserHistory.listen(function(ev) {
//     console.log('listen', ev.pathname);
// });

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Search}/>
                <Route path="bookmarks" component={BookMarks}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));