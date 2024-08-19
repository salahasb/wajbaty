import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
	const [showModal, setShowModal] = useState(false);

	function handleCloseModal(e) {
		const notClicked =
			e.target !== e.currentTarget &&
			e.target.closest("button") !== e.currentTarget;

		if (!notClicked) setShowModal(false);
	}

	return (
		<ModalContext.Provider
			value={{ showModal, setShowModal, handleCloseModal }}
		>
			{children}
		</ModalContext.Provider>
	);
}

function useModal() {
	const context = useContext(ModalContext);

	if (context === undefined) {
		throw new Error(`Error in ModalContext`);
	}

	return context;
}

export { ModalProvider, useModal };
