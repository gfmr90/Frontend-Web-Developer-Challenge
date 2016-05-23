/**
 * Created by Garie on 15/5/2016.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteSelectedBookmark, deleteAllBookmarks} from '../actions/bookmarks';
import {displayFoodDetails} from '../actions/food_display';
import Modal from 'react-modal';
import FoodDisplay from '../containers/food_display'

export default class Bookmarks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.deleteAllBookmarks = this.deleteAllBookmarks.bind(this);
    }
    deleteBookmark(bookmarkId, e) {
        this.props.deleteSelectedBookmark(bookmarkId);
    }
    displayBookmark(bookmark, e) {
        this.props.displayFoodDetails(bookmark);
    }
    renderList() {
        return this.props.bookmarks.map((bookmark, idx) => {
            let boundBookmarkClick = this.deleteBookmark.bind(this, bookmark._id);
            let boundLinkClick = this.displayBookmark.bind(this, bookmark);
            return(
                <li key={bookmark._id}><a href="javascript:void(0)" onClick={boundLinkClick}>{bookmark.name}</a> <button id={bookmark._id} className="btn btn-red pull-right" onClick={boundBookmarkClick}>X</button></li>
            )
        });
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }
    deleteAllBookmarks() {
        this.setState({modalIsOpen: false});
        this.props.deleteAllBookmarks();
    }
    render() {
        const customStyles = {
            content : {
                top                   : '40%',
                left                  : '45%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                border                : '1px solid #ddd',
                transform             : 'translate(-50%, -50%)'
            }
        };
        return(
            <div className="container">
                <div className="Grid Grid--gutters Grid--full large-Grid--fit">
                    <div className="Grid-cell">
                        <FoodDisplay />
                    </div>
                </div>
                <div className="Grid Grid--gutters Grid--full large-Grid--fit">
                    <div className="Grid-cell">
                        <div className="bookmarks_list">
                            <div className="bookmark-header">
                                <h2 className="pull-left">Bookmarks</h2>
                                <button className="btn btn-default btn-delete-all" onClick={this.openModal}>Delete All Bookmarks</button>
                            </div>
                            <ul className="bookmarks">
                                {this.renderList()}
                            </ul>
                            <Modal
                                isOpen={this.state.modalIsOpen}
                                onAfterOpen={this.afterOpenModal}
                                onRequestClose={this.closeModal}
                                style={customStyles} >
                                <button onClick={this.closeModal} className="pull-right btn-transparent btn-close-modal">X</button>
                                <h1 className="text-center">Delete All Bookmarks?</h1>
                                <div className="text-center">
                                    <a href="#" className="btn-modal" onClick={this.deleteAllBookmarks}>
                                        <h3 className="text-inline">Yes</h3>
                                    </a>
                                    <h3 className="text-inline">&nbsp;/&nbsp;</h3>
                                    <a href="#" className="btn-modal" onClick={this.closeModal}>
                                        <h3 className="text-inline">No</h3>
                                    </a>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bookmarks: state.bookmarks
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteSelectedBookmark, displayFoodDetails, deleteAllBookmarks}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);