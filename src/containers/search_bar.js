/**
 * Created by Garie on 9/5/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchFood } from '../actions/index';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        //Take the existing function, bind it to this and replace the existing function with it
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch food data
        this.props.fetchFood(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Query for the food yo"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchFood }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);