import { useDispatch } from "react-redux";
import { showModal } from "../features/modal/newRecipeSlice";

export default function NavBtn({ children, className }) {
	const dispatch = useDispatch();

	return (
		<button
			className={`nav-btn ${className}`}
			onClick={() => !className && dispatch(showModal())}
		>
			{children}
		</button>
	);
}
