import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { MainLayout } from "./components/layouts";
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<MainLayout path="/" component={() => <p>COMPONENT</p>} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
