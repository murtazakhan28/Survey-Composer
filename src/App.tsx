import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { MainLayout } from "./components/layouts";
import { Editor } from "./components";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<MainLayout path="/" component={Editor} />
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
