/**
 * Created by Garie on 9/5/2016.
 */
import axios from 'axios';

const ROOT_URL = `https://test.holmusk.com/food/search`;
export const FETCH_FOOD = 'FETCH_FOOD';

export function fetchFood(food) {
    const url = `${ROOT_URL}?q=${food}`;
    const request = axios.get(url);
    
    return {
        type: FETCH_FOOD,
        payload: request
    };
}