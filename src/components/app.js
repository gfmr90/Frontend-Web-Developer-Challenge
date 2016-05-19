/**
 * Created by Garie on 9/5/2016.
 */
import React, { Component } from 'react';

import FoodSuggestions from '../containers/search_bar'
import FoodDisplay from '../containers/food_display'
import Bookmarks from '../containers/bookmarks'

export default class App extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="food_list">
                    <FoodSuggestions />
                    <Bookmarks />
                </div>
                <div className="food_display">
                    <FoodDisplay />
                </div>
            </div>
        );
    }
}