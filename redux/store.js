import { applyMiddleware, combineReducers, createStore } from "redux";

import ToDoReducer from "./reducers/ToDoReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  todo: ToDoReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
