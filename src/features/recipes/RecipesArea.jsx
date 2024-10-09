import Copyright from "../../ui/Copyright";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";
import Recipes from "./Recipes";
import { useRecipes } from "../../contexts/RecipesContext";
import { SmileSvg, TriangleSvg } from "../../svgComponents";
import Search from "./Search";
import CloseButton from "../../ui/CloseButton";

export default function RecipesArea() {
	const { status, error, recipes } = useRecipes();

	return (
		<div className="recipes-list-area">
			<div className="nav-bar recipes-list">
				<div className="nav-brand">
					<img src="logo.png" alt="logo" />
				</div>

				<CloseButton className="recipes-list" backBtn={true} />
			</div>

			<Search className="show" />

			{status === "loading" && <Loader />}

			{error && (
				<Message>
					<TriangleSvg />
					<span>{error}</span>
				</Message>
			)}

			{recipes.length > 0 && <Recipes recipes={recipes} />}

			{status === "initial" && (
				<Message>
					<SmileSvg />
					<span>
						Start by searching for a recipe or an ingredient. Have fun!
					</span>
				</Message>
			)}

			<Copyright />
		</div>
	);
}
