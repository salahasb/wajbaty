import Copyright from "../../ui/Copyright";
import Loader from "../../ui/Loader";
import Message from "../../ui/Message";
import Recipes from "./Recipes";
import { useRecipes } from "../../contexts/RecipesContext";
import { SmileSvg, TriangleSvg } from "../../svgComponents";
import Search from "./Search";
import CloseButton from "../../ui/CloseButton";
import { useSideBar } from "../../contexts/SideBarContext";
import { useEffect, useRef } from "react";

export default function RecipesArea() {
	const { status, error, recipes } = useRecipes();
	const { showSideBar, setShowSideBar } = useSideBar();
	const sideBar = useRef(null);

	// Detect outside click
	useEffect(() => {
		const onClickOutside = (e) => {
			if (!showSideBar) return;

			if (!e.target.closest(".close-btn")) e.stopPropagation();

			if (!sideBar.current.contains(e.target) || e.target.closest(".recipe"))
				setShowSideBar(false);
		};

		document.addEventListener("click", onClickOutside, true);

		return () => {
			document.removeEventListener("click", onClickOutside, true);
		};
	}, [setShowSideBar, showSideBar]);

	return (
		<div
			ref={sideBar}
			className={`recipes-list-area ${showSideBar ? "show" : ""} `}
		>
			<div className="nav-bar recipes-list">
				<div className="nav-brand">
					<img src="logo.png" alt="logo" />
				</div>

				<CloseButton
					className="recipes-list"
					onClick={(e) => setShowSideBar(false)}
					backBtn={true}
				/>
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
