/**
 * Created by Garie on 14/5/2016.
 */
import * as types from '../constants/ActionTypes';
import axios from 'axios';

const ROOT_URL = `https://test.holmusk.com/food/search`;

export function loadSuggestionsBegin() {
    return {
        type: types.LOAD_SUGGESTIONS_BEGIN
    };
}

export function updateInputValue(value) {
    return {
        type: types.UPDATE_INPUT_VALUE,
        value
    };
}

export function clearSuggestions() {
    return {
        type: types.CLEAR_SUGGESTIONS
    };
}

export function maybeUpdateSuggestions(suggestions, value) {
    return {
        type: types.MAYBE_UPDATE_SUGGESTIONS,
        suggestions,
        value
    };
}

export function loadSuggestions(value) {
    return dispatch => {
        dispatch(loadSuggestionsBegin());

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const url = `${ROOT_URL}?q=${inputValue}`;

        axios.get(url).then(function (response) {
            dispatch(maybeUpdateSuggestions(getSuggestions(response.data, inputLength, inputValue), value));
        });
    };
}

function getSuggestions(foods, inputLength, inputValue) {
    return inputLength === 0 ? [] : foods.filter(food =>
        food.name.toLowerCase().slice(0, inputLength) === inputValue
    );
}