import RecipeInfoForm from "./RecipeInfoForm";
import ActionBtn from "../../ui/ActionBtn";
import { UploadSvg } from "../../svgComponents";
import RecipeAddIngredient from "./RecipeAddIngredient";
import { upload } from "./newRecipeSlice";
import { useDispatch, useSelector } from "react-redux";

function AddRecipe() {
	const { error, isLoading } = useSelector((store) => store.newRecipe.status);

	const dispatch = useDispatch();
	return (
		<>
			<div className="add-recipe-box">
				<RecipeInfoForm />
				<RecipeAddIngredient />
			</div>

			<ActionBtn
				onClick={() => dispatch(upload())}
				className={`upload-btn ${isLoading ? "disabled" : ""}`}
			>
				<UploadSvg />
				Upload
			</ActionBtn>

			{error && <p className="upload-error">{error}</p>}
		</>
	);
}

export default AddRecipe;
