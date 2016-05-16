/**
 * Created by Garie on 14/5/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';
import Select from 'react-select';
import {displaySelectedNutrients, bookmarkSelectedFood} from '../actions/food_display';
import NutritionTable from '../components/nutritionTable';


class FoodDisplay extends Component {
    constructor(props) {
        super(props);

        this.bookmark = this.bookmark.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    renderSelect() {
        const portions = this.props.selectedFood.portions;
        //Underscore to filter out duplicate portion objects
        const uPortions = _.uniqBy(portions, (p) => {
            return p.name;
        });
        return portions ? uPortions.map((portion, idx) => {
            return (
                Object.assign({}, {value: portion.name, label: portion.name, nutrients: portion.nutrients.important})
            )
        }) : [];
    }
    bookmark(event) {
        this.props.bookmarkSelectedFood(this.props.selectedFood);
    }
    updateValue(val) {
        this.props.displaySelectedNutrients(val.value, val.nutrients);
    }
    renderButton() {
        let selectedFoodId = this.props.selectedFood._id;
        let bookmarkExist = selectedFoodId ? _.some(this.props.bookmarks, function(obj) { return obj._id == selectedFoodId }) : false;
        return bookmarkExist ? <button className="btn btn-green disabled">Bookmark</button> : <button className="btn btn-green" onClick={this.bookmark}>Bookmark</button>
    }
    render() {
        return (
            <div>
                <h1>{this.props.selectedFood.name}</h1>
                {this.props.selectedFood.name ?
                    <div>
                        <Select
                            name="form-field-name"
                            searchable={this.props.searchable}
                            clearable={this.props.clearable}
                            value={this.props.selectedValue}
                            options={this.renderSelect()}
                            onChange={this.updateValue}
                            className="portionSelect"
                        />
                        <NutritionTable
                            selectedNutrients={this.props.selectedNutrients}
                        />
                        <div className="btn-group">
                            {this.renderButton()}
                        </div>
                    </div> :
                    <h1>Get started by searching for your<br/> favourite food on the sidebar!</h1>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {selectedFood, selectedValue, clearable, searchable, selectedNutrients} = state.selectedFood;
    const bookmarks = state.bookmarks;
    return {
        selectedFood, selectedValue, clearable, searchable, selectedNutrients, bookmarks
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({displaySelectedNutrients, bookmarkSelectedFood}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDisplay);