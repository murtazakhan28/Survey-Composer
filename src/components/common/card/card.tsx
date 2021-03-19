import { ReactChild } from "react";
import "./index.css";

const Card = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <div className="card">{children}</div>;
};

export default Card;
