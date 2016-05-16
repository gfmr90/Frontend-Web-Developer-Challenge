/**
 * Created by Garie on 9/5/2016.
 */
import { FETCH_FOOD } from '../actions/index'

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_FOOD:
            return action.payload.data;
        default:
            return state;
    }
}