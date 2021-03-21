import { Component } from "react";
import { Row, Col } from "reactstrap";
import { Survey } from "../../models";
import { connect, ConnectedProps } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { setTitle } from "../../store/surveySlice";
import { TextInput } from "../common";

const mapStateToProps = (state: RootState) => ({
	survey: state.survey.survey
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
	setTitle: (title: string) => dispatch(setTitle(title))
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

class Editor extends Component<Props> {
	// constructor(props: Props) {
	// 	super(props);
	// }
	state: { survey: Survey; value: string } = {
		survey: new Survey("TEST", "My First Survey", []),
		value: ""
	};

	handleChange = (value: string) => this.setState({ value });

	render() {
		console.log(this.props.survey);
		return (
			<Row className="h-100">
				<Col xs={2} className="bg-custom-secondary"></Col>
				<Col xs={6}>
					<Row>
						<Col xs={2}>Survey Title</Col>
						<Col xs={10}>
							<TextInput value={this.props.survey.title} onChange={title => this.props.setTitle(title)} />
						</Col>
					</Row>
				</Col>
				<Col xs={4} className="bg-custom-secondary"></Col>
			</Row>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
