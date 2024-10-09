import { createContext, useContext, useState } from "react";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
	const [showSideBar, setShowSideBar] = useState(false);

	return (
		<SideBarContext.Provider value={{ showSideBar, setShowSideBar }}>
			{children}
		</SideBarContext.Provider>
	);
}

function useSideBar() {
	const context = useContext(SideBarContext);

	if (context === undefined) {
		throw new Error(`Error in SideBarContext`);
	}

	return context;
}

export { SideBarProvider, useSideBar };
