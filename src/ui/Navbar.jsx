import Bookmarks from "../features/bookmarks/Bookmarks";
import NavBtn from "./NavBtn";
import Search from "../features/recipes/Search";
import { AddSvg, BookmarkSvg } from "../svgComponents";
import { HiOutlineMenu } from "react-icons/hi";

export default function Navbar() {
	return (
		<nav className="nav-bar">
			<div className="nav-brand">
				<img src="logo.png" alt="logo" />
			</div>

			<Search />

			<div className="nav-btn-box">
				<NavBtn>
					<AddSvg />
					<span> add recipe </span>
				</NavBtn>

				<NavBtn className={"bookmarks-btn"}>
					<BookmarkSvg />
					<span>bookmarks</span>
					<Bookmarks />
				</NavBtn>
				<NavBtn className={"bookmarks-btn"}>
					<HiOutlineMenu className="hamburger-menu" />{" "}
				</NavBtn>
			</div>
		</nav>
	);
}
