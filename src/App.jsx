import Modal from "./features/modal/Modal";
import AppBox from "./ui/AppBox";
import { RecipesProvider } from "./contexts/RecipesContext";
import { BrowserRouter } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<RecipesProvider>
				<AppBox />
			</RecipesProvider>

			<Modal />
		</BrowserRouter>
	);
}
