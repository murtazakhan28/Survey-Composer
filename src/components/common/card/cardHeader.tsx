import { ReactChild } from "react";
import "./index.css";

const CardHeader = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <div className="card-header">{children}</div>;
};

export default CardHeader;
