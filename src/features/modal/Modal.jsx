import Message from "../../ui/Message";
import { CloseSvg, SmileSvg } from "../../svgComponents";
import AddRecipe from "./AddRecipe";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./newRecipeSlice";
import CloseButton from "../../ui/CloseButton";

export default function Modal() {
	const successMsg = useSelector((store) => store.newRecipe.status.successMsg);
	const showModal = useSelector((store) => store.newRecipe.showModal);

	const dispatch = useDispatch();

	function handleCloseModal(e) {
		const notClicked =
			e.target !== e.currentTarget &&
			e.target.closest("button") !== e.currentTarget;

		if (!notClicked) dispatch(hideModal());
	}

	return (
		<div
			className={`overlay ${showModal ? "show" : ""}`}
			onClick={handleCloseModal}
		>
			<div className="add-recipe-modal">
				<CloseButton onClick={handleCloseModal} />

				{!successMsg ? (
					<AddRecipe />
				) : (
					<Message>
						<SmileSvg />
						<span>{successMsg}</span>
					</Message>
				)}
			</div>
		</div>
	);
}
