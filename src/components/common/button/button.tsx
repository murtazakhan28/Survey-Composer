import { ReactChild } from "react";
import "./index.css";

const Button = ({ children }: { children: ReactChild }) => {
	return <button className="button bg-custom-dark">{children}</button>;
};

export default Button;
