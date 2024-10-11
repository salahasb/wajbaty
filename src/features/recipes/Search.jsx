import ActionBtn from "../../ui/ActionBtn";
import { useState } from "react";
import { useRecipes } from "../../contexts/RecipesContext";
import { SearchSvg } from "../../svgComponents";

export default function Search({ className }) {
	const [query, setQuery] = useState("");

	const { fetchData } = useRecipes();

	function handleSearchRecipes(e) {
		e.preventDefault();
		if (!query) return;
		fetchData(query, setQuery);
		e.currentTarget.children[0].blur();
	}

	return (
		<form className={`search-form ${className}`} onSubmit={handleSearchRecipes}>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type="text"
				placeholder="Search over 1,000,000 recipes..."
			/>

			<ActionBtn className={"search-btn"}>
				<SearchSvg />
				<span>Search</span>
			</ActionBtn>
		</form>
	);
}
