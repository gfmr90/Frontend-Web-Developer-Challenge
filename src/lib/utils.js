/**
 * Created by Garie on 14/5/2016.
 */
import axios from 'axios';
const ROOT_URL = `https://test.holmusk.com/food/search`;

export default function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    const url = `${ROOT_URL}?q=${inputValue}`;
    var serverResponse;
    axios.get(url).then(function (response) {
        serverResponse = response.data;
    });
    return inputLength === 0 ? [] : serverResponse.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );

}