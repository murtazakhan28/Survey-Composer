import Section from "./Section";
import uniqueId from "lodash/uniqueId";

class Page {
	private _id: string;
	private _title: string;
	private _sections: Section[];

	constructor(title: string) {
		this._title = title;
		this._sections = [];
		this._id = uniqueId("PAGE_ID_");
	}
}

export default Page;
