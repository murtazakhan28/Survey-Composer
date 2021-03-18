import React, { createElement } from "react";
import { Fragment } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Navbar } from "../core";
import "./index.css";

const MainLayout = ({ component, ...rest }: RouteProps) => {
	return (
		<Route
			render={renderProps => {
				return (
					<Fragment>
						<Navbar />
						<div className="container">{/* {createElement(
								() => (
									<component />
								),
								renderProps
							)} */}</div>
					</Fragment>
				);
			}}
			{...rest}
		/>
	);
};

export default MainLayout;
