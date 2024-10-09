import Bookmarks from "../features/bookmarks/Bookmarks";
import NavBtn from "./NavBtn";
import Search from "../features/recipes/Search";
import { AddSvg, BookmarkSvg } from "../svgComponents";
import { HiOutlineMenu } from "react-icons/hi";
import { useSideBar } from "../contexts/SideBarContext";
import { showModal } from "../features/modal/newRecipeSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
	const dispatch = useDispatch();
	const { setShowSideBar } = useSideBar();

	return (
		<nav className="nav-bar">
			<div className="nav-brand">
				<img src="logo.png" alt="logo" />
			</div>

			<Search />

			<div className="nav-btn-box">
				<NavBtn onClick={() => dispatch(showModal())}>
					<AddSvg />
					<span> add recipe </span>
				</NavBtn>

				<NavBtn className={"bookmarks-btn"}>
					<BookmarkSvg />
					<span>bookmarks</span>
					<Bookmarks />
				</NavBtn>

				<NavBtn
					className={"bookmarks-btn"}
					onClick={() => setShowSideBar((s) => !s)}
				>
					<HiOutlineMenu className="hamburger-menu" />
				</NavBtn>
			</div>
		</nav>
	);
}
