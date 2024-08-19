import Bookmarks from "../features/bookmarks/Bookmarks";
import NavBtn from "./NavBtn";
import Search from "../features/recipes/Search";
import { AddSvg, BookmarkSvg } from "../svgComponents";

export default function Navbar() {
	return (
		<nav className="nav-bar">
			<div className="nav-brand">
				<img src="logo.png" alt="logo" />
			</div>

			<Search />

			<div className="nav-btn-box">
				<NavBtn>
					<AddSvg size={30} /> add recipe
				</NavBtn>

				<NavBtn className={"bookmarks-btn"}>
					<BookmarkSvg />
					bookmarks
					<Bookmarks />
				</NavBtn>
			</div>
		</nav>
	);
}
