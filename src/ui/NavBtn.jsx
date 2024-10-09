import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/newRecipeSlice";

export default function NavBtn({ children, className, onClick }) {
	return (
		<button className={`nav-btn ${className || ""}`} onClick={onClick}>
			{children}
		</button>
	);
}
