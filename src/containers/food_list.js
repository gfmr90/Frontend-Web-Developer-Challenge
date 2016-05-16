/**
 * Created by Garie on 9/5/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FoodList extends Component {
    renderList() {
        return this.props.foods.map((food) => {
            return (
                <li
                    key={food._id}
                    className="list-group-item">
                    {food.name}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps({ foods }) {
    // Whatever is returned will show up as props inside of FoodList
    return {
        foods
    };
    // { foods } === { foods: foods }
}


//Promote FoodList from a component to a container -
// it needs to know about this new dispatch method, selectBook. mkae it available as a prop.
export default connect(mapStateToProps)(FoodList);