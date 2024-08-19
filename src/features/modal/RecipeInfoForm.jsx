import { useDispatch, useSelector } from "react-redux";
import { setRecipeInfo } from "./newRecipeSlice";

export default function AddRecipeForm() {
	const { title, url, image, publisher, prepTime, servings } = useSelector(
		(store) => store.newRecipe.recipe
	);

	const dispatch = useDispatch();

	return (
		<div className="boxi">
			<div className="form-header">
				<h3>Recipe Data</h3>
			</div>

			<form className="form-data">
				<label>Title</label>
				<input
					value={title}
					onChange={(e) => dispatch(setRecipeInfo({ title: e.target.value }))}
					type="text"
					placeholder="PIZZA DIP"
					required={true}
				/>
				<label>URL</label>
				<input
					value={url}
					onChange={(e) => dispatch(setRecipeInfo({ url: e.target.value }))}
					type="text"
					placeholder="https://forkify-v2.netlify.app/icons.c781f215.svg#icon-arrow-right "
				/>
				<label>Image URL</label>
				<input
					value={image}
					onChange={(e) => dispatch(setRecipeInfo({ image: e.target.value }))}
					type="text"
					placeholder="https://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg"
					required={true}
				/>
				<label>Publisher</label>
				<input
					value={publisher}
					onChange={(e) =>
						dispatch(setRecipeInfo({ publisher: e.target.value }))
					}
					type="text"
					placeholder="Closet Cooking"
					required={true}
				/>
				<label> Prep time</label>
				<input
					min={1}
					value={prepTime}
					onChange={(e) =>
						dispatch(setRecipeInfo({ prepTime: e.target.value }))
					}
					type="number"
					placeholder={60}
					required={true}
				/>
				<label>Servings</label>
				<input
					min={1}
					value={servings}
					onChange={(e) =>
						dispatch(setRecipeInfo({ servings: e.target.value }))
					}
					type="number"
					placeholder={4}
					required={true}
				/>
			</form>
		</div>
	);
}
