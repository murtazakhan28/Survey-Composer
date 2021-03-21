import { ReactChild } from "react";
import { CardBody as BootstrapCardBody } from "reactstrap";

const CardBody = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return <BootstrapCardBody>{children}</BootstrapCardBody>;
};

export default CardBody;
