import { combineReducers } from "@reduxjs/toolkit";
import SurveyReducer from "./surveySlice";

const rootReducer = combineReducers({
	survey: SurveyReducer
});

export default rootReducer;
