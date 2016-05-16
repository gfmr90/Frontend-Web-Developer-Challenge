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

import App from './components/app';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'

const store = createStore(
    reducers,
    {},
    compose(
        autoRehydrate(),
        applyMiddleware(ReduxPromise, ReduxThunk)
    )
);
persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));