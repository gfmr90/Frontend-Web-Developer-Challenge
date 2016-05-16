/**
 * Created by Garie on 13/5/2016.
 */

import * as types from '../constants/ActionTypes'

const initialState = {
    value: '',
    suggestions: [],
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_INPUT_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });

        case types.CLEAR_SUGGESTIONS:
            return Object.assign({}, state, {
                suggestions: []
            });

        case types.LOAD_SUGGESTIONS_BEGIN:
            return Object.assign({}, state, {
                isLoading: true
            });

        case types.MAYBE_UPDATE_SUGGESTIONS:
            // Ignore suggestions if input value changed
            if (action.value !== state.value) {
                return Object.assign({}, state, {
                    isLoading: false
                });
            }

            return Object.assign({}, state, {
                suggestions: action.suggestions,
                isLoading: false
            });

        default:
            return state;
    }
}