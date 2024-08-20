import { useSelector } from "react-redux";
import RecipeIngredient from "./RecipeIngredient";

export default function IngredientsList() {
	const ingredients = useSelector(
		(store) => store.newRecipe.recipe.ingredients
	);

	return (
		<div className="modal-ingredients-list">
			{ingredients.length > 0 &&
				ingredients.map((ing, i) => (
					<RecipeIngredient key={ing.id} ingredient={ing} hasOptions={true} />
				))}
		</div>
	);
}
