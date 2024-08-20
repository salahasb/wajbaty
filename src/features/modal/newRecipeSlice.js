import { createSlice } from "@reduxjs/toolkit";
import { delay, postRecipe } from "../../utils/helpers";
import Bookmarks from "../bookmarks/Bookmarks";
import { addBookmark, handleBookmark } from "../bookmarks/bookmarksSlice";

const initialState = {
	status: {
		isLoading: false,
		error: "",
		successMsg: "",
	},
	recipe: {
		title: "",
		url: "",
		image: "",
		publisher: "",
		prepTime: 1,
		servings: 4,
		ingredients: [],
	},
	showAddIngredient: true,
	showModal: false,
};

const newRecipeSlice = createSlice({
	name: "newRecipe",
	initialState,
	reducers: {
		setRecipeInfo(state, { payload }) {
			state.recipe = { ...state.recipe, ...payload };
		},
		showModal(state) {
			state.showModal = true;
		},
		hideModal(state) {
			state.showModal = false;
		},
		addIngredient(state, { payload }) {
			state.recipe.ingredients.push(payload);
			state.showAddIngredient = false;
		},
		hideIngredientForm(state) {
			state.showAddIngredient = false;
		},
		showIngredientForm(state) {
			state.showAddIngredient = true;
		},
		deleteIngredient(state, { payload }) {
			state.recipe.ingredients = state.recipe.ingredients.filter(
				(ing) => ing.id !== payload
			);
		},
		loading(state) {
			state.status.isLoading = true;
		},
		error(state, { payload }) {
			state.status.isLoading = false;
			state.status.error = payload;
			state.status.successMsg = "";
		},
		success(state) {
			state.status.isLoading = false;
			state.status.error = "";
			state.status.successMsg = "the recipe has successfully added";
		},
		init() {
			return initialState;
		},
	},
});

export function upload() {
	return async function (dispatch, getState) {
		const { recipe } = getState().newRecipe;

		const userRecipe = {
			...recipe,
			cooking_time: recipe.prepTime,
			image_url: recipe.image,
			source_url: recipe.url,
		};

		try {
			dispatch({ type: "newRecipe/loading" });

			// Upload Recipe by Post Http Request
			const recipe = await postRecipe(userRecipe);

			// set it as a selected recipe
			window.location.hash = `#${recipe.id}`;

			// Store it to bookmarks
			dispatch(handleBookmark(recipe));

			// set success message
			dispatch({
				type: "newRecipe/success",
			});

			// hide modal window after adding a recipe
			await delay(2);
			dispatch({ type: "newRecipe/hideModal" });

			// reset modal
			await delay(0.5);

			dispatch({ type: "newRecipe/init" });
		} catch (error) {
			dispatch({ type: "newRecipe/error", payload: error.message });
		}
	};
}

export const {
	addIngredient,
	hideIngredientForm,
	showIngredientForm,
	deleteIngredient,
	showModal,
	hideModal,
	setRecipeInfo,
} = newRecipeSlice.actions;

export default newRecipeSlice.reducer;
