import Navbar from "./Navbar";
import RecipesDetail from "../features/recipe/RecipeArea";
import RecipesArea from "../features/recipes/RecipesArea";

function AppBox() {
	return (
		<div className="app-box">
			<Navbar />
			<RecipesArea />
			<RecipesDetail />
		</div>
	);
}

export default AppBox;
