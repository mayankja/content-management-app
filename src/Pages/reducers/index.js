import { getPagesHandler } from "./getPages";
import { createReducer } from "../../core/reduxUtils";

const initialState = {
  pages: []
}

const handlers = {
  ...getPagesHandler,
};

const pageReducer = createReducer(initialState, handlers);

export default pageReducer;