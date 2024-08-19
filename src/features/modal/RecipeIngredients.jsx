import RecipeIngredient from "./RecipeIngredient";

export default function RecipeIngredients({ selectedRecipe }) {
	return (
		<div className="recipe-ingredients">
			<span className="title">Recipe ingredients</span>

			<div className="ingredients-box">
				{selectedRecipe.ingredients.map((ing, i) => (
					<RecipeIngredient recipe={selectedRecipe} ingredient={ing} key={i} />
				))}
			</div>
		</div>
	);
}
