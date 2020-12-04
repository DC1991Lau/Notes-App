import { combineReducers } from "redux";

import notes from "./notes";
import form from "./form";
import categories from "./categories";

export const reducers = combineReducers({ notes, form, categories });
