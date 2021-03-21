import { ReactChild } from "react";
import { CardHeader as BootstrapCardHeader } from "reactstrap";

const CardHeader = ({ children }: { children?: ReactChild | ReactChild[] }) => {
	return (
		<BootstrapCardHeader
			style={{ backgroundColor: "#212", color: "white", textTransform: "uppercase", fontWeight: "bold" }}
		>
			{children}
		</BootstrapCardHeader>
	);
};

export default CardHeader;
