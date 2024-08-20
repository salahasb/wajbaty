import ActionBtn from "../../ui/ActionBtn";
import { ArrowRightSvg } from "../../svgComponents";
import RecipeIngredients from "../modal/RecipeIngredients";
import RecipeOptions from "./RecipeOptions";

function RecipeDetail({ selectedRecipe, setSelectedRecipe }) {
	return (
		<div className="recipe-detail-box">
			<div className="recipe-img">
				<img src={selectedRecipe.image_url} alt={selectedRecipe.title} />
				<h1 className="recipe-title">
					<span>{selectedRecipe.title}</span>
				</h1>
			</div>
			<RecipeOptions
				selectedRecipe={selectedRecipe}
				setSelectedRecipe={setSelectedRecipe}
			/>

			<RecipeIngredients selectedRecipe={selectedRecipe} />

			<RecipeHow selectedRecipe={selectedRecipe} />
		</div>
	);
}

function RecipeHow({ selectedRecipe }) {
	return (
		<div className="how-to-cook">
			<span className="title">HOW TO COOK IT</span>

			<p className="recipe-direction-text">
				This recipe was carefully designed and tested by{" "}
				<strong>{selectedRecipe.publisher}</strong> Please check out directions
				at their website.
			</p>

			<a href={selectedRecipe.source_url}>
				<ActionBtn className="how-to-cook-btn">
					Directions
					<ArrowRightSvg />
				</ActionBtn>
			</a>
		</div>
	);
}

export default RecipeDetail;
