import Servings from "./Servings";
import { ClockSvg } from "../../svgComponents";
import BookmarkRecipe from "../bookmarks/BookmarkRecipe";

export default function RecipeOptions({ selectedRecipe, setSelectedRecipe }) {
	return (
		<div className="recipe-options">
			<div className="cooking-time-box">
				<ClockSvg />

				<div className="text">
					<strong>{selectedRecipe.cooking_time}</strong>
					<span> minutes</span>
				</div>
			</div>

			<Servings
				selectedRecipe={selectedRecipe}
				setSelectedRecipe={setSelectedRecipe}
			/>

			<BookmarkRecipe selectedRecipe={selectedRecipe} />
		</div>
	);
}
