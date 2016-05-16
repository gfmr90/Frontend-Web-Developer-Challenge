/**
 * Created by Garie on 16/5/2016.
 */
import * as types from '../constants/ActionTypes';

export function deleteSelectedBookmark(bookmarkId) {
    return {
        type: types.DELETE_SELECTED_BOOKMARK,
        bookmarkId
    };
}

export function deleteAllBookmarks() {
    return {
        type: types.DELETE_ALL_BOOKMARKS
    };
}
