import { CONSTANTS } from "../utils";
import Page from "./Page";

const { SURVEY_STATUS } = CONSTANTS;

type SurveyStatus = keyof typeof SURVEY_STATUS;

class Survey {
	private _id: string;
	private _title: string;
	private _pages: Page[];
	private _status: SurveyStatus = SURVEY_STATUS.DRAFT as SurveyStatus;

	constructor(id: string, title: string, pages: Page[]) {
		this._id = id;
		this._title = title;
		this._pages = pages;
	}

	get title() {
		return this._title;
	}

	set title(title: string) {
		this._title = title;
	}

	get status() {
		return this._status;
	}

	set status(status: SurveyStatus) {
		this._status = status;
	}
}

export default Survey;
