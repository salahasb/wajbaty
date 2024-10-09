import Navbar from "./Navbar";
import RecipesDetail from "../features/recipe/RecipeArea";
import RecipesArea from "../features/recipes/RecipesArea";
import { useState } from "react";
import { SideBarProvider } from "../contexts/SideBarContext";

function AppBox() {
	return (
		<div className="app-box">
			<SideBarProvider>
				<Navbar />
				<RecipesArea />
			</SideBarProvider>

			<RecipesDetail />
		</div>
	);
}

export default AppBox;
