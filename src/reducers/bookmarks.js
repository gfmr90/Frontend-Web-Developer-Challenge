/**
 * Created by Garie on 16/5/2016.
 */
import * as types from '../constants/ActionTypes'

const initialState = [];

export default function (state = initialState, action){
    switch(action.type) {
        case types.BOOKMARK_SELECTED_FOOD:
            return [
                ...state,
                Object.assign({}, action.selectedFood, {
                  bookmarkedDateTime: Date.now()
                })
            ];
        case types.DELETE_SELECTED_BOOKMARK:
            return state.filter(item => item._id !== action.bookmarkId);
        case types.DELETE_ALL_BOOKMARKS:
            return initialState;
        default:
            return state;
    }
}