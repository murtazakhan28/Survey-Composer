import { Fragment } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Container } from "reactstrap";
import { Navbar } from "../core";
import "./index.css";

const MainLayout = ({ component: Component, ...rest }: RouteProps) => {
	return (
		<Route
			render={renderProps => {
				return (
					<Fragment>
						<Navbar />
						<div className="container-fluid app-container">
							{Component ? <Component {...renderProps} /> : null}
						</div>
					</Fragment>
				);
			}}
			{...rest}
		/>
	);
};

export default MainLayout;
