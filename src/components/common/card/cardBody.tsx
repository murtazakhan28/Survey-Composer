import { ReactChild } from "react";
import "./index.css";

const CardBody = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <div className="card-body">{children}</div>;
};

export default CardBody;
