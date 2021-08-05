import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import pageReducer from '../Pages/reducers';

const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(pageReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;