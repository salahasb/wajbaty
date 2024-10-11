import Navbar from "./Navbar";
import RecipesDetail from "../features/recipe/RecipeArea";
import RecipesArea from "../features/recipes/RecipesArea";
import { SideBarProvider } from "../contexts/SideBarContext";

function AppBox() {
	return (
		// <div className="">
		<SideBarProvider>
			<div className="app-container">
				<Navbar />

				<div className="app-box">
					<RecipesArea />

					<RecipesDetail />
				</div>
			</div>
		</SideBarProvider>
		// {/* </div> */}
	);
}

export default AppBox;
