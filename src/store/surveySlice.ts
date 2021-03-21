import { createSlice } from "@reduxjs/toolkit";
import { Survey } from "../models";

const SurveySlice = createSlice({
	initialState: {
		survey: new Survey("_1", "My Test Survey", [])
	},
	name: "survey",
	reducers: {
		setTitle: (surveySlice, action) => {
			let tempSurvey = { ...surveySlice.survey };
			tempSurvey.title = action.payload.title;
			surveySlice.survey = { ...tempSurvey };
		}
	}
});

export default SurveySlice.reducer;
export const { setTitle } = SurveySlice.actions;
