/**
 * Created by Garie on 23/5/2016.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    isOpen: false
};

export default function sideMenu (state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_IS_MOBILE:
            return Object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}