import { useState } from "react";
import ActionBtn from "../../ui/ActionBtn";
import { useDispatch } from "react-redux";
import { addIngredient, hideIngredientForm } from "./newRecipeSlice";

export default function AddIngredientForm() {
	const [quantity, setQuantity] = useState("");
	const [unit, setUnit] = useState("");
	const [description, setDescription] = useState("");

	// const { dispatch } = useAddRecipe();

	const dispatch = useDispatch();

	function handleAddIngredient(e) {
		e.preventDefault();
		if (!quantity || !unit || !description) return;

		dispatch(addIngredient({ quantity, unit, description }));
	}

	return (
		<form onSubmit={handleAddIngredient} style={{ display: "center" }}>
			<div className="form-data">
				<label>Quantity</label>
				<input
					min={1}
					value={quantity}
					onChange={(e) => setQuantity(+e.target.value)}
					type="number"
					placeholder="5"
					required={true}
				/>
				<label>Unit</label>
				<input
					value={unit}
					onChange={(e) => setUnit(e.target.value)}
					type="text"
					placeholder="cup, oz, tbsps"
					required={true}
				/>
				<label>Description</label>
				<input
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					type="text"
					placeholder=" cream cheese room temperature"
					required={true}
				/>
			</div>

			<div className="add-ingredients-btn-form">
				<ActionBtn className={"add-ingredient"}>Add</ActionBtn>

				<ActionBtn
					onClick={() => dispatch(hideIngredientForm())}
					className="cancel"
				>
					Cancel
				</ActionBtn>
			</div>
		</form>
	);
	// return (
	// 	<form onSubmit={handleAddIngredient} style={{ display: "center" }}>
	// 		<div className="form-data">
	// 			<label>Quantity</label>
	// 			<input
	// 				min={1}
	// 				value={quantity}
	// 				onChange={(e) => setQuantity(+e.target.value)}
	// 				type="number"
	// 				placeholder="5"
	// 				required={true}
	// 			/>
	// 			<label>Unit</label>
	// 			<input
	// 				value={unit}
	// 				onChange={(e) => setUnit(e.target.value)}
	// 				type="text"
	// 				placeholder="cup, oz, tbsps"
	// 				required={true}
	// 			/>
	// 			<label>Description</label>
	// 			<input
	// 				value={description}
	// 				onChange={(e) => setDescription(e.target.value)}
	// 				type="text"
	// 				placeholder=" cream cheese room temperature"
	// 				required={true}
	// 			/>
	// 		</div>

	// 		<div className="add-ingredients-btn-form">
	// 			<ActionBtn className={"add-ingredient"}>Add</ActionBtn>

	// 			<ActionBtn
	// 				onClick={() => dispatch({ type: "hideIngredientForm" })}
	// 				className="cancel"
	// 			>
	// 				Cancel
	// 			</ActionBtn>
	// 		</div>
	// 	</form>
	// );
}
