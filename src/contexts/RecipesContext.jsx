import { createContext, useContext, useReducer } from "react";
import { getRecipes } from "../utils/helpers";

const RecipesContext = createContext();

const initialState = { status: "initial", error: "", recipes: [] };

function reducer(state, { type, payload }) {
	switch (type) {
		case "loading":
			return { ...state, error: "", status: "loading", recipes: [] };

		case "error":
			return { ...state, status: "error", error: payload, recipes: [] };

		case "success":
			return { ...state, status: "", error: "", recipes: payload };

		default:
			return state;
	}
}

// the provider of the RecipesContext
function RecipesProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function fetchData(query, setQuery) {
		try {
			// setQuery("");
			dispatch({ type: "loading" });

			// send http req to get recipes
			const recipes = await getRecipes(query);

			dispatch({ type: "success", payload: recipes });
		} catch (error) {
			console.error(error);

			if (error.message === "Failed to fetch")
				error.message = "Please check your internet connection!";

			dispatch({ type: "error", payload: error.message });
		}
	}

	return (
		<RecipesContext.Provider value={{ ...state, fetchData }}>
			{children}
		</RecipesContext.Provider>
	);
}

// the Consumer
function useRecipes() {
	const context = useContext(RecipesContext);

	if (context === undefined) {
		throw new Error(`Error in RecipesContext`);
	}

	return context;
}

export { RecipesProvider, useRecipes };
