import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookmarksContext = createContext();

function BookmarksProvider({ children }) {
	const [bookmarks, setBookmarks] = useLocalStorage([], "bookmarks");

	return (
		<BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
			{children}
		</BookmarksContext.Provider>
	);
}

function useBookmarks() {
	const context = useContext(BookmarksContext);
	if (context === undefined) {
		throw new Error(`Error in BookmarksContext`);
	}

	return context;
}

export { BookmarksProvider, useBookmarks };
