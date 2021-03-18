import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { Editor } from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<MainLayout path="/" component={Editor} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
