import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Survey } from "../../models";
import { TextInput, Card, CardHeader, CardFooter, CardBody, Button } from "../common";
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
					<Card>
						<CardHeader>Editor Card</CardHeader>
						<CardBody>This is Editor Card Body</CardBody>
						<CardFooter>This is Editor Card Footer -</CardFooter>
					</Card>
					<Button>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
					<Button>Hello World</Button>
				</div>
			</div>
		);
	}
}

export default Editor;
