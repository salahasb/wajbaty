import { useDispatch, useSelector } from "react-redux";
import { BookmarkSvg } from "../../svgComponents";
import { handleBookmark } from "./bookmarksSlice";

function BookmarkRecipe({ selectedRecipe }) {
	const bookmarks = useSelector((store) => store.bookmarks);
	const dispatch = useDispatch();

	const isBookmarked = bookmarks.some(
		(oldRecipe) => oldRecipe.id === selectedRecipe.id
	);

	return (
		<button
			className="bookmark-recipe"
			onClick={() => dispatch(handleBookmark(selectedRecipe, isBookmarked))}
		>
			<BookmarkSvg isBookmarked={isBookmarked} />
		</button>
	);
}

export default BookmarkRecipe;
