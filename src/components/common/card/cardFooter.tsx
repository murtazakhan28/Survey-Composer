import { ReactChild } from "react";
import { CardFooter as BootstrapCardFooter } from "reactstrap";

const CardFooter = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <BootstrapCardFooter>{children}</BootstrapCardFooter>;
};

export default CardFooter;
