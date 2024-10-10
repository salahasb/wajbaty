import PageBtn from "./PageBtn";
import Recipe from "../../ui/Recipe";
import { RES_PER_PAGE } from "../../utils/constant";
import { useState } from "react";
import { ArrowLeftSvg, ArrowRightSvg } from "../../svgComponents";

export default function Recipes({ recipes }) {
	const [page, setPage] = useState(0);

	const start = page * RES_PER_PAGE;
	const end = start + RES_PER_PAGE;

	const curRecipes = recipes.slice(start, end);

	const isLastPage = !recipes[end + 1];

	function handleChangePage(forward) {
		if (forward) return setPage((oldPage) => ++oldPage);

		if (!page) return;
		setPage((oldPage) => --oldPage);
	}

	return (
		<div className={`recipes-list-box`}>
			{curRecipes.map((recipe) => (
				<Recipe key={recipe.id} recipe={recipe} />
			))}

			<div className="paginations-box">
				{page !== 0 && (
					<PageBtn className="previous" onClick={() => handleChangePage()}>
						<ArrowLeftSvg />
						Page {page}
					</PageBtn>
				)}

				{!isLastPage && (
					<PageBtn
						className="next"
						onClick={(e) => {
							e.stopPropagation();
							console.log(e.target.closest(".recipes-list-area"));

							handleChangePage(true);
						}}
					>
						Page {page + 2}
						<ArrowRightSvg />
					</PageBtn>
				)}
			</div>
		</div>
	);
}
