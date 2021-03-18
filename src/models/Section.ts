import Question from "./Question";
import uniqueId from "lodash/uniqueId";
class Section {
	private _id: string;
	private _questions: Question[];
	private _title: string;

	constructor(title: string) {
		this._title = title;
		this._questions = [];
		this._id = uniqueId("SECTION_ID_");
	}
}

export default Section;
