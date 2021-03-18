import Section from "./Section";

class Page {
	private _id: string;
	private _title: string;
	private _sections: Section[];

	constructor(title: string) {
		this._title = title;
		this._sections = [];
	}
}

export default Page;
