import { CONSTANTS } from "../utils";
const { DATA_TYPES, DISPLAY_TYPES } = CONSTANTS;
import Option from "./Option";

type DataType = keyof typeof DATA_TYPES;
type DisplayType = keyof typeof DISPLAY_TYPES;

class Question {
	private _id: string;
	private _title: string;
	private _type: DataType;
	private _displayType: DisplayType = DISPLAY_TYPES.DEFAULT as DisplayType;
	private _options: Option[] = [];

	constructor(id: string, title: string, type: DataType) {
		this._id = id;
		this._title = title;
		this._type = type;
	}

	get title() {
		return this._title;
	}

	set title(title: string) {
		this._title = title;
	}

	get type() {
		return this._type;
	}

	set type(type: DataType) {
		this._type = type;
	}

	get displayType() {
		return this._displayType;
	}

	set displayType(displayType: DisplayType) {
		this._displayType = displayType;
	}

	get options() {
		return this._options;
	}
}

export default Question;
