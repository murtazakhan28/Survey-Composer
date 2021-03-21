import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { Survey } from "../models";

let store = configureStore({ reducer: rootReducer });

export default store;

export interface RootState {
	survey: { survey: Survey };
}

export type AppDispatch = typeof store.dispatch;
