class Option {
	private _id: string;
	private _title: string;

	constructor(id: string, title: string) {
		this._id = id;
		this._title = title;
	}

	get title() {
		return this._title;
	}

	set title(title: string) {
		this._title = title;
	}
}

export default Option;
