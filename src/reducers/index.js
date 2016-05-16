/**
 * Created by Garie on 9/5/2016.
 */
import { combineReducers } from 'redux';
import FoodieReducer from './reducerSuggest';
import selectedFood from './food_display';
import Bookmarks from './bookmarks';

const rootReducer = combineReducers({
    foodie: FoodieReducer,
    selectedFood: selectedFood,
    bookmarks: Bookmarks
});

export default rootReducer;