/**
 * Created by Garie on 9/5/2016.
 */
import { combineReducers } from 'redux';
import searchBar from './search_bar';
import selectedFood from './food_display';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
    searchBar,
    selectedFood,
    bookmarks
});

export default rootReducer;