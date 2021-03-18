import Question from "./Question";

class Section {
	private _id: string;
	private _questions: Question[];
	private _title: string;

	constructor(title: string) {
		this._title = title;
		this._questions = [];
	}
}

export default Section;
