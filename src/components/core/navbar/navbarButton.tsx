import { NavLink } from "react-router-dom";

const NavbarButton = ({ title, path }: { title: string; path: string }) => {
	return (
		<NavLink to={path}>
			<button className="navbar-button">{title}</button>
		</NavLink>
	);
};

export default NavbarButton;
