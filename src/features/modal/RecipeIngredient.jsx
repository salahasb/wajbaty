import Fraction from "fraction.js";
import { useRef } from "react";
import { BulletSvg } from "../../svgComponents";

export default function RecipeIngredient({ ingredient, recipe }) {
	const oldServings = useRef(recipe?.servings || "");

	const quantity =
		recipe &&
		new Fraction(
			+((ingredient.quantity / oldServings.current) * recipe.servings)
		).toFraction() !== "0"
			? new Fraction(
					+((ingredient.quantity / oldServings.current) * recipe.servings)
			  ).toFraction()
			: "";

	return (
		<div className="ingredient">
			<BulletSvg />

			<span className="ingredient-quantity">
				{recipe ? quantity : ingredient.quantity}
			</span>

			<p className="ingredient-text">
				<span className="ingredient-unit">{ingredient.unit || ""} </span>
				<span>{ingredient.description}</span>
			</p>
		</div>
	);
}
