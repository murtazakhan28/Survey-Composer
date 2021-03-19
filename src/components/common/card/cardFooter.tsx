import { ReactChild } from "react";
import "./index.css";

const CardFooter = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <div className="card-footer">{children}</div>;
};

export default CardFooter;
