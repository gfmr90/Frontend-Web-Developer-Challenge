/**
 * Created by Garie on 15/5/2016.
 */
import React, {Component} from 'react';
import _ from 'lodash';

export default class NutritionTable extends Component {
    renderTable() {
        const nutrients = this.props.selectedNutrients;
        return Object.keys(nutrients).map((nutrient, idx) => {
            return (
                <tr key={idx}>
                    <td>{processNutrientName(nutrient)}</td>
                    {nutrients[nutrient] != null ? <td>
                        {nutrients[nutrient].value}{nutrients[nutrient].unit}
                    </td> : <td>N.A.</td>  }
                </tr>
            )
        });
    }
    render() {
        return(
            <table style={{width: "40%"}}>
                <thead>
                <tr>
                    <th>Nutrition</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {this.renderTable()}
                </tbody>
            </table>
        )
    }
}

let processNutrientName = (name) => {
    var nutrientName = name.split("_");
    return nutrientName.length > 1 ? _.upperFirst(nutrientName.join(' ')) : _.capitalize(nutrientName[0])
};