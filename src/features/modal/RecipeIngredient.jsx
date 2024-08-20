import Fraction from "fraction.js";
import { useRef } from "react";
import { BulletSvg } from "../../svgComponents";
import { useDispatch } from "react-redux";
import { deleteIngredient } from "./newRecipeSlice";
import { BsDot } from "react-icons/bs";

export default function RecipeIngredient({ ingredient, recipe, hasOptions }) {
	const dispatch = useDispatch();

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
			{/* <BulletSvg /> */}
			<BsDot viewBox=" 5.9 5.9  4 4" size={8} className="bullet-icon" />

			<span className="ingredient-quantity">
				{recipe ? quantity : ingredient.quantity}
			</span>
			<p className="ingredient-text">
				<span className="ingredient-unit">{ingredient.unit || ""} </span>
				<span>{ingredient.description}</span>
			</p>
			{hasOptions && (
				<button
					className="delete-ingredient"
					onClick={() => dispatch(deleteIngredient(ingredient.id))}
				>
					✖
				</button>
			)}
		</div>
	);
}
