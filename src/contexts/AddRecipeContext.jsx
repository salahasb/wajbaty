import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useReducer,
	useRef,
} from "react";
import { useBookmarks } from "./BookmarksContext";
import { useModal } from "./ModalContext";
import { delay, postRecipe } from "../utils/helpers";

const AddRecipeContext = createContext();

const initialState = {
	isLoading: false,
	error: "",
	successMsg: "",
	ingredients: [],
	showAddIngredient: true,
};

function reducer(state, { type, payload }) {
	switch (type) {
		case "loading":
			return { ...state, isLoading: true, error: "" };

		case "error":
			return { ...state, isLoading: false, error: payload };

		case "success":
			return { ...state, isLoading: false, error: "", successMsg: payload };

		case "addNewIngredient":
			return {
				...state,
				ingredients: [...state.ingredients, payload],
				showAddIngredient: false,
			};

		case "hideIngredientForm":
			return { ...state, showAddIngredient: false };

		case "showIngredientForm":
			return { ...state, showAddIngredient: true };

		case "init":
			return { ...initialState };

		default:
			return state;
	}
}

const AddRecipeProvider = function AddRecipeProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { setBookmarks } = useBookmarks();
	const { setShowModal } = useModal();

	const savedRecipe = useRef({});

	function passRecipe(passedRecipe) {
		savedRecipe.current = passedRecipe;
	}

	const handleUploadRecipe = useCallback(
		async function handleUploadRecipe() {
			const userRecipe = {
				...savedRecipe.current,
				ingredients: state.ingredients,
			};

			try {
				dispatch({ type: "loading" });

				// Upload Recipe by Post Http Request
				const recipe = await postRecipe(userRecipe);

				// set it as a selected recipe
				window.location.hash = `#${recipe.id}`;

				// Store it to bookmarks
				setBookmarks((bookmarks) => [...bookmarks, recipe]);

				// set success message
				dispatch({
					type: "success",
					payload: "the recipe has successfully added",
				});

				// hide modal window after adding a recipe
				await delay(2);
				setShowModal(false);

				// reset modal
				await delay(0.5);
				dispatch({ type: "init" });
			} catch (error) {
				dispatch({ type: "error", payload: error.message });
			}
		},
		[setBookmarks, setShowModal, state.ingredients]
	);

	const value = useMemo(
		() => ({
			...state,
			dispatch,
			handleUploadRecipe,
			passRecipe,
		}),
		[state, handleUploadRecipe]
	);

	return (
		<AddRecipeContext.Provider value={value}>
			{children}
		</AddRecipeContext.Provider>
	);
};

function useAddRecipe() {
	const context = useContext(AddRecipeContext);

	if (context === undefined) {
		throw new Error(`Error in AddRecipeContext`);
	}

	return context;
}

export { AddRecipeProvider, useAddRecipe };
