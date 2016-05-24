/**
 * Created by Garie on 11/5/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Autosuggest from 'react-autosuggest';
import { clearSuggestions, updateInputValue, loadSuggestions } from '../actions/search_bar';
import { displayFoodDetails } from '../actions/food_display';
import _ from 'lodash';
import FoodDisplay from '../containers/food_display'

class FoodSuggestions extends Component {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.getSuggestionValue = this.getSuggestionValue.bind(this);
        this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    }
    getSuggestionValue(suggestion) { // when suggestion selected, this function tells
        this.props.displayFoodDetails(suggestion);
        return suggestion.name;                 // what should be the value of the input
    }

    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }
    onChange(event, { newValue }) {
        this.props.updateInputValue(newValue);

        const value = newValue.trim();

        if (value === '') {
            this.props.clearSuggestions();
        }
    }
    onSuggestionsUpdateRequested({ value }) {
        this.props.loadSuggestions(value);
    }
    render() {
        const { value, suggestions, isLoading } = this.props;
        //Lodash for filtering out duplicate suggestion objects
        const uSuggestions = _.uniqBy(suggestions, (s) => { return s.name; });
        const { onChange, getSuggestionValue, onSuggestionsUpdateRequested, renderSuggestion } = this;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: onChange
        };
        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

        return (
            <div className="container">
                <div className="Grid Grid--gutters Grid--full large-Grid--fit">
                    <div className="Grid-cell">
                        <Autosuggest suggestions={uSuggestions}
                                     onSuggestionsUpdateRequested={onSuggestionsUpdateRequested}
                                     getSuggestionValue={getSuggestionValue}
                                     renderSuggestion={renderSuggestion}
                                     inputProps={inputProps}/>
                        <div className="status">
                            <strong>Status:</strong> {status}
                        </div>
                    </div>
                </div>
                <div className="Grid Grid--gutters Grid--full large-Grid--fit">
                    <div className="Grid-cell">
                        <FoodDisplay />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { value, suggestions, isLoading } = state.searchBar;

    return {
        value,
        suggestions,
        isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateInputValue, clearSuggestions, loadSuggestions, displayFoodDetails}, dispatch);
}

//Promote FoodList from a component to a container -
// it needs to know about this new dispatch method, selectBook. mkae it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(FoodSuggestions);