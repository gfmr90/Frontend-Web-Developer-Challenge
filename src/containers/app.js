/**
 * Created by Garie on 9/5/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import FoodSuggestions from './search_bar'
import FoodDisplay from './food_display'
import Bookmarks from './bookmarks'
import BurgerMenu from 'react-burger-menu'
import {bindActionCreators} from 'redux';
import { initEnvironment } from '../actions/environment';
import { Router, Route, Link, browserHistory, IndexLink } from 'react-router'

class App extends Component {
    componentDidMount() {
        const { initEnvironment } = this.props;
        initEnvironment();
    }
    render() {
        const PushMenu = BurgerMenu.push;
        return (
            <div>
                <div id="outer-container">
                    <PushMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ 250 }>
                        <IndexLink id="home" className="menu-item style-for-link" to="/" activeClassName="active"><i className="fa fa-search"></i><span>Search Meals</span></IndexLink>
                        <Link id="bookmarks" className="menu-item style-for-link" to="/bookmarks" activeClassName="active"><i className="fa fa-bookmark-o"></i><span>Saved Meals</span></Link>
                    </PushMenu>
                    <main id="page-wrap">
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { environment } = state;
    const { height, isMobile, width } = environment;

    return {
        height,
        isMobile,
        width
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initEnvironment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
