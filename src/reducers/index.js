/**
 * Created by Garie on 9/5/2016.
 */
import { combineReducers } from 'redux';
import searchBar from './search_bar';
import selectedFood from './food_display';
import bookmarks from './bookmarks';
import { routerReducer } from 'react-router-redux'
import environment from '../reducers/environment';

const rootReducer = combineReducers({
    searchBar,
    selectedFood,
    bookmarks,
    environment,
    routing: routerReducer
});

export default rootReducer;