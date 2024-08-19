import { configureStore } from "@reduxjs/toolkit";
import newRecipeReducer from "./features/modal/newRecipeSlice";
import bookmarksReducer from "./features/bookmarks/bookmarksSlice";

const store = configureStore({
	reducer: {
		newRecipe: newRecipeReducer,
		bookmarks: bookmarksReducer,
	},
});

export default store;
