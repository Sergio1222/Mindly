//redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//reducers
import psyhologistsReducer from "./reducers/psyhologistsReducer";
import favoriteReducer from "./reducers/favoriteReducer";
import statisticsReducer from "./reducers/statisticsReducer";

const reducer = combineReducers({
  psyhologistsReducer,
  favoriteReducer,
  statisticsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
