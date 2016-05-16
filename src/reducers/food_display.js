/**
 * Created by Garie on 14/5/2016.
 */
import * as types from '../constants/ActionTypes'

const initialState = {
    selectedFood: {},
    selectedValue: '',
    clearable: false,
    searchable: false,
    selectedNutrients: {}
};

export default function (state = initialState, action){
    switch(action.type) {
        case types.DISPLAY_FOOD_DETAILS:
            return Object.assign({}, state, {
                selectedFood: action.selectedFood,
                selectedValue: action.selectedFood.portions[0].name,
                selectedNutrients: action.selectedFood.portions[0].nutrients.important
            });
        case types.DISPLAY_SELECTED_NUTRIENTS:
            return Object.assign({}, state, {
                selectedValue: action.selectedValue,
                selectedNutrients: action.selectedNutrients
            });
        default:
            return state;
    }
}