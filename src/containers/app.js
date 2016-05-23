/**
 * Created by Garie on 9/5/2016.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

import BurgerMenu from 'react-burger-menu'
import {bindActionCreators} from 'redux';
import { initEnvironment } from '../actions/environment';
import { Router, Route, Link, browserHistory, IndexLink } from 'react-router'

class App extends Component {
    componentWillReceiveProps() {
        this.props.initEnvironment();
    }
    renderSideMenu() {
        const PushMenu = BurgerMenu.push;
        return this.props.isMobile ?
            <PushMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ 250 } isOpen={this.props.isOpen}>
                <IndexLink id="home" className="menu-item style-for-link" to="/" activeClassName="active"><i className="fa fa-search"></i><span>Search Meals</span></IndexLink>
                <Link id="bookmarks" className="menu-item style-for-link" to="/bookmarks" activeClassName="active"><i className="fa fa-bookmark-o"></i><span>Saved Meals</span></Link>
            </PushMenu> :
            <PushMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } width={ 250 } isOpen noOverlay>
                <IndexLink id="home" className="menu-item style-for-link" to="/" activeClassName="active"><i className="fa fa-search"></i><span>Search Meals</span></IndexLink>
                <Link id="bookmarks" className="menu-item style-for-link" to="/bookmarks" activeClassName="active"><i className="fa fa-bookmark-o"></i><span>Saved Meals</span></Link>
            </PushMenu>
    }
    render() {
        return (
            <div>
                <div id="outer-container">
                    {this.renderSideMenu()}
                    <main id="page-wrap" className="Site-content">
                        {this.props.children}
                    </main>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { isOpen, overlayDisabled } = state.sideMenu;
    const { isMobile } = state.environment;

    return {
        isMobile,
        isOpen,
        overlayDisabled
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({initEnvironment}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
