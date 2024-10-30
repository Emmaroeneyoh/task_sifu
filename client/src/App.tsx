import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/homepage";

function App() {
	return (
		<div className="w-full min-h-screen">
			<Routes>
				<Route path="/" element={<Homepage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
