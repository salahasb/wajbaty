import Message from "../../ui/Message";
import Loader from "../../ui/Loader";

import { useState, useEffect } from "react";
import { URL_PATH } from "../../utils/constant";

import { SmileSvg, TriangleSvg } from "../../svgComponents";
import RecipeDetail from "./RecipeDetail";

export default function RecipesDetail() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [selectedRecipe, setSelectedRecipe] = useState({});

	useEffect(() => {
		async function fetchRecipe(id) {
			try {
				setError("");
				setIsLoading(true);

				const res = await fetch(`${URL_PATH}/${id}`);
				const data = await res.json();

				if (!res.ok) throw new Error(data.message);

				const { recipe } = data.data;

				console.log(recipe);
				setSelectedRecipe(recipe);
			} catch (error) {
				console.error(error);

				if (error.message === "Failed to fetch")
					error.message = "Please check your internet connection!";
				setError(error.message);
				setSelectedRecipe({});
			} finally {
				setIsLoading(false);
			}
		}

		const handleHashChange = () => {
			const hash = window.location.hash.substring(1);
			if (!hash) return;

			// send http request to get the Recipe based on it's ID
			fetchRecipe(hash);
		};

		window.addEventListener("hashchange", handleHashChange);
		console.log("an event handler added");

		handleHashChange();
	}, []);

	return (
		<div className="recipe-details-area">
			{isLoading && <Loader />}

			{error && (
				<Message>
					<TriangleSvg />
					<span>{error}</span>
				</Message>
			)}

			{selectedRecipe.id && (
				<RecipeDetail
					selectedRecipe={selectedRecipe}
					setSelectedRecipe={setSelectedRecipe}
				/>
			)}

			{!error && !isLoading && !selectedRecipe.id && (
				<Message>
					<SmileSvg />
					<span>
						Start by searching for a recipe or an ingredient. Have fun!
					</span>
				</Message>
			)}
		</div>
	);
}
