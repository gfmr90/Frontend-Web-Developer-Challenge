/**
 * Created by Garie on 14/5/2016.
 */
import * as types from '../constants/ActionTypes';

export function displayFoodDetails(selectedFood) {
    return {
        type: types.DISPLAY_FOOD_DETAILS,
        selectedFood
    };
}

export function displaySelectedNutrients(selectedValue, selectedNutrients) {
    return {
        type: types.DISPLAY_SELECTED_NUTRIENTS,
        selectedValue,
        selectedNutrients
    };
}

export function bookmarkSelectedFood(selectedFood) {
    return {
        type: types.BOOKMARK_SELECTED_FOOD,
        selectedFood
    };
}