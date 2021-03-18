import React from "react";
import NavbarButton from "./navbarButton";
import "./index.css";

const Navbar = () => {
	return (
		<div className="navbar-container">
			<NavbarButton title="Nav Button One" path="/" />
		</div>
	);
};

export default Navbar;
