import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE } from "../../utils/constant";

const initialState = JSON.parse(localStorage.getItem(LOCAL_STORAGE)) || [];

const bookmarksSlice = createSlice({
	name: "bookmarks",
	initialState,
	reducers: {
		addBookmark(state, { payload }) {
			return payload;
		},
		deleteBookmark(state, { payload }) {
			return payload;
		},
	},
});

export function handleBookmark(selectedRecipe, isBookmarked) {
	return (dispatch, getState) => {
		const { bookmarks } = getState();

		let newBookmarks;

		if (isBookmarked) {
			const callback = (oldRecipe) => selectedRecipe.id !== oldRecipe.id;

			newBookmarks = bookmarks.filter(callback);

			dispatch({ type: "bookmarks/deleteBookmark", payload: newBookmarks });
		} else {
			newBookmarks = [...bookmarks, selectedRecipe];

			dispatch({ type: "bookmarks/addBookmark", payload: newBookmarks });
		}

		localStorage.setItem(LOCAL_STORAGE, JSON.stringify(newBookmarks));
	};
}

export default bookmarksSlice.reducer;
