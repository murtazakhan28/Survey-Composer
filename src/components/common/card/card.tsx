import { ReactChild } from "react";
import { Card as BootstrapCard } from "reactstrap";

const Card = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <BootstrapCard>{children}</BootstrapCard>;
};

export default Card;
