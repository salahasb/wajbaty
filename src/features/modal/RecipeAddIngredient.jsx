import AddIngredientForm from "./AddIngredientForm";
import IngredientsList from "./IngredientsList";
import { AddSvg } from "../../svgComponents";
import { useAddRecipe } from "../../contexts/AddRecipeContext";
import { useDispatch, useSelector } from "react-redux";
import { showIngredientForm } from "./newRecipeSlice";

function RecipeAddIngredient() {
	// const { showAddIngredient, dispatch } = useAddRecipe();

	const showAddIngredient = useSelector(
		(store) => store.newRecipe.showAddIngredient
	);
	const dispatch = useDispatch();

	return (
		<div className="boxi">
			<div className="form-header">
				<h3>Ingredients</h3>

				<button
					className="add-btn"
					onClick={() => dispatch(showIngredientForm())}
				>
					{!showAddIngredient && <AddSvg size={24} />}
				</button>
			</div>

			{showAddIngredient ? <AddIngredientForm /> : <IngredientsList />}
		</div>
	);
	// return (
	// 	<div className="boxi">
	// 		<div className="form-header">
	// 			<h3>Ingredients</h3>

	// 			<button
	// 				className="add-btn"
	// 				onClick={() => dispatch({ type: "showIngredientForm" })}
	// 			>
	// 				{!showAddIngredient && <AddSvg />}
	// 			</button>
	// 		</div>

	// 		{showAddIngredient ? <AddIngredientForm /> : <IngredientsList />}
	// 	</div>
	// );
}

export default RecipeAddIngredient;
