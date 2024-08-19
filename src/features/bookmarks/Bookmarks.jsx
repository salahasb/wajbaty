import { useSelector } from "react-redux";
import Message from "../../ui/Message";
import Recipe from "../../ui/Recipe";
import { useBookmarks } from "../../contexts/BookmarksContext";
import { SmileSvg } from "../../svgComponents";

function Bookmarks() {
	// const { bookmarks } = useBookmarks();
	const bookmarks = useSelector((store) => store.bookmarks);

	return (
		<div className={`recipes-list-box  bookmarks`}>
			{!bookmarks.length > 0 && (
				<Message>
					<SmileSvg />
					<span>No bookmarks yet. Find a nice recipe and bookmark it ;)</span>
				</Message>
			)}

			{bookmarks.map((recipe) => (
				<Recipe key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
}

export default Bookmarks;
