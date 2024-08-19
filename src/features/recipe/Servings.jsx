import { AddSvg, MinusSvg, UsersSvg } from "../../svgComponents";

export default function Servings({ selectedRecipe, setSelectedRecipe }) {
	function handleChangeServings(isIncrease) {
		if (isIncrease) {
			return setSelectedRecipe((oldRecipe) => ({
				...oldRecipe,
				servings: oldRecipe.servings + 1,
			}));
		}

		if (selectedRecipe.servings === 1) return;

		setSelectedRecipe((oldRecipe) => ({
			...oldRecipe,
			servings: oldRecipe.servings - 1,
		}));
	}

	return (
		<div className="servings-box">
			<UsersSvg />
			<div className="text">
				<strong>{selectedRecipe.servings}</strong>
				<span> servings</span>
			</div>
			<div className="serving-btn-box">
				<button
					className="servings-btn minus-btn"
					onClick={() => handleChangeServings()}
				>
					<MinusSvg />
				</button>
				<button
					className="servings-btn  "
					onClick={() => handleChangeServings(true)}
				>
					<AddSvg size={24} />
				</button>
			</div>
		</div>
	);
}
