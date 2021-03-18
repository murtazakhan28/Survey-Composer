import { Component } from "react";
import { Survey } from "../../models";
import "./index.css";

class Editor extends Component {
	state: { survey: Survey } = { survey: new Survey("TEST", "My First Survey", []) };

	render() {
		return (
			<div className="container">
				<div className="left-container bg-secondary border-sm"></div>
				<div className="middle-container"></div>
			</div>
		);
	}
}

export default Editor;
