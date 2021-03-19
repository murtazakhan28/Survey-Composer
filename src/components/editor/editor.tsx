import { Component } from "react";
import { Survey } from "../../models";
import { TextInput } from "../common";
import "./index.css";

class Editor extends Component {
	state: { survey: Survey; value: string } = {
		survey: new Survey("TEST", "My First Survey", []),
		value: ""
	};

	handleChange = (value: string) => this.setState({ value });

	render() {
		return (
			<div className="container">
				<div className="left-container bg-secondary border-sm"></div>
				<div className="middle-container">
					<TextInput value={this.state.value} onChange={this.handleChange} placeholder="Placeholder" />
				</div>
			</div>
		);
	}
}

export default Editor;
