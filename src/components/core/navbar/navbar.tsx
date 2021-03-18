import NavbarButton from "./navbarButton";
import "./index.css";

const Navbar = () => {
	return (
		<div className="navbar-container bg-dark">
			<NavbarButton title="Home" path="/" />
			<NavbarButton title="About" path="/about" />
			<NavbarButton title="License" path="/license" />
		</div>
	);
};

export default Navbar;
